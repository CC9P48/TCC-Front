import React from 'react';

import Routes from './routes';

import './App.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
   <div className="conteiner">
      <div className="content">
        <Routes />

      </div>
   </div>
  );
}

export default App;
