import React from "react";
import '../index.css';

function Footer() {
  return (
    <div>
      <h1
        style={{
          fontSize: "x-large",
          paddingLeft: "33px",
          paddingBottom: "13px",
          fontWeight: "normal",
        }}
      >
        Inspiration for future gateways
      </h1>
      <a href="">
      <div className="grid grid-cols-2  gap-4 pl-8 pb-4 lg:flex">
        <h3 className="hover:underline hover:text-red-600">Popular</h3>
        <h3 className="hover:underline hover:text-red-600">Historic</h3>
        <h3 className="hover:underline hover:text-red-600">Coastal</h3>
        <h3 className="hover:underline hover:text-red-600">Islands</h3>
        <h3 className="hover:underline hover:text-red-600">Lakes</h3>
        <h3 className="hover:underline hover:text-red-600">Unique stays</h3>
        <h3 className="hover:underline hover:text-red-600">Categories</h3>
        <h3 className="hover:underline hover:text-red-600">Things to do</h3>
      </div>
      </a>
      <div className="pl-8 pt-5 pb-3">  
    <div className="flex flex-wrap justify-between gap-8">  
        {Array.from({ length: 18 }).map((_, index) => (  
            <div key={index} className="flex flex-col basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">  
                <h1 className="font-bold">Aberfeldy</h1>  
                <h4 className="text-sm">Holiday rentals</h4>   
            </div>  
        ))}  
    </div>  
</div> 
    </div>
  );
}

export default Footer;
