import './App.scss';
import React from 'react';

// Components
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <React.Fragment>
      <div className="contain">

        <Header />
        <Nav />
        <Main/>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
