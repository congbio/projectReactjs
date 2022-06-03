import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Booking from './page/Booking';
import React from 'react';
const routes = [{
    path : '/',
	exact : true,
	main : ()=> <Home />
},
{
    path : '/About',
	exact : true,
	main : ({history})=> <About history={history} />
},
{
    path : '/Contact',
	exact : true,
	main : ({history})=> <Contact history={history} />
},
{
    path : '/Admin',
	exact : true,
	main : ({history})=> <Booking history={history} />
}
];
export default routes;