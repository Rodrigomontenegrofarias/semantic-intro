
import 'semantic-ui-css/semantic.min.css'

import React from "react";
import './App.css';
import Nav from './Nav';
//import Menu2 from './Menu2';

import Formulario from './Formulario';
import { Segment } from 'semantic-ui-react';

import Fig from './Fig';
import Fig1 from './Fig1';
import Shop from './Shop';
import Video from './Video';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buton from './Buton';


function App() {

  return (
    <Router>
      <div className="App">
        
        <header >
            <div className="App-header1">
                <div>
                      <Nav/>
                </div>
                <div className="App-fig1">
                      <Fig1/>
                </div>
                <div className="App-fig">
                      <Fig/>
                </div>
            </div>        
        </header>
       <item> <Buton/>
       </item>
       <item> <Buton/>
       </item>
       <item> <Buton/>
       </item>
       
        

        <body>
            <Segment>
              <div>
                    
                  <div>
                    <div>
                      <Switch>
                         <Route path="/" exact component={Home}/> 
                          <Route path="/Video" component={Video}/>
                          <Route path="/Shop" component={Shop}/>
                      </Switch>
                    </div>
                  </div> 
              </div>
              
            </Segment> 
        </body>
          
        
        <footer>
          <div className="App-Footer">
              <div class="ui black vertical footer segment">
                    <div class="ui center aligned container">
                        <h4 class="ui inverted header">&copy; Copyright 2020 | All rights reserved | Rodrigo-Montenegro</h4>
                        <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
                        <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
                        <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
                    </div>
                </div>  
          </div>
        </footer>        
      </div>
    </Router>
    
  );
}
const Home = () => (
  
  <div>
      <h1>
        Home Page
      </h1>
      <div className="App-Formulario">
        <Formulario/>
      </div>
  </div>
)

export default App;
