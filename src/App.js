import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { SignUp } from './pages/signup/SignUp';
import { UploaderSignUp } from './pages/signup/UploadersSignup';
import { UsersSignup } from './pages/signup/UsersSignup';
import { Login } from './pages/login/Login';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup">
          <Route index element={<SignUp />} />
          <Route path="uploader" element={<UploaderSignUp />} />
          <Route path="userSignup" element={<UsersSignup />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
