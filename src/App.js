// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Switch} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Login2 from './components/Login2';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import Preauth from './components/Preauth';


function App() {
  return (
   <>
   <Navbar />
   <Switch>
   <Route exact path="/">
   <Home />
   </Route>


   <Route path="/preauth">
   <Preauth />
   </Route>


   <Route path="/about">
   <About />
   </Route>

   <Route path="/contact">
   <Contact />
   </Route>

   <Route path="/login">
   {/* <Login /> */}
   <Login2 />
   </Route>


   <Route path="/registration">
   <Signup />
   </Route>
   </Switch>
   </>
  );
}

export default App;
