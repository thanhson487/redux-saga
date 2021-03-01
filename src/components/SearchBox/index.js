import React from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import styles from "./style"

function SearchBox(props) {
    const {classes,handleChange} = props;
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
            autoComplete = "off"
            className = {classes.textField}
            margin = "normal"
         onChange = {handleChange}
        placeholder = "nhap tu khoa"
        />
            </form>
    );
}

export default withStyles(styles)(SearchBox);