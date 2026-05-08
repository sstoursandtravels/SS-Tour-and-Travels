const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // Allow CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, vehicle, rating, feedback, type } = req.body;

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,      // sstoursandtravels2007@gmail.com
            pass: process.env.GMAIL_APP_PASS,  // Gmail App Password
        },
    });

    const isBooking = type === 'booking';

    const subject = isBooking
        ? `🚖 New Booking Request from ${name}`
        : `⭐ New Feedback from ${name}`;

    const htmlBody = isBooking
        ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
            <div style="background: #0B2545; padding: 20px; text-align: center;">
                <h2 style="color: #FFD700; margin: 0;">🚖 New Booking Request</h2>
                <p style="color: #fff; margin: 5px 0;">SS Tours & Travels</p>
            </div>
            <div style="padding: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 12px; font-weight: bold; color: #555;">Customer Name</td>
                        <td style="padding: 12px; color: #222;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: bold; color: #555;">Phone Number</td>
                        <td style="padding: 12px; color: #222;">${phone}</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 12px; font-weight: bold; color: #555;">Vehicle Preference</td>
                        <td style="padding: 12px; color: #222;">${vehicle || 'Any'}</td>
                    </tr>
                </table>
                <div style="margin-top: 24px; padding: 16px; background: #e8f5e9; border-radius: 8px; text-align: center;">
                    <p style="margin: 0; color: #2e7d32; font-weight: bold;">📞 Call back the customer on: ${phone}</p>
                </div>
            </div>
            <div style="background: #f5f5f5; padding: 12px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #999;">SS Tours & Travels — sstoursandtravels.com</p>
            </div>
        </div>
        `
        : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
            <div style="background: #0B2545; padding: 20px; text-align: center;">
                <h2 style="color: #FFD700; margin: 0;">⭐ Customer Feedback</h2>
                <p style="color: #fff; margin: 5px 0;">SS Tours & Travels</p>
            </div>
            <div style="padding: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 12px; font-weight: bold; color: #555;">Customer Name</td>
                        <td style="padding: 12px; color: #222;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: bold; color: #555;">Rating</td>
                        <td style="padding: 12px; color: #FFD700; font-size: 20px;">${'⭐'.repeat(rating)} (${rating}/5)</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 12px; font-weight: bold; color: #555;">Feedback</td>
                        <td style="padding: 12px; color: #222;">${feedback}</td>
                    </tr>
                </table>
            </div>
            <div style="background: #f5f5f5; padding: 12px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #999;">SS Tours & Travels — sstoursandtravels.com</p>
            </div>
        </div>
        `;

    try {
        await transporter.sendMail({
            from: `"SS Tours Website" <${process.env.GMAIL_USER}>`,
            to: 'sstoursandtravels2007@gmail.com',
            subject,
            html: htmlBody,
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
