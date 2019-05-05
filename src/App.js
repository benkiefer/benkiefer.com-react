import React from 'react';
import './App.css';
import Main from './main/Main.js';
import Contact from './contact/Contact.js';
import Header from './Header.js';
import Footer from './Footer.js';


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Route exact path="/" component={Main} />
                <Route exact path="/contact" component={Contact} />

                <Footer />
            </div>
        </Router>
    );
}


export default App;