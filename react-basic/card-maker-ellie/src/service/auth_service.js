import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    firebaseAuth.signInWithPopup(authProvider);
  }
  logout() {
    firebaseAuth.signOut();
  }
  onAuthStatus(stateChanged) {
    firebaseAuth.onAuthStateChanged(stateChanged);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
