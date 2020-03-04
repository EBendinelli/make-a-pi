import React from 'react';
import FileBase64 from 'react-file-base64';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import { TwitterPicker } from 'react-color';

class Form extends React.Component {

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={4}
        
      >
        <Grid item >
          <FormLabel component="legend" m={2} >Select background image</FormLabel>
          <Box mt={2}>
	          <FileBase64 multiple={ false } onDone={ this.props.getFiles } />
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

         <Grid item >
          <FormLabel component="legend">Overlay color</FormLabel>
          <Box mt={1}>
            <TwitterPicker 
              triangle="hide" 
              width="auto" 
              value={this.props.logoProps.overlay.color0} 
              onChangeComplete={ this.props.setColor }
              colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0ADEFF', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#000000']}/>
              {/*<input type="color"/>*/}
          </Box>
{/*          <Box mt={1}>
            <SketchPicker 
              triangle="hide" 
              width="auto" 
              value={this.props.logoProps.overlay.color0} 
              onChangeComplete={ this.props.setColor }
              colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0ADEFF', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF', '#000000']}/>
          </Box>*/}
         </Grid>   

        <Grid item>
          <FormLabel component="legend">Overlay opacity</FormLabel>
            <Box mt={1}>
              <Slider value={this.props.logoProps.overlay.opacity*100} onChange={ this.props.setOpacity} />
            </Box>
        </Grid> 

      </Grid> 
    );
  }

}

export default Form;