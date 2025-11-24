const express = require('express');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);

module.exports = app; // Export for testing
