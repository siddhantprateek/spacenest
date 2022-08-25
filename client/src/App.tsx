import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Launch, Launchs } from './pages';
import { Header, Footer } from './components'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='launch'>
          <Route index element={<Launchs/>}/>
          <Route path=":launchId" element={<Launch/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
