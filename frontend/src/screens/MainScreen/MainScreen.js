import React, { useState } from "react";
import classes from "./MainScreen.module.css";
import HomePage from "../../pages/HomePage/HomePage";

import CreatingCourseForm from '../../pages/CreatingForm/CreatingCourseForm';
import CreatingStudentForm from '../../pages/CreatingForm/CreatingStudentFourm';

import { Button } from "@material-ui/core";
const MainScreen = () => {
  const [creatingCourseMode, setcreatingCourseMode] = useState(false);
  const [createStudentMode, setcreateStudentMode] = useState(false);
  let mainPageContent = (
    <HomePage
      ccm={() => setcreatingCourseMode(true)}
      csm={() => setcreateStudentMode(true)}
    />
  );
  if (creatingCourseMode) {
    mainPageContent = <CreatingCourseForm />;
  }
  if (createStudentMode) {
    mainPageContent = <CreatingStudentForm />;
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