import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Header from './Header';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from './App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
           

           }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                var email = error.email;
                var credential = error.credential;
           
          });
    }
    return (
        <div>
            <Header />
            <h1>name : {loggedInUser.name} </h1>
                <div className='login-section'>
                    <form className='login-form'>
                        <div>
                            <input type="checkbox" name="newUser"/>
                            <label htmlFor="newUser">New User</label>
                        </div>
                            <input className="form-control" type="text" placeholder="Your Full Name"/> <br/>
                            <input className="form-control"  type="text" placeholder="Your Email"/> <br/>
                            <input className="form-control"  type="password" placeholder="Your Password"/>
                            <Link to="/coxhotel">
                            <button className="btn btn-warning login-btn">Login</button>
                            </Link>
                            <div>
                               
                                <button className="btn btn-info sign-in">Continue with Facebook</button>
                                <button onClick={handleGoogleSignIn} className="btn btn-info sign-in" >Continue with Google</button>
                            </div>
                    </form>
                </div>
        </div>
    );
};

export default Login;