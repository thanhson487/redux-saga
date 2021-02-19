import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, withStyles } from '@material-ui/core';
import styles from './style'
TaskForm.propTypes = {
    
};

function TaskForm(props) {
    const {open,onClose,classes} = props;
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField
           id = "standard-name"
           lable = "Name"
           className = {classes.textField}
           margin = 'normal'
          />
           <TextField
           id = "standard-multiline-flexible"
           lable = "Multiline"
           multiline
           rowsMax = "4"
           className = {classes.textField}
           margin = 'normal'
          />
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default withStyles(styles)(TaskForm);