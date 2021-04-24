import React from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './CreatingForm.module.css'
const CreatingStudentForm = () => {
    return ( <div className={classes.MainDiv} >
        <TextField
          label="ٍStudent Name"
          variant="outlined"
        />
        <TextField
          label="Student Code"
          variant="outlined"
        />
        

    </div> );
}
 
export default CreatingStudentForm;