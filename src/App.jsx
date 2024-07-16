import React, { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
