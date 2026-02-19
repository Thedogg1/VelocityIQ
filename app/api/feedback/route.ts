import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY is not configured in environment variables');
    console.error('For localhost: Create .env.local file in project root with: RESEND_API_KEY=re_xxxxx');
    console.error('For Vercel: Set RESEND_API_KEY in project settings → Environment Variables');
    console.error('⚠️ Email sending will fail, but form submission will continue');
  } else {
    console.log('✅ RESEND_API_KEY is configured');
  }

  try {
    let formData;
    try {
      formData = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const {
      name,
      clarity,
      workflow,
      usefulFeatures,
      missingFeatures,
      improvements,
      email,
      optIn,
    } = formData;

    // Send email to admin
    const feedbackHtml = `
      <h2>New Dashboard Feedback</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Opt-in for updates:</strong> ${optIn ? 'Yes' : 'No'}</p>
      
      <h3>Ratings</h3>
      <p><strong>Clarity:</strong> ${clarity} ⭐</p>
      <p><strong>Workflow:</strong> ${workflow} ⭐</p>
      
      <h3>Feedback Details</h3>
      <p><strong>Most useful features:</strong> ${usefulFeatures}</p>
      <p><strong>Missing features:</strong> ${missingFeatures || 'None specified'}</p>
      <p><strong>Suggestions for improvement:</strong> ${improvements || 'None provided'}</p>
      
      <hr>
      <p style="font-size: 12px; color: #666;">
        <em>Submitted: ${new Date().toLocaleString()}</em>
      </p>
    `;

    // Log to console for backup (matching wrigitail pattern)
    console.log('='.repeat(80));
    console.log('NEW FEEDBACK SUBMISSION');
    console.log('='.repeat(80));
    console.log(`Name: ${name}`);
    console.log(`Email: ${email || 'Not provided'}`);
    console.log(`Clarity: ${clarity} ⭐`);
    console.log(`Workflow: ${workflow} ⭐`);
    console.log(`Useful Features: ${usefulFeatures}`);
    console.log(`Missing Features: ${missingFeatures || 'None'}`);
    console.log(`Improvements: ${improvements || 'None'}`);
    console.log(`Opt-in: ${optIn ? 'Yes' : 'No'}`);
    console.log('='.repeat(80));

    // Send email using Resend (matching working wrigitail pattern)
    try {
      const emailResult = await resend.emails.send({
        from: 'VelocityIQ Feedback <admin@getvelocityiq.com>',
        to: ['admin@getvelocityiq.com'],
        subject: 'New VelocityIQ Feedback Submission',
        html: feedbackHtml,
        replyTo: email || undefined,
      });
      
      if (emailResult.error) {
        console.error('⚠️ Resend returned an error:', emailResult.error);
        console.error('Error details:', JSON.stringify(emailResult.error, null, 2));
      } else {
        console.log('✅ Email sent successfully to admin@getvelocityiq.com');
        console.log('Email ID:', emailResult.data?.id);
      }
    } catch (emailError) {
      console.error('⚠️ Email sending failed with exception:', emailError);
      console.error('Error details:', emailError instanceof Error ? emailError.message : String(emailError));
      // Continue anyway - don't block the user (matching wrigitail pattern)
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Feedback submitted successfully',
    });
  } catch (error) {
    console.error('Error processing feedback submission:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process submission',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
