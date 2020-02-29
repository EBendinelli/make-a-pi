import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const saveSvgAsPng = require('save-svg-as-png');

function saveSvgToPngHandler(){
  saveSvgAsPng.saveSvgAsPng(document.getElementById("logoSvg"), "PILogo.png");
}


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.setOpacity = this.setOpacity.bind(this)
    this.setGradient = this.setGradient.bind(this)
    this.getFiles = this.getFiles.bind(this)

    this.state = {
      backgroundImage: [],
      overlay : {
        gradient: "gradient",
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

  setGradient(event, value){
    
    this.setState(prevState => {
      let overlay = Object.assign({}, prevState.overlay);
      overlay.gradient = value;
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

  renderGenerateImageButton(){
    return(
      <Button variant="contained" color="primary"
        className="App-link"
        href="#"
        rel="noopener noreferrer"
        onClick={saveSvgToPngHandler}
      >
        Download
      </Button>
    );
  }

  render(){
    const { classes } = this.props;
    
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={11} sm={8} md={3} component={Paper} elevation={6} square >
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" gutterBottom={true} paragraph={true}>
                Make your PI
            </Typography>
            <Typography  color="textSecondary" variant="body2">
                A little tool to design your very own PI logo
            </Typography>
            <Divider variant="middle" style={{width: "100%", margin: "20px"}}/>
            <Form logoProps={this.state} setOpacity={this.setOpacity} setGradient={this.setGradient} getFiles={this.getFiles}/>
            {this.renderGenerateImageButton()}
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={9} >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={6}>
              <Logo logoProps={this.state}/>
            </Grid>     
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(App)
//export default App;
