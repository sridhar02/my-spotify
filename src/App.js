import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return <div>{code ? <Dashboard code={code} /> : <Login />}</div>;
}

export default App;
