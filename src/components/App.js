import React from 'react';
import Logo from './Logo';
const saveSvgAsPng = require('save-svg-as-png');

function saveSvgToPngHandler(){
  saveSvgAsPng.saveSvgAsPng(document.getElementById("logoSvg"), "PILogo.png");
}

class App extends React.Component  {

  renderGenerateImageButton(){
    return(
      <a className="App-link"
        href="#"
        rel="noopener noreferrer"
        onClick={saveSvgToPngHandler}
      >
        Generate image
      </a>
    );
  }

  renderImageUploader(){
     return(
       <input type="file" accept="image/*" name="background" onChange={this.onImageUploadHanlder}/>
     );
  }

  renderImageManipulation(){
    /*TODO*/
  }

  onImageUploadHanlder(files){
    console.log(files);
  }
   
  render(){
    return (
      <div className="app">
        <div className="app-logo">
          <Logo />
        </div>
        <div className="app-action">
          {this.renderGenerateImageButton()}
        </div>
      </div>
    );
  }
}


export default App;
