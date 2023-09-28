import React from 'react';
import SignUp from '../src/components/organisms/SignUp'
import Home from './components/organisms/Home';
import Login from './components/organisms/Login';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
