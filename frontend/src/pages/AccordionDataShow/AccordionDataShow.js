import React from "react";

import AccordionItem from "../../components/AccordionItem";

const AccordionDataShow = (props) => {
  const courses = [
    { id: 1, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
    { id: 2, CourseCode: "CSE411", CourseName: "Distributed Systems" },
    { id: 3, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
    { id: 4, CourseCode: "CSE412", CourseName: "Multimedia Systems" },
  ];
  return (
    <div>
      {
          courses.map((course,index) => <AccordionItem key={index} data={course} />)
      }
    </div>
  );
};

export default AccordionDataShow;
