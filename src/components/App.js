import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Form from './Form';


const useStyles = theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.setOpacity = this.setOpacity.bind(this)
    this.setGradient = this.setGradient.bind(this)
    this.getFiles = this.getFiles.bind(this)

    this.state = {
      backgroundImage: [],
      overlay : {
        gradient: true,
        opacity: 0.5,
      }
    }
  }

  //const classes = useStyles();

  setOpacity(event, value){
    this.setState(prevState => {
      let overlay = Object.assign({}, prevState.overlay);
      overlay.opacity = value/100;
      return { overlay };
    })
  }

  setGradient(event){
    console.log(event);
    this.setState(prevState => {
      let overlay = Object.assign({}, prevState.overlay);
      overlay.gradient = event.target.value;
      return { overlay };
    })
  }

  getGradien(){
    return this.state.overlay.opacity;
  }

  getOpacity(){
    return this.state.overlay.opacity; 
  }


  getFiles(image){
    this.setState({ backgroundImage: image })
  }

  render(){
    const { classes } = this.props;
    
    return (
      <Grid container component="main"  className={classes.root}>
        <CssBaseline />
        <Grid item xs={11} sm={8} md={3} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Make your PI
            </Typography>
            <form className={classes.form} noValidate>
              <Form logoProps={this.state} setOpacity={this.setOpacity} setGradient={this.setGradient} getFiles={this.getFiles}/>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7}>
          <Logo logoProps={this.state}/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(App)
//export default App;
