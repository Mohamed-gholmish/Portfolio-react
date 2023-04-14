import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container">
        <h2></h2>
        <div className="row">
           <div className="form col-md-8 offset-md-2 ">
          <input type="text" name="name" id="name" required className=' form-control border-0 mt-4 fs-2 border-bottom ' placeholder='NAME' />
          <input type="email" name="email" id="email" required className=' form-control border-0 mt-4 fs-2 border-bottom' placeholder='Email Address' />
          <input type="tel" name="phone" id="phone" required className=' form-control border-0 mt-4 fs-2 border-bottom' placeholder='Phone Number' />
          <textarea type="text" name="message" id="message" required className=' form-control border-0 mt-4 fs-2 border-bottom ' rows="4" placeholder='Message' size='200'/>
          <button className='btn btn-info mt-5'>Send</button>
          </div></div>
       </div>
    </>
  )
}

