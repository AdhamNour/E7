import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { Send } from '@material-ui/icons';

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
        
        <Button variant="contained" color="primary" endIcon={<Send />} >
        Send
      </Button>
    </div> );
}
 
export default CreatingStudentForm;