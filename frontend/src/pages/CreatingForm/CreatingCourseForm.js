import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import axios from "axios";

import classes from "./CreatingForm.module.css";

const CreatingCourseForm = () => {
  const [CourseNameValue, setCourseNameValue] = useState("");
  const [CourseCodeValue, setCourseCodeValue] = useState("");
  const [CourseDiscription, setCourseDiscription] = useState("");

  const [CourseNameError, setCourseNameError] = useState("");
  const [CourseCodeError, setCourseCodeError] = useState("");

  const CourseNameInputHandler = (event) => {
    const data = event.target.value;
    if (data.length < 5) {
      setCourseNameError("Course Name is too Short");
    } else {
      setCourseNameError("");
    }
    setCourseNameValue(data);
  };

  const CourseCodeInputHandler = (event) => {
    const data = event.target.value;
    const regxtst = /[a-zA-Z][a-zA-Z][a-zA-Z][0-9][0-9][0-9]/.test(data);
    if (data.length > 6) {
      return;
    }
    if (!regxtst) {
      setCourseCodeError("must match 3 letters followed by 3 numbers");
    } else {
      setCourseCodeError("");
    }
    setCourseCodeValue(data);
  };

  const SendHandler = () => {
    let x = true;
    if (CourseCodeValue.length === 0) {
      x = false;
      setCourseCodeError("This Field is Required");
    }
    if (CourseNameValue.length === 0) {
      x = false;
      setCourseNameError("This Field is required");
    }
    if (x) {
      axios
        .post("http://localhost:4000/api/courses", {
          CourseCode: CourseCodeValue,
          CourseName: CourseNameValue,
          Discription: CourseDiscription,
        })
        .then((response) => console.log(response));
    }
  };

  return (
    <div className={classes.MainDiv}>
      <TextField
        label="Course Name"
        variant="outlined"
        value={CourseNameValue}
        onChange={CourseNameInputHandler}
        error={CourseNameError !== ""}
        helperText={CourseNameError}
      />
      <TextField
        label="Course Code"
        variant="outlined"
        value={CourseCodeValue}
        onChange={CourseCodeInputHandler}
        error={CourseCodeError !== ""}
        helperText={CourseCodeError}
      />
      <TextField
        label="Course Discription"
        variant="outlined"
        multiline
        value={CourseDiscription}
        onChange={(e) => {
          setCourseDiscription(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Send />}
        onClick={SendHandler}
      >
        Send
      </Button>
    </div>
  );
};

export default CreatingCourseForm;
