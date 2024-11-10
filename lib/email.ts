import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTPEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your AppVault Verification Code',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">Verify your email address</h2>
        <p>Your verification code is:</p>
        <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold; letter-spacing: 4px;">${otp}</span>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this code, you can safely ignore this email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};