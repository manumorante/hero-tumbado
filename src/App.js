import React from 'react';
import './App.css';
import { Link, Route, Router } from 'wouter'
import useHashLocation from 'hooks/useHashLocation'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults';
import Info from 'pages/Info'
import Menu from 'components/Menu';
import Search from 'components/Search';

export default function App() {
  return (
    <div className="App">
      <Router hook={useHashLocation}>
        <h1><Link to='/'>Superheros</Link></h1>

        <Menu />
        <Search />

        <Route path="/" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/search/:keyword" component={SearchResults} />
      </Router>
    </div>
  );
}
