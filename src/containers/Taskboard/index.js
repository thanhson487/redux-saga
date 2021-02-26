import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/styles";
import style from "./style";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";

import TaskList from "../../components/TaskList/index";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../action/task";
import { Search } from "@material-ui/icons";
import SearchBox from "../../components/SearchBox";

TaskBorad.propTypes = {};

function TaskBorad(props) {
  const { classes, taskActionsCreators, listTask } = props;
  const [open, setOpen] = useState(false);

 
  function renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          let taskFiltered = [];
          if (listTask !== undefined) {
            taskFiltered = listTask.filter(
              (task) => task.status === status.value
            );
          }

          return (
            <TaskList
              tasks={taskFiltered}
              status={status}
              key={status.value}
            ></TaskList>
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  function handleClose() {
    setOpen(false);
  }
  function openForm() {
    setOpen(true);
  }
  function renderForm() {
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={handleClose}></TaskForm>;
    return xhtml;
  }
  function loadData(){
    const { fetchListTask } = taskActionsCreators;
      fetchListTask();
  
  }
  function renderSearchBox(){
    let xhtml = null;
    xhtml = (
    <SearchBox></SearchBox>
    );
    return xhtml;
  }
  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon></AddIcon>Thêm mới công việc
        
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={loadData}
      >
        Load Data
      </Button>
      {renderSearchBox()}
      {renderBoard()}
      {renderForm()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBorad)
);
