import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Apropos from './components/pages/Apropos'
import Error from './components/pages/Error'
import Accomodation from './components/pages/Accomodation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path='/accomodation/:id' element={<Accomodation />} />
        <Route path='*' element={<Error />} />
      </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
);
