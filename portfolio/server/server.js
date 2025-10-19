// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message, selectedPlan } = req.body;

  // Log the data (in real apps, save to DB or send an email)
  console.log('New Contact Form Submission:');xx``
  console.log({ name, email, message, selectedPlan });

  res.status(200).json({ success: true, message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
