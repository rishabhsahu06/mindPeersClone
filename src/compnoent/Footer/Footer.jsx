import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <hr className="font-extrabold mt-16    text-yellow-50  "></hr>
      
      <div className="flex justify-around gap-96  mt-20   ">
        
        <Link to='/'>
        <div>
          <img
            className="-mt-3 "
            src="https://www.mindpeers.co/hs-fs/hubfs/mindpeers/Group%20149694.png?width=426&height=90&name=Group%20149694.png"
          ></img>
        </div>
        </Link>
       
      
        <div>
          <h1 className="text-white text-3xl">Made in India, For the world</h1>
        </div>
      </div>
      <div className="flex justify-end mr-32  mt-5    ">
        <p className="text-white text-xl">Contact Us</p>
      </div>
      <div className="flex justify-end mr-32 mt-5">
        <p className="text-white text-xl">We're Hiring</p>
      </div>

   <div>

   </div>
    </>
  );
}

export default Footer;
