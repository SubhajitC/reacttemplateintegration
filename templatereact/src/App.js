import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import contact from './pages/contact';
import pricing from './pages/pricing';
import work from './pages/work';
import worksingle from './pages/worksingle';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
     <div> 
       <Router>
    <Header/>
      
       <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={contact} />
      <Route path='/pricing' component={pricing} />
      <Route path='/work' component={work} />
      <Route path='/worksingle' component={worksingle} />
   </Switch>
  
   
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
