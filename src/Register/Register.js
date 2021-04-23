import { useState } from "react";
import ApiService from "../ApiService/ApiService";


function Register(){

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pwd, setPassword] = useState("");
    const [email, setEmail] = useState("");
    

    function postRecord(e){
       e.preventDefault();
        ApiService.addUserDetail({
            name,
            id,
            pwd,
            email
        })
        .then(res => {
            alert("Register Successfully");
        })
        .catch(err => console.log("Register Invalid"));
    }

    function clearReset (){
           setName("");
           setId("");
           setPassword("");
           setEmail("");
    }
   
    return (
        
        <div className = "log">
        <form>
            <label>User Name: </label>
            <input type="text" id="name" placeholder = "Enter Your Username" value={name} onChange={event => {setName(event.target.value)}}/><br/><br/>
            <label>User ID : </label>
            <input type="text" id="id" placeholder = "Enter Your User ID" value={id} onChange={event => {setId(event.target.value)}}/><br/><br/>
            <label>Password : </label>
            <input type="text" id="pwd" placeholder = "Enter Your Password" value={pwd} onChange={event => {setPassword(event.target.value)}}/><br/><br/>
            <label>Email : </label>
            <input type="text" id="email" placeholder = "Enter Your Password" value={email} onChange={event => {setEmail(event.target.value)}}/><br/><br/>
            <button onClick={postRecord}>Register</button>
            <button onClick={clearReset}>Reset</button>
        </form>
    </div>
    )
}

export default Register;