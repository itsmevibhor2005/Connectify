import React from 'react'
import './Signup.css'
import { useState } from 'react'
import eyeClose from '../assets/eye-close.svg'
import eyeOpen from '../assets/eye-open.svg'


const Signup = () => {
  const [eye, setEye] = useState(eyeClose);
  const [type, setType] = useState("password");
  const [passwd, setPasswd] = useState("");
  const [confPasswd, setConfPasswd] = useState("");

  function eyeClicked() {
    if (type === "password"){
      setEye(eyeOpen);
      setType("text");
    }
    else{
      setEye(eyeClose);
      setType("password");
    }
  };

  const check = (passwd,confPasswd) => {
    if (confPasswd !== ''){ 
      if ( passwd === confPasswd){
        document.getElementById("conf-passwd").style.borderColor="green";
      }
      else{
        document.getElementById("conf-passwd").style.borderColor="#e8f530";
      }
    };
  };

  return (
    <>
    <div className='outer-container'>
      <div className="left-text">
        Add text and features here
      </div>
      <div className="form-container">
        <form className="form">
          <div className="header">
            Signup
          </div>
          <div className="field" id="input-fname">
            <span id="span1">First Name</span>
            <span id="span2">Last Name</span>
            <input type="text" placeholder='First name' size='26' required />
          </div>
          <div className="field" id="input-lname">
            <input type="text" placeholder='Last name' size='26' required />
          </div>
          <div className="field">
            <span>Email</span>
            <input type="email" placeholder='Email' size='40' required/>
          </div>
          <div className="field">
            <span>Password</span>
            <input type={type} placeholder="Password" onChange={(event)=>setPasswd(event.target.value)} size='60' required/>
            <img src={eye} alt='' width="50px" height="50px" id="password-eye" onClick={(event)=> eyeClicked()}/>
          </div>
          <div className="field">
            <span>Confirm Password</span>
            <input id="conf-passwd" type="password" placeholder='Confirm password' onChange={(event)=>setConfPasswd(event.target.value)} size='40' required/>
          </div>
          {check(passwd,confPasswd)}
          <div className="div-btn-signup">
            <button className='btn-signup'>Sign up</button>
            <p>Already have an Account?</p>
            <a className='sign-up-link' href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup