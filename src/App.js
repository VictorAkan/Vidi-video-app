import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { UsersSignup } from './pages/signup/UsersSignup';
import { Login } from './pages/login/Login';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<UsersSignup />} />

      </Routes>
    </div>
  );
}

export default App;
