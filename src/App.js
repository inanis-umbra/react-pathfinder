import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { default as store } from "./store";
import { AlgorithmAccordianModule, LayoutModule } from "./modules";
const baseTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7986cb"
    },
    secondary: {
      main: "#b2dfdb"
    }
  }
});

const useBaseStyles = makeStyles({
  "@global body": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    backgroundColor: baseTheme.palette.background.default
  },
  root: {
    backgroundColor: baseTheme.palette.background.default,
    padding: baseTheme.spacing(3),
    width: "100vw",
    height: "100vh"
  }
});

function App() {
  const classes = useBaseStyles();
  return (
    <LayoutModule className={classes.root}>
      <Provider store={store}>
        <ThemeProvider theme={baseTheme}>
          <AlgorithmAccordianModule />
        </ThemeProvider>
      </Provider>
    </LayoutModule>
  );
}

export default App;
