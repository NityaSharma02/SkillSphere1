const express = require('express');
const router = express.Router();

let courses = [{ id: 1, name: 'JS Basics' }];

router.get('/', (req, res) => res.json(courses));
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Name required');
  const newCourse = { id: courses.length + 1, name };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

module.exports = router;
