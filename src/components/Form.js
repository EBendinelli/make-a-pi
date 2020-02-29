import React from 'react';
import FileBase64 from 'react-file-base64';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  form: {
    margin: theme.spacing(6),
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={4}
        classeName={classes.form}
      >
        <Grid item >
          <FormLabel component="legend" m={2} >Select background image</FormLabel>
          <Box mt={2}>
	          <FileBase64 multiple={ false } onDone={ this.props.getFiles } />
	        </Box>
        </Grid>
        
        <Grid item>
          <FormLabel component="legend">Overlay opacity</FormLabel>
            <Box mt={1}>
              <Slider value={this.props.logoProps.overlay.opacity*100} onChange={ this.props.setOpacity} />
            </Box>
        </Grid> 

        <Grid item >
          <FormLabel component="legend">Overlay style</FormLabel>
          <Box mt={1}>
            <RadioGroup aria-label="overlayStyle" name="overlayStyle" value={this.props.logoProps.overlay.gradient} onChange={this.props.setGradient}>
              <FormControlLabel value="gradient" control={<Radio />} label="Gradient" />
              <FormControlLabel value="flat" control={<Radio />} label="Flat" />
            </RadioGroup>
          </Box>
         </Grid>   
      </Grid> 
    );
  }

}

export default withStyles(useStyles)(Form)