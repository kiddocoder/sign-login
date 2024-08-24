import axios from "axios";
import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const registerRoute = `http://localhost/api/auth/register`;

const Login = () =>{

      const toastOptions = {
            position: "bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          };

          const [values, setValues] = useState({ username: "", password: "" });
          const handleInput = (e) =>{
                setValues({...values,[e.target.name]: e.target.value});
          }
    
          const handleSubmit = async (event) => {
            event.preventDefault();
            toast.success("Data submited successflly",toastOptions)
            const { username, password } = values;
            const { data } = await axios.post(registerRoute, {
              username,
              password,
            });
          }

      return(
             <div className="container w-[45px] h-[45px]">
                  <form
                   className="w-full h-full m-2"
                   onSubmit={(e) => {handleSubmit(e)}}>
                        <div className="input_box">
                           <label
                           htmlFor="email"></label>
                           <input 
                            type="text"
                            name="username"
                            placeholder="Email or Username" 
                            onChange={(e) => { handleInput(e) }}
                            />
                        </div>

                       <div className="input_box">
                             <label htmlFor="password"></label>
                             <input
                               type="password"
                               name="password"
                               placeholder="Password"
                               onChange={(e) => { handleInput(e) }}
                               />
                        </div>

                        <input className="bg-black" type="submit" value="Login"/>
                        <ToastContainer />
                  </form>
             </div>
      )  
}

export default Login;