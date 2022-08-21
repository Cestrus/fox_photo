import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Logo type='header' />
        <Logo type='footer' />
      </main>
      <Footer />
    </div>
  );
};

export default App;
