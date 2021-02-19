import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#dc004e",
  },
  typoraphy: {
      fontFamily: "Roboto"
  },
  shape: {
      borderRadius: 4,
      backgroundColor: "#7B1FA2",
      textColor: "#ffffff"
  }
});
export default theme;
