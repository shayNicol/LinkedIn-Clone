import React, {useState,setState} from 'react';
import './SignIn.css'


function SignIn() {
  
    const [password,setPassword] = useState(null);
    const [email, setEmail] = useState(null);
   
 

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "password"){
            setPassword(value);
        }
        if(id === "email"){
            setEmail(value);
        }
       

    }

    const handleSubmit  = () => {
        console.log(email,password);
    }

    return(
        <div className="form">
            <div className="body">
                <div className="email">
                    <label className="mail" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter Email"/>
                </div>
                <div className="password">
                    <label className="label" for="password">Password </label>
                    <input className="input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Enter Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Sign In</button>
            </div>
        </div>
       
    )       
}
export default SignIn;