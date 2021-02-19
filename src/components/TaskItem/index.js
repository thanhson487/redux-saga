import React from 'react';
import { Fab, Icon, withStyles } from '@material-ui/core';
import styles from "./style";
import { Button, Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
TaskItem.propTypes = {
    
};

function TaskItem(props) {
    const {classes, task,status} = props
    return (
        <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component="h2">{status.label}</Typography>
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className = {classes.cardActions}>
            <Fab color = "primary" aria-label = "Edit" className = {classes.fab} size = "small">
                <Icon fontSize = "small">edit_icon</Icon>
            </Fab>
            <Fab color = "primary" aria-label = "Edit" className = {classes.fab} size = "small">
                <Icon fontSize = "small">delete_icon</Icon>
            </Fab>
        </CardActions>
      </Card>
    );
}

export default withStyles(styles)(TaskItem);