import React from 'react';
	
function LogoRender(props){
	console.log(props.overlay);
    return (
      <div id="logoContainer">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 566.93 566.93" xmlSpace="preserve" id="logoSvg">
          <defs>
            <pattern id="image" patternUnits="userSpaceOnUse" height="800" width="800">
              <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" 
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
	if(props.overlay.gradient === "gradient"){
		console.log(props.overlay)
		return(
			<g id="Gradient_Solid">
				<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="83.0248" y1="483.9043" x2="483.9043" y2="83.0248">
					<stop  offset="0" style={{stopColor: props.overlay.color0 }}/>
					<stop  offset="0.1943" style={{stopColor: props.overlay.color1.rgb }}/>
					<stop  offset="0.3503" style={{stopColor: props.overlay.color2.rgb }}/>
					<stop  offset="0.4931" style={{stopColor: props.overlay.color3.rgb }}/>
					<stop  offset="0.628" style={{stopColor: props.overlay.color4.rgb }}/>
					<stop  offset="0.7574" style={{stopColor: props.overlay.color5.rgb }}/>
					<stop  offset="0.8809" style={{stopColor: props.overlay.color6.rgb }}/>
					<stop  offset="0.999" style={{stopColor: props.overlay.color7.rgb }}/>
				</linearGradient>
				<circle fill="url(#image)" cx="283.46" cy="283.46" r="283.46"/>
				<circle style={{fill:"url(#SVGID_1_)", opacity: props.overlay.opacity}} cx="283.46" cy="283.46" r="283.46"/>
			</g>
		);	
	}
	return(
		<g id="Gradient_Multiply_1_">
        	<circle id='top'  fill="url(#image)" cx="283.46" cy="283.46" r="283.46"/>
        	<circle style={{fill: props.overlay.color0, opacity: props.overlay.opacity }} cx="283.46" cy="283.46" r="283.46"/>
      	</g>
	);
}

class Logo extends React.Component {
  constructor(props) {
  	console.log(props);
    super(props);
  }



  render() {
  	console.log(this.props.logoProps);
    return (
    	<LogoRender image={this.props.logoProps.backgroundImage.base64} overlay={this.props.logoProps.overlay}/>

    );
  }

}

export default Logo;