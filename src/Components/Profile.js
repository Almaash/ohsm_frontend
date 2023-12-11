import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../Styles/Profile.css"
import logo1 from "../Img/logo.png"
import Stricture from './Stricture'


const Profile = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

    axios
    .get('http://localhost:8005/showdata')
    .then(users=> setUsers(users.data))
    .catch(error=>console.log(error));
    
    },[]);

  return (
    <>
      
       <div className="container-2">

       <div className="row">
        <div className="col-lg-6">

        <img src={logo1} alt="" />

        </div>
        <div className="col-lg-6 right">
            <h1>Profiles</h1>
        
            {
        users.map(user => {

          return <Stricture  first_name={user.first_name} last_name={user.last_name} phone={user.phone} email={user.email} password={user.password} />

            })
            }

        </div>
       </div>

       </div>

    </>
  )
}

export default Profile
