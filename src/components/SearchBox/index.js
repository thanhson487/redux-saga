import React from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

function SearchBox(props) {
    const {classes,handleChange} = props;
    return (
        <form className={classes.root} noValidate autoComplete="off">
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

export default withStyles()(SearchBox);