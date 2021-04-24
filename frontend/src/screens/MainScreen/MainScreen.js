import React, { useState,useRef } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

import classes from "./MainScreen.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import CreatingCourseForm from "../../pages/CreatingForm/CreatingCourseForm";
import CreatingStudentForm from "../../pages/CreatingForm/CreatingStudentFourm";
import AccordionDataShow from "../../pages/AccordionDataShow/AccordionDataShow";

const MainScreen = () => {
  const [creatingCourseMode, setcreatingCourseMode] = useState(false);
  const [createStudentMode, setcreateStudentMode] = useState(false);
  const [ShowAllCoursesMode, setShowAllCoursesMode] = useState(false);
  const [ShowAllStudentsMode, setShowAllStudentsMode] = useState(false);
  let Data = useRef() ;

  let mainPageContent = (
    <HomePage
      ccm={() => setcreatingCourseMode(true)}
      csm={() => setcreateStudentMode(true)}
      sacm={() =>
        axios
          .get("http://localhost:4000/api/courses")
          .then((result) => {
             console.log(result.data);
             Data.current=result.data;
             setShowAllCoursesMode(true);
          })
      }
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
  if (ShowAllCoursesMode) {
    mainPageContent = <AccordionDataShow data={Data.current} />;
    document.title = "All Courses";
  }
  if (ShowAllStudentsMode) {
    mainPageContent = <AccordionDataShow data={Data.current} />;
    document.title = "All Students";
  }
  let resetButton = null;
  if (
    createStudentMode ||
    creatingCourseMode ||
    ShowAllStudentsMode ||
    ShowAllCoursesMode
  ) {
    resetButton = (
      <Button
        variant="contained"
        onClick={() => {
          setcreatingCourseMode(false);
          setcreateStudentMode(false);
          setShowAllStudentsMode(false);
          setShowAllCoursesMode(false);
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
