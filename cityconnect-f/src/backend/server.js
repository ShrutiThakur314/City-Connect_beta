// In server.js
const express = require('express');
const app = express();

// Import routes
const projectRoutes = require('./routes/projectRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use the project routes
app.use('/api/projects', projectRoutes);

// Start the server (example)
app.listen(5000, () => console.log('Server running on port 5000'));
