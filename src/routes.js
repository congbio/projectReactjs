import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Booking from './page/Booking';
import React from 'react';
import ExLogin from './Component/login/Login';
import ExLogout from './Component/logout/register';
import FillInfromation from './Component/Fill/FillInfromation';
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
	exact : false,
	main : ({history})=> <Contact history={history} />
},

{
    path : '/Booking',
	exact : false,
	main : ({history})=> <Booking history={history} />
},
{
    path : '/checkout',
	exact : false,
	main : ({history})=> <FillInfromation history={history} />
},

{
    path : '/login',
	exact : false,
	main : ({history})=> <ExLogin history={history} />
},
{
    path : '/register',
	exact : false,
	main : ({history})=> <ExLogout history={history} />
},
{
    path : '/Admin',
	exact : true,
	main : ({history})=> <Booking history={history} />
}
];
export default routes;