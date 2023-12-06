
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import OTP from './components/OTP/OTP';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  
    return (
    <div  >
      <Router>
          <Routes>
            <Route key="login" path="/" exact element={<Login/>}/>
            <Route key="otp" path="/otp" exact element={<OTP/>}/>
            <Route key="dashboard" path="/dashboard" exact element={<Dashboard/>}/>
          </Routes>

      </Router>      

    </div>
  )
}

export default App
