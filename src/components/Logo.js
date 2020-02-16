import React from 'react';
import FileBase64 from 'react-file-base64';

function LogoRender(props){
    return (
      <div id="logoContainer">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 566.93 566.93" xmlSpace="preserve" id="logoSvg">
          <defs>
            <pattern id="image" patternUnits="userSpaceOnUse" height="800" width="800">
              <image x="0" y="0"  width="100%" height="100%" preserveAspectRatio="xMidYMid slice" 
              xlinkHref={props.value}></image>
            </pattern>
          </defs>
          <g id="Gradient_Multiply_1_">
            <circle id='top'  fill="url(#image)" cx="283.46" cy="283.46" r="283.46"/>
            <circle style={{fill: "#0ADEFF", opacity:0.5}} cx="283.46" cy="283.46" r="283.46"/>

          </g>
          <g id="PI">
            <g>
              <rect x="141.73" y="141.73" style={{opacity: 0.75, fill:"#FFFFFF"}} width="85.04" height="283.46"/>
              <rect x="340.16" y="141.73" style={{opacity: 0.75, fill:"#FFFFFF"}} width="85.04" height="283.46"/>
              <circle style={{fill:"#FFFFFF"}} cx="226.77" cy="226.77" r="85.04"/>
            </g>
          </g>
          </svg>
        </div>  

    );
}

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Callback~
  getFiles(image){
    this.setState({ backgroundImage: image })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div>
      	<div className="app-logo-form">
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) } />
	        </label>
	        <input type="submit" value="Apply changes" />
	      </form>
	    </div>
	    <div className="app-logo-render">
	    	<LogoRender value={this.state.backgroundImage.base64}/>
	    </div>
	  </div>
    );
  }

}

export default Logo;