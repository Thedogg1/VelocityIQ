import { NextRequest, NextResponse } from 'next/server';
import { getUkLeadsFilePath, saveUkLead } from '@/lib/uk-landing/saveUkLead';
import { sendUkLeadReportEmail } from '@/lib/uk-landing/sendUkLeadReportEmail';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email delivery is not configured. Please contact admin@getvelocityiq.com.' },
        { status: 503 },
      );
    }

    let body: {
      name?: string;
      email?: string;
      firmName?: string;
      exitReportHtml?: string;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const firmName = body.firmName?.trim() ?? '';
    const exitReportHtml = body.exitReportHtml?.trim() ?? '';

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }
    if (!firmName) {
      return NextResponse.json({ error: 'Firm name is required' }, { status: 400 });
    }
    if (!exitReportHtml || exitReportHtml.length < 100) {
      return NextResponse.json(
        { error: 'Exit tax calculation report is missing. Please regenerate the calculator results and try again.' },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const record = {
      name,
      email,
      firmName,
      source: '/uk Exit Tax Calculator',
      submittedAt,
    };

    try {
      await saveUkLead(record);
      console.log(`UK lead saved to ${getUkLeadsFilePath()}`);
    } catch (fileError) {
      console.error('Failed to save UK lead to file:', fileError);
    }

    try {
      await sendUkLeadReportEmail({ name, email, firmName, exitReportHtml });
    } catch (emailError) {
      console.error('Failed to send UK lead report email:', emailError);
      return NextResponse.json(
        { error: 'We could not send your report by email. Please try again or contact admin@getvelocityiq.com.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('UK lead capture error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 },
    );
  }
}
