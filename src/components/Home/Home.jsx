import React from "react";
import Avatar from "../../images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="container  ">
        <div className="content icon-background d-flex justify-content-center align-items-center text-center"> <div className="figure">
          <img src={Avatar} alt="" className="w-100"/>
          <h2>START REACT</h2>

          <div className="decore ">
            <span className="line-left"></span>
          <span className="star px-3 fs-1"><i class="fa-regular fa-star"></i></span>
          <span className="line-right"></span>
          </div>
          <div className="desc fs-4">Graphic Artist - Web Designer - Illustrator</div>
          
        </div></div>
      
      </div>
    </>
  );
}
