import { useState } from "react";
import ApiService from "../ApiService/ApiService";

function Login() {

    const [pwd, setPwd] = useState("");
    const [id, setId] = useState("");
    const [log, setLogin] = useState("");
    const [logFail, setUnsussesful] = useState ("");
    

    function getLogin() {
        ApiService.fetchUserById(id)
        .then(response => response.JSON())
        .then((data) => {
            if(pwd === data.pwd){
                setLogin(true);
                setUnsussesful(false);
            }else{
                setLogin(false);
                setUnsussesful(true);
            }
        })
    }

    return(
        <div className = "log">
            <form>
                <label>User ID : </label>
                <input type="text" id="id" placeholder = "Enter User ID" value={id} onChange = {event => setId(event.target.value)}/><br/><br/>
                <label>Password : </label>
                <input type="text" id="pwd" placeholder = "Enter Your Password" value= {pwd} onChange = {event => setPwd(event.target.value)}/><br/><br/>
                <button onClick={getLogin}>Login</button>
            </form>
            { log && <h1> Login Success </h1> }
            { logFail && <h1> Login Unsussesful </h1> }
        </div>
    )
}

export default Login;