import React from "react";
import styles from "./style";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./../../commons/Theme/index";
import TaskBoard from "../Taskboard/index";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();
function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <ToastContainer />
        <TaskBoard>
         
        </TaskBoard>
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
