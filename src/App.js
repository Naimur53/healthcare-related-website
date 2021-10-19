import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainNav from './components/MainNav/MainNav';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <MainNav></MainNav>
      <Home></Home>
      <SignUp></SignUp>
      <Login></Login>
    </div>
  );
}

export default App;
