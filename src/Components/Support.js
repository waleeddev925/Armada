import React, { useState } from 'react'

export const Support = () => {

  const [fullName, setfullName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')

  const SaveData = async(e)=>{
    e.preventDefault()
    let result = await fetch('http://localhost:8002/supports',{
      method : "post",
      body: JSON.stringify({fullName , email, issue}),
      headers:{
        "content-type" : "application/json"
      }
    })
    result = await result.json();
      

  }

  return (
    <>
      <div>
        <button type="button" className="btn2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-regular fa-circle-question" style={{ color: '#01060e' }} /> Support
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Support</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputFullname1" className="form-label">Full Name<span style={{ color: "red" }}>*</span></label>
                    <input 
                    onChange={(e)=>setfullName(e.target.value)}
                    type="text" value={fullName} placeholder='Enter your full name' className="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address<span style={{ color: "red" }}>*</span></label>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" value={email} placeholder='Enter your email' className="form-control bg-light  " id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <label htmlFor="exampleInputtextbox1" className="form-label" >Issue<span style={{ color: "red" }}>*</span></label><br />
                  <textarea 
                  onChange={(e)=>setIssue(e.target.value)}
                  value={issue} placeholder='Tell us your issue!' rows={3} cols={50} className='bg-light'></textarea>
                  <div className="modal-footer">
                    <button 
                    onClick={SaveData}
                    className="btn1 btn btn-dark">Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
