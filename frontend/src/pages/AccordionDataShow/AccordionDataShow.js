import React from "react";

import AccordionItem from "../../components/AccordionItem";
import classes from "./AccordionDataShow.module.css";

const AccordionDataShow = (props) => {
  const courses = props.data;
  console.log('[Accordion]',courses)
  return (
    <div className={classes.Container} >
      {courses.map(course => <AccordionItem data={course} />)}
    </div>
  );
};

export default AccordionDataShow;
