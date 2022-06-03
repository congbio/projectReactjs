
import React, { Component } from 'react';
import Header from './page/Header';
import {Route , Switch , BrowserRouter }from 'react-router-dom';
import routes from './routes';
class App extends Component {
 
  render() {
    return (
       <BrowserRouter>
       <Header></Header>
       
       <Switch>
        
         {routes.map((route,index)=>(
         <Route key={index} path={route.path} component={route.main} exact={route.exact} />
         )
         )}
       </Switch>
    </BrowserRouter>
    
    );
  }
}

export default App;

