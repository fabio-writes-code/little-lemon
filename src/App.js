import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import CallToAction from './components/CallToAction';
import BookingPage from './components/BookingPage';
import Specials from './components/Specials';
import ConfirmBooking from './components/ConfirmBooking';


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path="About" element={<About/>} />
          <Route path="bookings" element={<BookingPage/>} />
          <Route path="CallToAction" element={<CallToAction/>} />
          <Route path="home" element={<Main/>} />
          <Route path="specials" element={<Specials/>} />
          <Route path='booking-confirmation' element={<ConfirmBooking/>}/>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
