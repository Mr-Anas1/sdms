import nodemailer from "nodemailer";

// Ensure Node.js runtime on Vercel and avoid caching
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, phone, projectType, budget, hearAbout, message } = body;

    // Validate all fields
    if (!name || !email || !company || !phone || !projectType || !budget || !hearAbout || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Ensure env vars exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS is not set in environment.");
      return new Response(
        JSON.stringify({ message: "Email service is not configured." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create Nodemailer transporter using explicit Gmail SMTP config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define recipients
    const recipients = [
      "sabeenadigitalmediaservices@gmail.com",
       `${email}`, // Add more emails as needed
    ];

    // HTML template for the email
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px; border-radius: 10px;">
        <div style="text-align: center; background-color: #FFD700; padding: 20px; border-radius: 10px 10px 0 0;">
          <!-- Text-based Logo -->
          <div style="font-size: 24px; font-weight: bold; color: #000; text-transform: uppercase; letter-spacing: 2px; text-align: center;">
            <span style="color: #000;">Sabeena</span>
            <br>
            <span style="color: #FFD700; background-color: #000; padding: 5px 10px; border-radius: 5px;">Digital Media Services</span>
          </div>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #FFD700;">We will get in touch with you soon!</h2>
          <p style="color: #fff;">Here are the details you provided:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="color: #fff;"><strong>Name:</strong> ${name}</li>
            <li style="color: #fff;"><strong>Email:</strong> ${email}</li>
            <li style="color: #fff;"><strong>Company/Organization:</strong> ${company}</li>
            <li style="color: #fff;"><strong>Phone:</strong> ${phone}</li>
            <li style="color: #fff;"><strong>Project Type:</strong> ${projectType}</li>
            <li style="color: #fff;"><strong>Project Budget:</strong> ${budget}</li>
            <li style="color: #fff;"><strong>How did you hear about us?:</strong> ${hearAbout}</li>
            <li style="color: #fff;"><strong>Message:</strong> ${message}</li>
          </ul>
        </div>
        <div style="text-align: center; background-color: #FFD700; padding: 10px; border-radius: 0 0 10px 10px;">
          <p style="color: #000;">&copy; 2023 Sabeena Digital Media Services. All rights reserved.</p>
        </div>
      </div>
    `;

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients.join(", "), // Send to multiple recipients
      subject: `New Get A Quote Form Submission from ${name}`,
      html: htmlTemplate, // Use HTML template
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email.", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}