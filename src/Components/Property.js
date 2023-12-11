import React, { useState } from 'react'
import "../Styles/Property.css"
import logo from "../Img/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Property = () => {

    const [values,setValues] = useState({
        property_type: '',
        property_name: '',
        phone: '',
        email: '',
        address: '',
        state: '',
        city: '',
        pin_code: '',
    })

    const Navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8005/savepropertydata',values)
        .then(res=> {
            console.log(res);
            alert('property data saved successful!')
            Navigate('/propinfo')
        })
        .catch(error=>console.log(error));
        
    
      }




  return (
    <>


            <div className="container-prop1">

            <form  onSubmit={handleSubmit}>
            <center><img src={logo} alt="" /></center>
            <center><h3>Property Setup</h3></center>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Property Type</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={e => setValues({...values,property_type:e.target.value})}>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                    <option>Type 5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Property Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,property_name:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,phone:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,email:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,address:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">State</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={e => setValues({...values,state:e.target.value})}>
                    <option>Delhi</option>
                    <option>Utter prdesh</option>
                    <option>Punjab</option>
                    <option>Jharkhand</option>
                    <option>Kolkata</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">City</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={e => setValues({...values,city:e.target.value})}>
                    <option>Noida</option>
                    <option>gurgao</option>
                    <option>Chattisgard</option>
                    <option>New Delhi</option>
                    <option>Gaziabaad</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Pin Code</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,pin_code:e.target.value})}/>
                </div>

                <br />

                <center><Link  to="/inventory" class="btn btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg> Add Inventory</Link></center>
                <center><button type="submit" class="btn btn-success">Complete your setup</button></center>
            </form>


            </div>

    </>
  )
}

export default Property
