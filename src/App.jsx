
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import OTP from './components/OTP/OTP';

function App() {

  
    return (
    <div  >
      <Router>
          <Routes>
            <Route key="login" path="/" exact element={<Login/>}/>
            <Route key="otp" path="/otp" exact element={<OTP/>}/>
          </Routes>

      </Router>      

    </div>
  )
}

export default App
