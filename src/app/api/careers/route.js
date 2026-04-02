import nodemailer from "nodemailer";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER , 
    pass: process.env.EMAIL_PASSWORD, 
  }
});

console.log(transporter, process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);

const DATA_FILE = path.join(process.cwd(), "public", "careers-submissions.json");

const ensureDataFile = () => {
  const dir = path.dirname(DATA_FILE);

  if (!fsSync.existsSync(dir)) {
    fsSync.mkdirSync(dir, { recursive: true });
  }

  if (!fsSync.existsSync(DATA_FILE)) {
    fsSync.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
};

const addSubmissionToJSON = async (data) => {
  ensureDataFile();
  const submissions = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
  submissions.push({
    ...data,
    submittedAt: new Date().toISOString(),
  });
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2));
};

// Send email notification
const sendEmail = async (data) => {
  const { fullName, email, phone, location, message, jobTitle } = data;

  const applicantMailOptions = {
    from: '"Neelu" <neelu@bleapdigital.com>',
    to: email,
    replyTo: process.env.ADMIN_EMAIL,
    subject: `Application Received - ${jobTitle}`,
    html: `
      <h2>Thank you for applying!</h2>
      <p>Hi ${fullName},</p>
      <p>We have received your application for the position of <strong>${jobTitle}</strong>.</p>
      <p>Our team will review your application and get back to you shortly.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>Bleap Team</strong></p>
    `,
  };

  const adminMailOptions = {
    from: '"Neelu" <neelu@bleapdigital.com>',
    to: process.env.ADMIN_EMAIL,
    replyTo: process.env.ADMIN_EMAIL,
    subject: `New Career Application - ${jobTitle}`,

    html: `
      <h2>New Application Received</h2>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `, attachments: data.hasResume
      ? [
          {
            filename: data.resumeFileName,
            path: path.join(process.cwd(), "public", "uploads", data.resumeFileName),
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(applicantMailOptions);
    console.log("Email sent to applicant");

    await transporter.sendMail(adminMailOptions);
    console.log("Email sent to admin");

    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const message = formData.get("message");
    const jobTitle = formData.get("jobTitle");
    const resume = formData.get("resume");

    if (!fullName || !email || !phone || !location || !message || !jobTitle) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const submissionData = {
      fullName,
      email,
      phone,
      location,
      message,
      jobTitle,
      hasResume: resume ? true : false,
      resumeFileName: resume ? resume.name : null,
    };

    const resumeFile = formData.get("resume");
    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const filename = Date.now() + "_" + resumeFile.name.replaceAll(" ", "_");
    const filePath = path.join(process.cwd(), "public/uploads", filename);
    const dir = path.dirname(filePath);

    if (!fsSync.existsSync("uploads")) {
        fsSync.mkdirSync("uploads");
    }

    await fs.writeFile(filePath, buffer);
    submissionData.resumeFileName = filename;

    addSubmissionToJSON(submissionData);
    await sendEmail(submissionData);

    return Response.json(
      { success: true, message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Failed to process application. Please try again." },
      { status: 500 }
    );
  }
}
