const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
  { id: 2, CourseCode: "CSE411", CourseName: "Distributed Systems" },
  { id: 3, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
  { id: 4, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
];

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send(`the course with id ${req.params.id} is not found`);
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length+1,
    CourseCode: req.body.CourseCode,
    CourseName: req.body.CourseName,
  };
  courses.push(course);
  res.send(course);
});

app.listen(4000);
