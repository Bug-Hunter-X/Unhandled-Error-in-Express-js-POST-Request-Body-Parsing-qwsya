const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // Missing error handling if req.body is invalid
  const user = { id: Date.now(), name: req.body.name, email: req.body.email };
  users.push(user);
  res.status(201).json(user);
});

// ... other routes ...

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));