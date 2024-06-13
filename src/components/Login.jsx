import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import eyeClose from '../assets/eye-close.svg'
import eyeOpen from '../assets/eye-open.svg'
import { Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import login_signup_theme from './login_signup_theme';


const Login = () => {
  const [eye, setEye] = useState(eyeClose);
  const [type, setType] = useState("password");

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

  return (
  <ChakraProvider theme={login_signup_theme}>
    <div className={styles.outeContainer}>
      <div className={styles.leftText}>
        Add text and features here
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.header}>
            Login
          </div>
          <div className={styles.field}>
            <span>Email</span>
            <input type="email" placeholder='Email' size='40' required/>
          </div>
          <div className={styles.field}>
            <span>Password</span>
            <input type={type} placeholder="Password" size='60' required/>
            <img src={eye} alt='' width="50px" height="50px" id={styles.passwordEye} onClick={(event)=> eyeClicked()}/>
          </div>
          <div className={styles.divForgotPassword}>
            <a href="#">Forgot password?</a>
          </div>
          <div className={styles.divBtnLogin}>
            <Link to='/home'>
            <button className={styles.btnLogin}>Login</button>
            </Link>
            <p>Don't have an Account?</p>
            <Link className={styles.signUpLink} to='/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  </ChakraProvider>
  );
};

export default Login