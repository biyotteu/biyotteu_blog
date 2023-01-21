import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Wrap from './components/Wrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Wrap>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer/>
      </Wrap>
    </div>
  );
}

export default App;
