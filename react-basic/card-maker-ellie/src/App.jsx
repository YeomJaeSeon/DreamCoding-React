import './App.css';
import Login from './pages/Login/Login';

function App({ authService }) {
  return (
    <>
      <Login authService={authService} />
    </>
  );
}
export default App;
