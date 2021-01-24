import firebaseApp from './firebase';
import firebase from 'firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebaseApp.auth().signOut();
  }
  onAuthStatus(stateChanged) {
    firebaseApp.auth().onAuthStateChanged(stateChanged);
  }
}

export default AuthService;
