const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(express.json());

let courses = [
  {
    id: 1,
    CourseCode: "CSE412",
    CourseName: "Multimedia Systems",
    Discription: "this is one of the best courses",
  },
  {
    id: 2,
    CourseCode: "CSE411",
    CourseName: "Distributed Systems",
    Discription: "this is one of the best courses",
  },
  {
    id: 3,
    CourseCode: "CSE415",
    CourseName: "Multimedia Systems",
    Discription: "this is one of the best courses",
  },
  {
    id: 4,
    CourseCode: "CSE417",
    CourseName: "Multimedia Systems",
    Discription: "this is one of the best courses",
  },
];

let students = [
  { id: 1, StudentCode: "CSE412", StudnetName: "AN1" },
  { id: 2, StudentCode: "CSE411", StudnetName: "AN2" },
  { id: 3, StudentCode: "CSE415", StudnetName: "Multimedia Systems" },
  { id: 4, StudentCode: "CSE417", StudnetName: "Multimedia Systems" },
];

app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/students", (req, res) => {
  res.send(students);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    CourseCode: req.body.CourseCode,
    CourseName: req.body.CourseName,
    Discription: req.body.Discription,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/", (req, res) => {
  const courseID = req.body.id;
  const selectedCourse = courses.find((course) => course.id === courseID);
  if (req.body.CourseCode) {
    selectedCourse.CourseCode = req.body.CourseCode;
  }
  if (req.body.CourseName) {
    selectedCourse.CourseName = req.body.CourseName;
  }
  if (req.body.Discription) {
    selectedCourse.Discription = req.body.Discription;
  }
  courses = [
    ...courses.filter((course) => course.id !== courseID),
    selectedCourse,
  ];
  res.send(selectedCourse);
});

app.delete("/api/courses/", (req, res) => {
  courses = courses.filter((course) => course.id !== req.body.id);
  res.send(courses);
});

app.post("/api/students", (req, res) => {
  const student = {
    id: students.length + 1,
    StudentCode: req.body.StudentCode,
    StudentName: req.body.StudentName,
  };
  students.push(student);
  res.send(student);
});

app.put("/api/students/", (req, res) => {
  const studentID = req.body.id;
  const selectedStudent = students.find((student) => student.id === studentID);
  if (req.body.StudentCode) {
    selectedStudent.StudentCode = req.body.StudentCode;
  }
  if (req.body.StudentName) {
    selectedStudent.StudentName = req.body.StudentName;
  }

  students = [
    ...students.filter((student) => student.id !== studentID),
    selectedStudent,
  ];
  res.send(selectedStudent);
});

app.delete("/api/students/", (req, res) => {
  students = students.filter((student) => student.id !== req.body.id);
  res.send(students);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});
app.get("/web/courses/create", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});
app.get("/web/students/create", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
