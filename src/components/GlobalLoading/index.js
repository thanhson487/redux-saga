import React from "react";
import { withStyles } from "@material-ui/styles";
import style from "./style";
import LoadingIcon from "./../../assets/images/loading.gif";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiAction from "../../action/ui";
function GlobalLoading(props) {
  const { classes, showLoading } = props;
  let xhtml = null;
  if (showLoading === true) {
    xhtml = (
      <div className={classes.GlobalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon}></img>
      </div>
    );
  }

  return xhtml;
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uiAction: bindActionCreators(uiAction, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(GlobalLoading);
