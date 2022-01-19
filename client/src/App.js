import logo from './logo.svg';
import {Container ,AppBar ,Typography , Grow ,Grid } from '@mui/material';
import './App.css';
import { ClassNames } from '@emotion/react';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles.js';
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={ClassNames.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} varient ="h2" align="center">Students Create & show</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="Strect">
              <Grid item xs={15} sm={7}>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position='static' color='inherit'>
                  <Create/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
