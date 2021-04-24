import React from "react";

import AccordionItem from "../../components/AccordionItem";

const AccordionDataShow = (props) => {
  const courses = props.data;
  console.log('[Accordion]',courses)
  return (
    <div>
      {courses.map(course => <AccordionItem data={course} />)}
    </div>
  );
};

export default AccordionDataShow;
