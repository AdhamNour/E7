import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './CreatingForm.module.css'

const CreatingCourseForm = () => {
    return ( <div className={classes.MainDiv} >
        <TextField
          label="Course Name"
          variant="outlined"
        />
        <TextField
          label="Course Code"
          variant="outlined"
        />
        <TextField
          label="Course Discription"
          variant="outlined"
          multiline
        />

    </div> );
}
 
export default CreatingCourseForm;