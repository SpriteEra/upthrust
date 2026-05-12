import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})


export const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: `"Upthrust" <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
        });

        console.log("📩 Email sent:", info.messageId);
    } catch (error) {
        console.error("❌ Email error:", error.message);
        throw new Error("Email not sent");
    }
};