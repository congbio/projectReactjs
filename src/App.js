<<<<<<< HEAD

=======
>>>>>>> 284817cb7793abdba76421a65e783930b9117aca

import React, { Component } from 'react';
import Header from './page/Header';
import Footer from './page/Footer';
import {Route , Switch , BrowserRouter }from 'react-router-dom';
import routes from './routes';
import Footer from './page/Footer';
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
       <Footer></Footer>
    </BrowserRouter>
 
    
    );
<<<<<<< HEAD
  }

}

export default App;
=======
  }}
  export default App;
>>>>>>> 284817cb7793abdba76421a65e783930b9117aca

