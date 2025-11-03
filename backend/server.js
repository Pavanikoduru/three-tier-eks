const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Backend root working!');
});

// ✅ Add this route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

