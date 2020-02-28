import React from 'react';
import FileBase64 from 'react-file-base64';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="app-logo-form">
	        <label>
	          <FileBase64 multiple={ false } onDone={ this.props.getFiles } />
	        </label>
	        <br/><br/>
          	<p></p>
          	<Slider value={this.props.logoProps.overlay.opacity*100} onChange={ this.props.setOpacity} />
          	<NativeSelect
	          value={this.props.logoProps.overlay.gradient}
	          onChange={this.props.setGradient}
	          name="age"
	          inputProps={{ 'aria-label': 'gradient' }}
	        >
	          <option value={false}>Flat</option>
	          <option value={true}>Gradient</option>
	        </NativeSelect>
	    </div>
	  </div>
    );
  }

}

export default Form;