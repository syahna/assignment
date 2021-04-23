import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Login from './Login/Login';
import Register from './Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className = "contain">
        <div className = "direct-nav">
            <NavBar/>
        </div>

        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/login" component ={Login}/>
            <Route path = "/register" component ={Register}/>
        </Switch>
    </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
