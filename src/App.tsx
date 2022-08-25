import React from 'react';

import './App.css';
import { Footer } from './components/index';
import { Header } from './components/index';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default App;
