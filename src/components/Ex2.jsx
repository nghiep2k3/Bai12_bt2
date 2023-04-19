import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import {useState} from 'react'
import Home from './Home.jsx';
import Login from './Login.jsx';

export default function Bt2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={(isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />)} />
        <Route exact path="/login" element={(!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />)} />
      </Routes>
    </Router>
  );
}
