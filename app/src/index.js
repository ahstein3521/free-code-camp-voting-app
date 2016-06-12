import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './components/app';
import Home from './components/home';
import Signup from './components/auth_forms/signup';
import Auth from './components/auth_forms/authAccess'
import PublicView from './components/public';
import UserView from './components/protected'

import { AUTH_USER } from './actions/types';

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promise,thunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}



ReactDOM.render(
  <Provider store={store}>
   <Router history={browserHistory}>
     <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path='/public(/:id)' component={PublicView}/>
      <Route path='/user' component={Auth(UserView)}/>
      <Route path='/signup' component={Signup}/>
    </Route>
    <Route path="/public" component={App} >
      <Route path="(/:id)" component={PublicView}/>
    </Route>
  </Router>
  </Provider>
  , document.querySelector('.home'));


