const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Backend (Student Demo)!" });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));

