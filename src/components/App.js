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
    this.setColor = this.setColor.bind(this)
    this.getFiles = this.getFiles.bind(this)

    this.state = {
      backgroundImage: [],
      overlay : {
        gradient: "gradient",
        opacity: 0.5,
        color0: "#0ADEFF",
        color1: { r: 13, g: 222, b: 255, rgb: "rgb(13, 222, 255)" },
        color2: { r: 23, g: 223, b: 254, rgb: "rgb(23, 223, 254)"},
        color3: { r: 40, g: 224, b: 252, rgb: "rgb(40, 224, 252)" },
        color4: { r: 64, g: 226, b: 250, rgb: "rgb(64, 226, 250)" },
        color5: { r: 95, g: 229, b: 247, rgb: "rgb(95, 229, 247)" },
        color6: { r: 132, g: 232, b: 244, rgb: "rgb(132, 232, 244)" },
        color7: { r: 175, g: 235, b: 240, rgb: "rgb(175, 235, 240)" },
      }
    }
  }


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

  calculateGradientColors(color){
    this.setState(prevState => {
      let overlay = Object.assign({}, prevState.overlay);
      overlay.color1.r = color.r+3;
      overlay.color1.g = color.g ;
      overlay.color1.b = color.b ;
      overlay.color1.rgb = "rgb(" + overlay.color1.r + "," + overlay.color1.g + "," + overlay.color1.b + ")";

      overlay.color2.r = color.r+13 ;
      overlay.color2.g = color.g+1;
      overlay.color2.b = color.b-1 ;
      overlay.color2.rgb = "rgb(" + overlay.color2.r + "," + overlay.color2.g + "," + overlay.color2.b + ")";

      overlay.color3.r = color.r+30 ;
      overlay.color3.g = color.g+2;
      overlay.color3.b = color.b-3 ;
      overlay.color3.rgb = "rgb(" + overlay.color3.r + "," + overlay.color3.g + "," + overlay.color3.b + ")";

      overlay.color4.r = color.r+54 ;
      overlay.color4.g = color.g+4;
      overlay.color4.b = color.b-5 ;
      overlay.color4.rgb = "rgb(" + overlay.color4.r + "," + overlay.color4.g + "," + overlay.color4.b + ")";

      overlay.color5.r = color.r+85 ;
      overlay.color5.g = color.g+7;
      overlay.color5.b = color.b-8 ;
      overlay.color5.rgb = "rgb(" + overlay.color5.r + "," + overlay.color5.g + "," + overlay.color5.b + ")";

      overlay.color6.r = color.r+122 ;
      overlay.color6.g = color.g+10;
      overlay.color6.b = color.b-11 ;
      overlay.color6.rgb = "rgb(" + overlay.color6.r + "," + overlay.color6.g + "," + overlay.color6.b + ")";

      overlay.color7.r = color.r+165 ;
      overlay.color7.g = color.g+13;
      overlay.color7.b = color.b-15 ;
      overlay.color7.rgb = "rgb(" + overlay.color7.r + "," + overlay.color7.g + "," + overlay.color7.b + ")";
      return { overlay };
    });

  }

  setColor(color, event){
    console.log(color);
    this.setState(prevState => {
      let overlay = Object.assign({}, prevState.overlay);
      overlay.color0 = color.hex;
      this.calculateGradientColors(color.rgb);
      return { overlay };
    })
  }

  getGradient(){
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
        <Grid item xs={12} sm={5} md={3} component={Paper} elevation={6} square >
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" gutterBottom={true} paragraph={true}>
                Make a PI!
            </Typography>
            <Typography  color="textSecondary" variant="body2">
                A little tool to design your very own PI logo
            </Typography>
            <Divider variant="middle" style={{width: "100%", margin: "20px"}}/>
            <Form logoProps={this.state} setOpacity={this.setOpacity} setGradient={this.setGradient} setColor={this.setColor} getFiles={this.getFiles}/>
            {this.renderGenerateImageButton()}
            <Typography  color="textSecondary" variant="body2" style={{marginTop: "20px"}}>
                (This might take some time if your image is large)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={9} >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh'}}
          >
            <Grid item xs={6} style={{ minWidth: '100vh'}}>
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
