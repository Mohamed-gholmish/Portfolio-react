import React from "react";
import { useState } from "react";
import Item1 from "../../images/cabin.png";
import Item2 from "../../images/cake.png";
import Item3 from "../../images/circus.png";


export default function Portfolio() {
const [image,setImage] = useState('');

  return (
    <>
      <div className="head text-center mb-4 text-success ">
        <h2 className=" ">Portfolio</h2>
        <h3>My Projects</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"    data-bs-toggle="modal"
                data-bs-target="#firstmodal" >
            <div className="item">
              {" "}
              <div className="portf-item">
                <div className="item ">
                  <img src={Item1} alt="" className="w-100"  />
                </div>
                <div className="item-layer">
                
                  <i className="fa-solid fa-plus"  onClick={(e)=>{  setImage(e.target.parentElement.parentElement.querySelector('img').getAttribute('src')) ;console.log(image)   }} ></i>
                  <i></i>
                </div>
              </div>
            </div>

            <div
              className="modal fade modal-lg"
              id="firstmodal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                  <img src={image} className="w-100" alt=""/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nam eum unde error iusto aliquid nesciunt velit non incidunt quod?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-info mx-auto"
                      data-bs-dismiss="modal"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"    data-bs-toggle="modal"
                data-bs-target="#firstmodal" >
            <div className="item">
              {" "}
              <div className="portf-item">
                <div className="item ">
                  <img src={Item2} alt="" className="w-100"  />
                </div>
                <div className="item-layer">
                
                  <i className="fa-solid fa-plus"  onClick={(e)=>{  setImage(e.target.parentElement.parentElement.querySelector('img').getAttribute('src')) ;console.log(image)   }} ></i>
                  <i>project 2</i>
                </div>
              </div>
            </div>

            <div
              className="modal fade modal-lg"
              id="firstmodal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                  <img src={image} className="w-100" alt=""/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nam eum unde error iusto aliquid nesciunt velit non incidunt quod?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-info mx-auto"
                      data-bs-dismiss="modal"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"    data-bs-toggle="modal"
                data-bs-target="#firstmodal" >
            <div className="item">
              {" "}
              <div className="portf-item">
                <div className="item ">
                  <img src={Item3} alt="" className="w-100"  />
                </div>
                <div className="item-layer">
                
                  <i className="fa-solid fa-plus"  onClick={(e)=>{  setImage(e.target.parentElement.parentElement.querySelector('img').getAttribute('src')) ;console.log(image)   }} ></i>
                  <i></i>
                </div>
              </div>
            </div>

            <div
              className="modal fade modal-lg"
              id="firstmodal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                  <img src={image} className="w-100" alt=""/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nam eum unde error iusto aliquid nesciunt velit non incidunt quod?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-info mx-auto"
                      data-bs-dismiss="modal"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
