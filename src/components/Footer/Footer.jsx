import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-color w-100 text-white text-center fixed-bottom ">
        <div className="container footer-color">
          <div className="row footer-color">
            <div className="col-md-4 py-1 ">
              <div className="location">
                <h4>LOCATION</h4>
                <p className=" fs-6">2215 John Daniel Drive Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 py-1 ">
              <div className="location">
                <h4>AROUND THE WEB</h4>
               <div className="icon"><i class="fa-brands fa-facebook-f "></i></div> 
              </div>
            </div>
            <div className="col-md-4 py-1 ">
              <div className="location">
                <h4>ABOUT FREELANCER</h4>
                <p className="lead">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
          <div className="row  bg-dark"><div className="text ">Copyright © Your Website 2021</div> </div>
        </div>
        <div className="container">
          <span></span>
        </div>
      </footer>
    </>
  );
}
