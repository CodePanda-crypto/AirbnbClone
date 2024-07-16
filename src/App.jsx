import React, { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <main className="card">
        <h1>Fun facts about React</h1>
        <div className="react-facts">
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
