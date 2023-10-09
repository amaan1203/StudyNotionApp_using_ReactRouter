import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

import toast from "react-hot-toast";



function Navbar(props)
{
    let isLoggedin=props.isLoggedin;
    let setisLoggedin=props.setisLoggedin;

    return (<div className="flex gap-2 justify-between py-4 mx-auto items-center w-10/12 max-w-[1160px]   ">
      
      <Link to="/">
         <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>


      <nav className="flex justify-between ">

   
        <ul className="flex gap-x-6 text-richblack-100">
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/">About</Link>
            </li>

            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
        </nav>
       
       <div className="flex gap-x-4">
        {
        !isLoggedin &&
        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700">
            <Link to="/login" > Log in </Link>
        </button> 

        
       }
       
       {
        !isLoggedin && 
        
        <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700">
        <Link to="/signup">Sign up</Link>
        </button> 
        
       }

    
    {
            isLoggedin&&
        <button  className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700" onClick={()=>{

            setisLoggedin(false);
            toast.success("Logged out"); 
        }

        }>
            <Link to="/">Log out</Link>
        </button>
       
        
   }


   {     
    isLoggedin &&
        
         <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border-richblack-700">
              <Link to="/dashboard">Dashboard</Link>
        </button>
        
   }



      
</div> 
    </div>)

}

export default Navbar;