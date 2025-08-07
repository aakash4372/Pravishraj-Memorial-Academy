const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendMail = require('./nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Pravishraj Memorial Academy Server!!');
});

// Email Route
app.post('/send-email', async (req, res) => {
  const { name, email, mobile, university, course, message } = req.body;
  console.log('Received Data:', req.body);

  try {
    await sendMail(name, email, mobile, university, course, message);
    console.log('Email Process Completed');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message || error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});