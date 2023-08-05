import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import Files from "./components/Files"
import LoginForm from "./components/LoginForm"
import Home from './components/Home';
import ProtecteRoute from './components/ProtecteRoute';
import NotFound from "./components/NotFound"


const  App = () => (
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/login" component={LoginForm} />
  <ProtecteRoute exact path="/files" component={Files} />
  <Route path="/not-found" component={NotFound} />
  <Redirect to="not-found" />
 </Switch>
 </BrowserRouter>
)
 

export default App;
