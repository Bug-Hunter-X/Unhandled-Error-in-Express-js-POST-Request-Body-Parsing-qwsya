const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Validate request body
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  try {
    const user = { id: Date.now(), name: req.body.name, email: req.body.email };
    users.push(user);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// ... other routes ...

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));