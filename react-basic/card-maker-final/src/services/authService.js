import {firebaseAuth, googleProvider} from './firebase'

export default class AuthService{
  login(){
    firebaseAuth.signInWithPopup(googleProvider)
  }
  logout(){
    firebaseAuth.signOut();
  }
  authStatus(callback){
    firebaseAuth.onAuthStateChanged(callback)
  }
}