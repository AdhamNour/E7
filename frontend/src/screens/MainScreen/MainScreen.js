import React, { useState } from "react";
import classes from "./MainScreen.module.css";
import HomePage from "../../pages/HomePage/HomePage";

import CreatingCourseForm from "../../pages/CreatingForm/CreatingCourseForm";
import CreatingStudentForm from "../../pages/CreatingForm/CreatingStudentFourm";

import { Button } from "@material-ui/core";
const MainScreen = () => {
  const [creatingCourseMode, setcreatingCourseMode] = useState(false);
  const [createStudentMode, setcreateStudentMode] = useState(false);
  const [ShowAllCoursesMode, setShowAllCoursesMode] = useState(false);
  const [ShowAllStudentsMode, setShowAllStudentsMode] = useState(false);

  let mainPageContent = (
    <HomePage
      ccm={() => setcreatingCourseMode(true)}
      csm={() => setcreateStudentMode(true)}
      sacm={() => setShowAllCoursesMode(true)}
      sasm={() => setShowAllStudentsMode(true)}
    />
  );
  document.title = "Home Page";
  if (creatingCourseMode) {
    mainPageContent = <CreatingCourseForm />;
    document.title = "Creating Course";
  }
  if (createStudentMode) {
    mainPageContent = <CreatingStudentForm />;
    document.title = "Creating Student";
  }
  let resetButton = null;
  if (createStudentMode || creatingCourseMode) {
    resetButton = (
      <Button
        variant="contained"
        onClick={() => {
          setcreatingCourseMode(false);
          setcreateStudentMode(false);
        }}
      >
        Reset
      </Button>
    );
  }
  return (
    <div className={classes.MainScreen}>
      {mainPageContent}
      {resetButton}
    </div>
  );
};

export default MainScreen;
