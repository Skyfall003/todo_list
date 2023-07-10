require("dotenv").config();
const express = require('express');
const todoRoutes = require('./routes');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
