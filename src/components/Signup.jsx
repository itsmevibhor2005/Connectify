import React from 'react'
import styles from './Signup.module.css';
import { useState } from 'react'
import eyeClose from '../assets/eye-close.svg'
import eyeOpen from '../assets/eye-open.svg'
import { Link } from "react-router-dom";


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
        document.getElementById("confPasswd").style.borderColor="green";
      }
      else{
        document.getElementById("confPasswd").style.borderColor="#e8f530";
      }
    };
  };

  return (
    <>
    <div className={styles.outerContainer}>
      <div className={styles.leftText}>
        Add text and features here
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.header}>
            Signup
          </div>
          <div className={styles.field} id={styles.inputFname}>
            <span id={styles.span1} >First Name</span>
            <span id={styles.span2}>Last Name</span>
            <input type="text" placeholder='First name' size='26' required />
          </div>
          <div className={styles.field} id={styles.inputLname}>
            <input type="text" placeholder='Last name' size='26' required />
          </div>
          <div className={styles.field}>
            <span>Email</span>
            <input type="email" placeholder='Email' size='40' required/>
          </div>
          <div className={styles.field}>
            <span>Password</span>
            <input type={type} placeholder="Password" onChange={(event)=>setPasswd(event.target.value)} size='60' required/>
            <img src={eye} alt='' width="50px" height="50px" id={styles.passwordEye} onClick={(event)=> eyeClicked()}/>
          </div>
          <div className={styles.field}>
            <span>Confirm Password</span>
            <input id="confPasswd" type="password" placeholder='Confirm password' onChange={(event)=>setConfPasswd(event.target.value)} size='40' required/>
          </div>
          {check(passwd,confPasswd)}
          <div className={styles.divBtnSignup}>
            <Link to="/home">
              <button className={styles.btnSignup}>Sign up</button>
            </Link>
            <p>Already have an Account?</p>
            <Link className={styles.signUpLink} to="/">
                Login
              </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup