import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      Home Page

      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />

    </div>
  );
}

export default App;
