import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clss from "./AccordionItem.module.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const AccordionItem = (props) => {
  const classes = useStyles();
  console.log(Object.keys(props.data));
  let content = [];
  let main = "";
  let secondary = "";
  Object.keys(props.data).forEach((key) => {
    content.push(` ${key} : ${props.data[key]}`);
    if (key !== "id") {
      if (main === "") {
        main = props.data[key];
      } else if (secondary === "") {
        secondary = props.data[key];
      }
    }
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{main}</Typography>
        <Typography className={classes.secondaryHeading}>
          {secondary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={clss.DetailsContainer}>
          {content.map((item,index) => <Typography key={index} >{item}</Typography>)}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
