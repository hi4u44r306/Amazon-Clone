import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
     const history = useHistory();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const signIn = e => {
          e.preventDefault();

          auth.signInWithEmailAndPassword(email, password)
               .then(auth => {
                    history.push('/')
               })
          .catch(error => alert(error.mesage))
          // firebase login stuff
     }
     const register = e => {
          e.preventDefault();

          auth.createUserWithEmailAndPassword(email, password)
               .then((auth) => {
                    if (auth) {
                         history.push('/')
                    }
               })
          .catch(error => alert(error.mesage))
          // firebase register stuff
     }
     
          
          
     return (
          <div className='login'>
               <Link to='/'>
               <img
                    className="login__logo"
                    src='https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png'
                    alt=""
               />
               </Link>

               <div className='login__container'>
                    <h1>Sign-in</h1>
                    <form>
                         <h5>E-mail</h5>
                         <input
                              type='text'
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                         />
                         
                         <h5>Password</h5>
                         <input
                              type='password'
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                         />
                         
                         <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                         
                    </form>

                    <p>
                         This is real AMAZON!!!!
                    </p>

                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

               </div>
          </div>
     )
}

export default Login
