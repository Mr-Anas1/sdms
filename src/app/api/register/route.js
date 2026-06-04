import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name, email, dob, address, institution,
      phone, lookingFor, yearOfStudy, degree, major, program,
    } = body;

    if (!name || !email || !dob || !address || !institution || !phone || !lookingFor || !yearOfStudy || !degree || !major || !program) {
      return new Response(JSON.stringify({ message: "All fields are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return new Response(JSON.stringify({ message: "Email service is not configured." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px 0;">
          <div style="font-size: 28px; font-weight: bold; color: #FFD700; letter-spacing: 2px;">SABEENA</div>
          <div style="font-size: 16px; color: #fff; letter-spacing: 1px;">DIGITAL MEDIA SERVICES</div>
        </div>
        <div style="padding: 20px; background-color: #111; border-radius: 8px;">
          <h2 style="color: #FFD700; margin-top: 0;">New Registration — ${lookingFor}</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="color: #fff; margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Date of Birth:</strong> ${dob}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Address:</strong> ${address}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Institution:</strong> ${institution}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Looking For:</strong> ${lookingFor}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Year of Study:</strong> ${yearOfStudy}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Degree:</strong> ${degree}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Major/Field:</strong> ${major}</li>
            <li style="color: #fff; margin-bottom: 10px;"><strong>Training Program:</strong> ${program}</li>
          </ul>
        </div>
        <div style="text-align: center; background-color: #FFD700; padding: 15px; border-radius: 0 0 10px 10px; margin-top: 20px;">
          <p style="color: #000; font-size: 11px; font-weight: 600; margin: 0; text-transform: uppercase;">
            AN ASSOCIATE OF EDRC GLOBAL COMPUTERS PVT. LTD., UAE,<br/>
            AND SS BB MARKETING PVT. LTD., SINGAPORE
          </p>
        </div>
      </div>
    `;

    const confirmationTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #000; color: #fff; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px 0;">
          <div style="font-size: 28px; font-weight: bold; color: #FFD700; letter-spacing: 2px;">SABEENA</div>
          <div style="font-size: 16px; color: #fff; letter-spacing: 1px;">DIGITAL MEDIA SERVICES</div>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #FFD700;">Thank you for registering, ${name}!</h2>
          <p style="color: #ccc; line-height: 1.7;">We've received your application for <strong style="color:#fff">${program}</strong> (${lookingFor}). Our team will review your details and get back to you shortly.</p>
          <p style="color: #ccc;">If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:Sabeenadigitalms@gmail.com" style="color:#FFD700;">Sabeenadigitalms@gmail.com</a> or call us at <strong style="color:#fff">9345398449</strong>.</p>
        </div>
        <div style="text-align: center; background-color: #FFD700; padding: 15px; border-radius: 0 0 10px 10px;">
          <p style="color: #000; font-size: 11px; font-weight: 600; margin: 0; text-transform: uppercase;">
            AN ASSOCIATE OF EDRC GLOBAL COMPUTERS PVT. LTD., UAE,<br/>
            AND SS BB MARKETING PVT. LTD., SINGAPORE
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Sabeenadigitalms@gmail.com",
      subject: `New Registration: ${name} — ${program}`,
      html: htmlTemplate,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Registration Confirmed — Sabeena Digital Media Services",
      html: confirmationTemplate,
    });

    return new Response(JSON.stringify({ message: "Registration successful!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return new Response(JSON.stringify({ message: "Failed to submit. Please try again.", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
