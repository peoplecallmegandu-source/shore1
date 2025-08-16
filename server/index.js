/* Simple express server to serve static files and accept contact form submissions */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Basic contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  // In a real app you'd save to a DB or send an email. Here we simulate success.
  console.log('Contact message received:', { name, email, message });
  return res.json({ message: 'Thanks! Your message has been received. We will reply within 48 hours.' });
});

// Fallback to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Aurora Coffee running on http://localhost:${PORT}`));
