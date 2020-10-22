import React from 'react';
import './App.css';
import { Link, Route, Router } from 'wouter'
import useHashLocation from 'hooks/useHashLocation'
import Home from 'pages/Home'
import Info from 'pages/Info'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Router hook={useHashLocation}>
        <ul>
          <li><Link href="/" className='Link'>Home</Link></li>
          <li><Link href="/info" className='Link'>Info</Link></li>
        </ul>

        <Route path="/" component={Home} />
        <Route path="/info" component={Info} />
      </Router>
    </div>
  );
}

export default App;
