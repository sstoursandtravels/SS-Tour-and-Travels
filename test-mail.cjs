const nodemailer = require('nodemailer');

async function testMail() {
    console.log("User:", process.env.GMAIL_USER);
    // don't log pass fully
    console.log("Pass starts with:", process.env.GMAIL_APP_PASS ? process.env.GMAIL_APP_PASS.substring(0,4) : 'missing');
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Test" <${process.env.GMAIL_USER}>`,
            to: 'sstoursandtravels2007@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email.',
        });
        console.log('Email sent:', info.messageId);
    } catch (err) {
        console.error('Error:', err);
    }
}

testMail();
