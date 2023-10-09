import "./App.css";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
 
  const [isLoggedin,setisLoggedin]=useState(false);
  

  return <div className="w-[100vw] h-full bg-richblack-900 flex flex-col">

    <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage setisLoggedin={setisLoggedin} />} />
    <Route path="/signup" element={<Signup  setisLoggedin={setisLoggedin} />} />


            <Route path="/dashboard" element={
             
             <PrivateRoute isLoggedin={isLoggedin}>
              <Dashboard  />
             </PrivateRoute>


             } /> 


    </Routes>

  </div>;
}

export default App;
