/*** React **/
import React from 'react';
import ReactDOM from 'react-dom';

/*** Redux **/
import { Provider } from "react-redux";
import store from "./store";

/*** Root **/
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";

/*** App Level **/
import { Form } from './app/organisms/form';
import Login from './app/templates/login';
import Profile from './app/templates/profile';
import { Menu } from './app/templates/menu';
import NoMatch from './app/templates/404';
import Dashboard from './app/templates/dashboard';



/***
store.subscribe(()=>{
  console.log("getState >>> ",store.getState());
});
***/

ReactDOM.render(<Provider store={store}>
       <Router>
           <Switch>
               <Route exact strict path='/' render={() => <Login />} />
               <Redirect from="/login" to="/" />
               <Route exact strict path='/profile' component={Profile} />
               <Route exact strict path='/menu' component={Menu} />
               <Route exact strict path='/dashboard' component={Dashboard} />
               <Route path='*' component={NoMatch} />
           </Switch>
       </Router>
    </Provider>, document.getElementById('root'))
