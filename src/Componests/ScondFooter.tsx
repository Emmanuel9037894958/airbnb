// import React from "react";
import sveImage from "../assets/Vector (4).png";
import earthImage from "../assets/Vector (2).png";
import twitterImage from "../assets/Twitter.png";
import facebookImage from "../assets/Facebook.png";
import instagrammImage from "../assets/Instagram.png";

function ScondFooter() {
  return (
    <div className="bg-gray-100 p-4">
     
        
      <div className="flex flex-wrap justify-between pt-10 text-xl font-normal ">
        <h1 className="pl-5 hover:underline">Support</h1>
        <h1 className="pl-20 hover:underline">Hosting</h1>
        <h1 className="hover:underline">Airbnb</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-5">
        <h1 className="pl-5 hover:underline hover:text-red-600">Help center</h1>
        <h1 className="pl-20 hover:underline hover:text-red-600">Airbnb your home</h1>
        <h1 className="hover:underline hover:text-red-600">News room</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-5">
        <h1 className="pl-5 hover:underline hover:text-red-600">AirCover</h1>
        <h1 className="pl-28 hover:underline hover:text-red-600">AirCover for hosts</h1>
        <h1 className="hover:underline hover:text-red-600">New features</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-5">
        <h1 className="pl-5 hover:underline hover:text-red-600">Anti-discrimination</h1>
        <h1 className="hover:underline hover:text-red-600">Hosting resources</h1>
        <h1 className="hover:underline hover:text-red-600">Careers</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-5">
        <h1 className="pl-5 hover:underline hover:text-red-600">Cancellation options</h1>
        <h1 className="hover:underline hover:text-red-600">Hosting responsibly</h1>
        <h1 className="hover:underline hover:text-red-600">Gift cards</h1>
      </div>
      <div className="flex flex-wrap justify-between pt-5">
        <h1 className="pl-5 hover:underline hover:text-red-600">Report neighborhood concern</h1>
        <h1 className="hover:underline hover:text-red-600">Airbnb.org emergency stays</h1>
      </div>
     
      <div className="bg-gray-100 p-4">
        <div className="flex flex-wrap justify-center items-center">
          <button className="btn bg-black text-white w-36">Show map</button>
          <img
            src={sveImage}
            alt="sveImage"
            className=" md:absolute md:pl-[110px]"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-8 pt-5 text-sm md:text-base">
          <p className="font-light hover:text-red-500">
           
              &#169; {new Date().getFullYear()} - Airbnb, Inc. privacy. Terms.
              sitemap. UK Modern Slavery Act. Company details
            
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <img src={earthImage} alt="Earth" className="w-4 h-5" />
              <span>English(GB) & GBP</span>
            </p>
            <img src={facebookImage} alt="Facebook" className="h-5 w-4" />
            <img src={twitterImage} alt="Twitter" className="h-5 w-4" />
            <img src={instagrammImage} alt="Instagram" className="h-5 w-4" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ScondFooter;


// sm - small screens (640px and up)
// md - medium screens (768px and up)
// lg - large screens (1024px and up)
// xl - extra-large screens (1280px and up)
// 2xl - 2x extra-large screens (1536px and up)
