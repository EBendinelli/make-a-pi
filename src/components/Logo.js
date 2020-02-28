import React from 'react';
import FileBase64 from 'react-file-base64';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';

function LogoRender(props){
	console.log(props.overlay);
    return (
      <div id="logoContainer">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 566.93 566.93" xmlSpace="preserve" id="logoSvg">
          <defs>
            <pattern id="image" patternUnits="userSpaceOnUse" height="800" width="800">
              <image x="0" y="0"  width="100%" height="100%" preserveAspectRatio="xMidYMid slice" 
              xlinkHref={props.image}></image>
            </pattern>
          </defs>
          <OverlayRender overlay={props.overlay}/>
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

function OverlayRender(props){
	if(props.overlay.gradient){
		return(
			<g id="Gradient_Solid">
				<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="83.0248" y1="483.9043" x2="483.9043" y2="83.0248">
					<stop  offset="0" style={{stopColor: "#0ADEFF"}}/>
					<stop  offset="0.1943" style={{stopColor: "#0DDEFF"}}/>
					<stop  offset="0.3503" style={{stopColor: "#17DFFE"}}/>
					<stop  offset="0.4931" style={{stopColor: "#28E0FC"}}/>
					<stop  offset="0.628" style={{stopColor: "#40E2FA"}}/>
					<stop  offset="0.7574" style={{stopColor: "#5FE5F7"}}/>
					<stop  offset="0.8809" style={{stopColor: "#84E8F4"}}/>
					<stop  offset="0.999" style={{stopColor: "#AFEBF0"}}/>
				</linearGradient>
				<circle id='top'  fill="url(#image)" cx="283.46" cy="283.46" r="283.46"/>
				<circle style={{fill:"url(#SVGID_1_)", opacity: props.overlay.opacity}} cx="283.46" cy="283.46" r="283.46"/>
			</g>
		);	
	}
	return(
		<g id="Gradient_Multiply_1_">
        	<circle id='top'  fill="url(#image)" cx="283.46" cy="283.46" r="283.46"/>
        	<circle style={{fill: "#0ADEFF", opacity: props.overlay.opacity }} cx="283.46" cy="283.46" r="283.46"/>
      	</g>
	);
}

class Logo extends React.Component {
  constructor(props) {
  	console.log(props);
    super(props);
  }

  setOpacity(event, value){
  	console.log(value);
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

  getFiles(image){
    this.setState({ backgroundImage: image })
  }

   render() {
    return (
	    <div className="app-logo-render">
	    	<LogoRender image={this.props.logoProps.backgroundImage.base64} overlay={this.props.logoProps.overlay}/>
	    </div>
    );
  }

}

export default Logo;