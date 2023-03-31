import './App.css';
import React from 'react';

// Components
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
