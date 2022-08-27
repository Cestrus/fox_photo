import React from 'react';

import './App.css';
import { Footer, Header, Banner, Hello } from './components/index';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Banner />
        <Hello />
      </main>
      <Footer />
    </div>
  );
};

export default App;
