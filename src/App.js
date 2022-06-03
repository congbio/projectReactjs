<<<<<<< HEAD

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
=======
import logo from './logo.svg';
import './App.css';
import Footer from './page/Footer';
function App() {
  return (
    <>
  <Footer></Footer>
    </>
  );
>>>>>>> 14477d1d30d567d13eb4e1599ab6f9ab9009388d
}

export default App;

