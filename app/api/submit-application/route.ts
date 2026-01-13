import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: 'VelocityIQ Pilot Applications <onboarding@getvelocityiq.com>', // Update with your verified domain
      to: ['admin@getvelocityiq.com'], // Your email
      replyTo: formData.email,
      subject: `New Pilot Application: ${formData.companyName}`,
      html: `
        <h1>New Pilot Application Submitted</h1>
        
        <h2>Company Information</h2>
        <p><strong>Company Name:</strong> ${formData.companyName}</p>
        <p><strong>Contact Name:</strong> ${formData.contactName}</p>
        <p><strong>Title:</strong> ${formData.contactTitle}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
        
        <h2>Platform/Firm Profile</h2>
        <p><strong>Number of Advisors:</strong> ${formData.numAdvisors}</p>
        <p><strong>Business-Owning HNWI Clients:</strong> ${
          formData.numClients || 'Not provided'
        }</p>
        <p><strong>AUM/Revenue Range:</strong> ${
          formData.aum || 'Not provided'
        }</p>
        <p><strong>Primary Markets:</strong> ${
          formData.markets || 'Not provided'
        }</p>
        
        <h2>Technology Environment</h2>
        <p><strong>CRM System:</strong> ${formData.crm || 'Not provided'}</p>
        <p><strong>Other Technology:</strong> ${
          formData.otherTech || 'Not provided'
        }</p>
        <p><strong>Integration Priorities:</strong></p>
        <p>${formData.integrationPriorities || 'Not provided'}</p>
        
        <h2>Pilot Interest</h2>
        <p><strong>Why Interested:</strong></p>
        <p>${formData.interestReason}</p>
        
        <p><strong>Challenges to Address:</strong></p>
        <p>${formData.challenges}</p>
        
        <p><strong>Number of Pilot Advisors:</strong> ${
          formData.pilotAdvisors
        }</p>
        
        <p><strong>Timeline:</strong></p>
        <p>${formData.timeline || 'Not provided'}</p>
        
        <h2>Compliance Structure</h2>
        <p><strong>Compliance Officer:</strong> ${
          formData.complianceOfficer || 'Not provided'
        }</p>
        
        <p><strong>Current Suitability Approach:</strong></p>
        <p>${formData.suitabilityApproach || 'Not provided'}</p>
        
        <p><strong>Fintech Experience:</strong></p>
        <p>${formData.fintechExperience || 'Not provided'}</p>
        
        <h2>Acknowledgments</h2>
        <p><strong>Decision Support Tool:</strong> ${
          formData.acknowledgments.decisionSupport
            ? '✓ Acknowledged'
            : '✗ Not acknowledged'
        }</p>
        <p><strong>Advisor Responsibility:</strong> ${
          formData.acknowledgments.advisorResponsibility
            ? '✓ Acknowledged'
            : '✗ Not acknowledged'
        }</p>
        <p><strong>No Compliance Guarantee:</strong> ${
          formData.acknowledgments.noComplianceGuarantee
            ? '✓ Acknowledged'
            : '✗ Not acknowledged'
        }</p>
        <p><strong>Authority to Explore:</strong> ${
          formData.acknowledgments.authority
            ? '✓ Acknowledged'
            : '✗ Not acknowledged'
        }</p>
        <p><strong>Agreement Terms:</strong> ${
          formData.acknowledgments.agreementTerms
            ? '✓ Acknowledged'
            : '✗ Not acknowledged'
        }</p>
        
        <hr>
        <p><em>Submitted: ${new Date().toLocaleString()}</em></p>
      `,
    });

    if (error) {
      console.error('Resend error (admin email failed):', error);

      // Send error notification email to admin about the failure
      try {
        await resend.emails.send({
          from: 'VelocityIQ System <onboarding@getvelocityiq.com>',
          to: ['admin@getvelocityiq.com'],
          subject: '⚠️ Application Submission Failed - Admin Email Error',
          html: `
            <h2>Application Submission Failed</h2>
            
            <p><strong>The initial application submission email to admin failed.</strong></p>
            
            <h3>Attempted Application Details:</h3>
            <p><strong>Company:</strong> ${
              formData.companyName || 'Not provided'
            }</p>
            <p><strong>Contact:</strong> ${
              formData.contactName || 'Not provided'
            } (${formData.contactTitle || 'Not provided'})</p>
            <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            
            <h3>Error Details:</h3>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">
${JSON.stringify(error, null, 2)}
            </pre>
            
            <p><strong>Action Required:</strong> Application was not received. User may try again or contact via SMS at +44 7842 024151</p>
            
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
        { error: 'Failed to send email', initialSubmissionFailed: true },
        { status: 500 }
      );
    }

    // Send confirmation email to applicant
    try {
      await resend.emails.send({
        from: 'VelocityIQ <onboarding@getvelocityiq.com>',
        to: [formData.email],
        subject: 'Application Received - VelocityIQ January 2026 Pilot',
        html: `
          <h1>Thank You for Your Application</h1>
          
          <p>Dear ${formData.contactName},</p>
          
          <p>We've received your application for the VelocityIQ January 2026 Pilot Program on behalf of <strong>${formData.companyName}</strong>.</p>
          
          <h2>What Happens Next?</h2>
          
          <ol>
            <li><strong>Within 2 Business Days:</strong> We'll review your application and send you an email confirmation with our initial assessment.</li>
            <li><strong>Within 1 Week:</strong> If there's a good fit, we'll reach out to schedule a 30-minute qualification call, or we'll politely decline if the timing or fit isn't right.</li>
            <li><strong>Qualification Call:</strong> We'll discuss your needs, explain the pilot structure, and assess mutual fit.</li>
            <li><strong>Technical Review:</strong> If qualified, we'll schedule a 45-minute deeper technical review.</li>
          </ol>
          
          <p>If you have any questions in the meantime, please don't hesitate to reach out to us at <a href="mailto:admin@getvelocityiq.com">admin@getvelocityiq.com</a>.</p>
          
          <p>You can also schedule a call directly: <a href="https://calendly.com/velocityiq/30min">Schedule a Call</a></p>
          
          <h2>Your Application Summary</h2>
          <p><strong>Company:</strong> ${formData.companyName}</p>
          <p><strong>Number of Advisors:</strong> ${formData.numAdvisors}</p>
          <p><strong>Pilot Advisors:</strong> ${formData.pilotAdvisors}</p>
          
          <p>Thank you for your interest in VelocityIQ!</p>
          
          <p>Best regards,<br>
          The VelocityIQ Team</p>
          
          <hr>
          <p style="font-size: 12px; color: #666;">
            <em>This is an automated confirmation email. Please do not reply directly to this email. 
            For questions, contact admin@getvelocityiq.com</em>
          </p>
        `,
      });
    } catch (confirmationError) {
      console.error('Confirmation email failed:', confirmationError);

      // Send error notification email to admin
      try {
        await resend.emails.send({
          from: 'VelocityIQ System <onboarding@getvelocityiq.com>',
          to: ['admin@getvelocityiq.com'],
          subject: '⚠️ Confirmation Email Failed - Application Submitted',
          html: `
            <h2>Confirmation Email Delivery Failed</h2>
            
            <p><strong>Application was successfully received, but confirmation email to applicant failed.</strong></p>
            
            <h3>Application Details:</h3>
            <p><strong>Company:</strong> ${formData.companyName}</p>
            <p><strong>Contact:</strong> ${formData.contactName} (${
            formData.contactTitle
          })</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            
            <h3>Error Details:</h3>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">
${JSON.stringify(confirmationError, null, 2)}
            </pre>
            
            <p><strong>Action Required:</strong> Please manually send confirmation email to ${
              formData.email
            }</p>
            
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
    }

    // Return success - application was submitted successfully
    // Don't expose confirmation email status to user
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
