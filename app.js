const express = require('express');
const coursesRouter = require('./routes/courses');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Export for testing
