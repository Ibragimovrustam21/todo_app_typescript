import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { About } from './pages/about';
import { TodoForm } from './pages/todoForm'


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={TodoForm} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  )
}

