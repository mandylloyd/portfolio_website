import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioWork from './components/PortfolioWork';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import './index.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Route path="/about"
                    component={AboutMe}/>
                <Route path="/portfolio"
                    component={PortfolioWork}/>
                <Route path="/contact"
                    component={ContactForm}/>
                <Footer/>
            </Router>
        </div>
    )
};

ReactDOM.render (
    <App/>,
    document.querySelector('#root')
);
