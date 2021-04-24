import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import validator from "validator";
import axios from "axios";

import classes from "./CreatingForm.module.css";
const CreatingStudentForm = () => {
  const [StudentName, setStudentName] = useState("");
  const [StudentCode, setStudentCode] = useState("");
  const [StudentNameError, setStudentNameError] = useState("");
  const [StudentCodeError, setStudentCodeError] = useState("");

  const StudentNameHandler = (event) => {
    let data = event.target.value;
    let test =
      validator.isAlpha(data) ||
      validator.isAlpha(data.replace(/'/g, "")) ||
      validator.isAlpha(data.replace(/-/g, "")) ||
      validator.isAlpha(data.replace(/ /g, ""));
    if (!test) {
      setStudentNameError("invalid User Name");
    } else {
      setStudentNameError("");
    }
    setStudentName(data);
  };

  const StudentCodeHandler = (event) => {
    const data = event.target.value;
    if (data.length > 7) {
      return;
    }
    if (data.length < 7) {
      setStudentCodeError("must match 7 characters.");
    } else {
      setStudentCodeError("");
    }
    setStudentCode(data);
  };

  const SendHandler = () => {
    let x = true;
    if (StudentName.length === 0) {
      x = false;
      setStudentNameError("This Field is Required");
    }
    if (StudentCode.length === 0) {
      x = false;
      setStudentCodeError("This Field is Required");
    }
    if (x) {
      axios
        .post("http://localhost:4000/api/students", {
          StudentCode: StudentCode,
          StudentName: StudentName,
        })
        .then((response) => {
          alert("student updated successfully");
          console.log(response);
        });
    }
  };

  return (
    <div className={classes.MainDiv}>
      <TextField
        label="ٍStudent Name"
        variant="outlined"
        value={StudentName}
        onChange={StudentNameHandler}
        error={StudentNameError !== ""}
        helperText={StudentNameError}
      />
      <TextField
        label="Student Code"
        variant="outlined"
        value={StudentCode}
        onChange={StudentCodeHandler}
        error={StudentCodeError !== ""}
        helperText={StudentCodeError}
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

export default CreatingStudentForm;
