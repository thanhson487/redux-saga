import React from "react";
import { Grid, withStyles } from "@material-ui/core";

import styles from "./style"
import TaskItem from "../TaskItem";
TaskList.propTypes = {};

function TaskList(props) {
    const {classes,tasks, status } = props;
  return (
    <Grid item md={4} xs={12} key={status.value}>
      <div className={classes.status}>{status.label}</div>
      <div className={classes.status}>
        {tasks.map((task) => {
          return (
            <TaskItem task = {task} status = {status} key ={task.id}></TaskItem>
          );
        })}
      </div>
    </Grid>
  );
}

export default withStyles(styles)(TaskList);
