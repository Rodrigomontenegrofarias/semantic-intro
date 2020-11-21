
//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import './App.css';
//import EmbedExampleYouTube from './EmbedExampleYouTube';
import Menu2 from './Menu2';

import Formulario from './Formulario';



//Import web





function Formulario1() {
// eslint-disable-next-line
  //var [openModal] = React.useState(false);


  //console.log("modal state", openModal);
  
  return (
    <div>
      <div className="App-izq">
                <Menu2/>
      </div>
      <div>
    
            
        <div className="App-EM">
            <h1>
                    Formulario Page
            </h1>
            <div className="App-Formulario">
                <Formulario/>
            </div>
            </div>  
      </div>
</div>
    
  );
}

export default Formulario1;
