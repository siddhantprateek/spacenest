import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Launch } from './pages';
import { Header } from './components'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='launch'>
          <Route path=":launchId" element={<Launch/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
