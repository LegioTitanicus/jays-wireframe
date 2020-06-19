import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";

import PrimarySearchAppBar from "./ui/navbar";
import LeftBarMainFeed from "./ui/LeftBarMainFeed";
import RightBarSpotlight from "./ui/RightBarSpotlight";
import theme from "./ui/theme";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: pallette.primary,
  },
  LeftBarMainFeed: {},
  RightBarSpotlight: {},
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimarySearchAppBar />
        <Box mt={10}>
          <Grid container>
            <Grid item xs={8}>
              <Paper classes={classes.paper}>
                <LeftBarMainFeed />
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <RightBarSpotlight />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
