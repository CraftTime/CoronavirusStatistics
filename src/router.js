import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import HomeScene from './HomeScene';
import 'bootstrap/dist/css/bootstrap.min.css';


function RouterConfig({history}) {
	return (
		<Router history={history}>
			<Route path="/" component={HomeScene}/>
		</Router>
	);
}

export default RouterConfig;
