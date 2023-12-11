import React, { useState } from 'react'
import "../Styles/Register.css"
import logo from "../Img/logo.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [values,setValues] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: ''
    })

    const Navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8005/savedata',values)
        .then(res=> {
            console.log(res);
            alert('Profile Registered Successful!')
            Navigate('/profile')
        })
        .catch(error=>console.log(error));
        
    
      }


  return (
    <>
      

        <div className="container-1">
            <div className="container">
                <center><img src={logo} alt="" /></center>
                <center><h3>Creat an account</h3></center>

            <form  onSubmit={handleSubmit}>
            <div class="row">
                <div class="col">
                    <label for="exampleInputPassword1">First Name</label>
                <input type="text" class="form-control" placeholder="first name" onChange={e => setValues({...values,first_name:e.target.value})}/>
                </div>
                <div class="col">
                    <label for="exampleInputPassword1">Last Name</label>
                <input type="text" class="form-control" placeholder="last name" onChange={e => setValues({...values,last_name:e.target.value})}/>
                </div>
                </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Phone</label>
                <input type="number" class="form-control" placeholder="phone" onChange={e => setValues({...values,phone:e.target.value})}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="email" onChange={e => setValues({...values,email:e.target.value})}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" onChange={e => setValues({...values,password:e.target.value})}/>
            </div>
            
            <center><button type="submit" class="btn">Sing up</button></center>
            </form>

            </div>
        </div>

    </>
  )
}

export default Register
