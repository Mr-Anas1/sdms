import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile, message, service } = body;

    // Validate all fields
    if (!name || !email || !mobile || !message || !service) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define multiple recipients
    const recipients = [
      "Sabeenadigitalms@gmail.com",
      `${email}`, // Add more emails as needed
    ];

    // HTML template for the email
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; background-color: #000; padding: 20px; border-radius: 10px 10px 0 0;">
          <!-- Text-based Logo as fallback -->
          <div style="margin-bottom: 10px;">
            <div style="font-size: 28px; font-weight: bold; color: #FFD700; letter-spacing: 2px; margin-bottom: 5px;">SABEENA</div>
            <div style="font-size: 16px; font-weight: bold; color: #FFFFFF; letter-spacing: 1px;">DIGITAL MEDIA SERVICES</div>
          </div>
        </div>
        <div style="padding: 20px; background-color: #000;">
          <h2 style="color: #FFD700; margin-top: 0;">We will get in touch with you soon!</h2>
          <p style="color: #fff;">Here are the details you provided:</p>
          <ul style="list-style: none; padding: 0;">
            <li style="color: #fff; margin-bottom: 8px;"><strong>Name:</strong> ${name}</li>
            <li style="color: #fff; margin-bottom: 8px;"><strong>Email:</strong> ${email}</li>
            <li style="color: #fff; margin-bottom: 8px;"><strong>Mobile:</strong> ${mobile}</li>
            <li style="color: #fff; margin-bottom: 8px;"><strong>Service:</strong> ${service}</li>
            <li style="color: #fff; margin-bottom: 8px;"><strong>Message:</strong> ${message}</li>
          </ul>
        </div>
        <div style="text-align: center; background-color: #FFD700; padding: 15px; border-radius: 0 0 10px 10px;">
          <p style="color: #000; font-size: 11px; font-weight: 600; margin: 0; line-height: 1.6; text-transform: uppercase;">
            AN ASSOCIATE OF EDRC GLOBAL COMPUTERS PVT. LTD., UAE,<br/>
            AND SS BB MARKETING PVT. LTD., SINGAPORE
          </p>
        </div>
      </div>
    `;

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients.join(", "), // Send to multiple recipients
      subject: `Thank you for visiting Sabeena Digital Media Services`,
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