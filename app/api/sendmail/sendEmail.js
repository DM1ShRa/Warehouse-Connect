const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Configure your email service
  service: 'gmail',
  auth: {
    user: '2021.abhishek.jadhav@ves.ac.in',
    pass: 'Gloryofdead21',
  },
});

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: '2021.abhishek.jadhav@ves.ac.in',
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
