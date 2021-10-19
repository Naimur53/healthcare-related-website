import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CardDetails from './components/CardDetails/CardDetails';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainNav from './components/MainNav/MainNav';
import PrivateRoute from './components/MainNav/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MainNav></MainNav>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/aboutUs'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/contactUs'>
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute path='/home/:Id'>
              <CardDetails></CardDetails>
            </PrivateRoute>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
