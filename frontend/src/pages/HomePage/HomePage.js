import React from 'react';
import classes from "./HomePage.module.css";
import { Button } from "@material-ui/core";
const HomePage = (props) => {
    return ( 
        <div className={classes.ButtonsContainer}>
        <Button variant="contained"  color="primary" onClick={props.ccm} > Create Course </Button>
        <Button variant="contained" color="secondary" onClick={props.csm}  > Create Student </Button>
        <Button variant="contained"  color="primary" onClick={props.sacm} > Create All Courses </Button>

        <Button variant="contained" color="secondary" onClick={props.sasm}  > Show All Student </Button>

      </div>
     );
}
 
export default HomePage;