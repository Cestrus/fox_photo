import React from 'react';

import './App.css';
import { Footer, Header, Banner, Hello, Seo } from './components/index';

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Banner />
        <Hello />
        <Seo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
