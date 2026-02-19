import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
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

    const { data, error } = await resend.emails.send({
      from: 'VelocityIQ Feedback <onboarding@getvelocityiq.com>',
      to: ['admin@getvelocityiq.com'],
      subject: 'New VelocityIQ Feedback Submission',
      html: feedbackHtml,
    });

    if (error) {
      console.error('Resend error (feedback email failed):', error);

      // Send error notification email to admin about the failure
      try {
        await resend.emails.send({
          from: 'VelocityIQ System <onboarding@getvelocityiq.com>',
          to: ['admin@getvelocityiq.com'],
          subject: '⚠️ Feedback Submission Failed - Email Error',
          html: `
            <h2>Feedback Submission Failed</h2>
            
            <p><strong>The feedback submission email failed to send.</strong></p>
            
            <h3>Attempted Feedback Details:</h3>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Clarity:</strong> ${clarity} ⭐</p>
            <p><strong>Workflow:</strong> ${workflow} ⭐</p>
            <p><strong>Useful Features:</strong> ${usefulFeatures}</p>
            
            <h3>Error Details:</h3>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">
${JSON.stringify(error, null, 2)}
            </pre>
            
            <p><strong>Action Required:</strong> Feedback was not received. User may try again.</p>
            
            <hr>
            <p style="font-size: 12px; color: #666;">
              <em>Timestamp: ${new Date().toLocaleString()}</em>
            </p>
          `,
        });
      } catch (adminErrorError) {
        console.error(
          'Failed to send error notification to admin:',
          adminErrorError
        );
      }

      return NextResponse.json(
        { error: 'Failed to send feedback email' },
        { status: 500 }
      );
    }

    // Return success
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}
