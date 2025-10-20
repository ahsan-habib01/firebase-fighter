import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const forgetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    googleSignIn,
    githubSignIn,
    signOutUser,
    forgetPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
