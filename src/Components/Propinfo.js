import React, { useEffect, useState } from 'react'
import "../Styles/Propinfo.css"
import Propstrct from './Propstrct'
import axios from 'axios'


const Propinfo = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

    axios
    .get('http://localhost:8005/showpropertydata')
    .then(users=> setUsers(users.data))
    .catch(error=>console.log(error));
    
    },[]);

    console.log(users)

  return (
    <>


        <div className="container-prop2">
            <div className="container-2">


            <div className="row">
              <div className="col-lg-4">

            <h2>Property <br /> <u>Informantions</u></h2>
              </div>
              <div className="col-lg-8">

              {
        users.map(user => {

          return <Propstrct  Id={user.id} property_type={user.property_type} property_name={user.property_name} phone={user.phone} email={user.email} address={user.address} state={user.state} city={user.city} pin_code={user.pin_code} />

            })
            }


              </div>
            </div>

            </div>
        </div>

        
        


    </>
  )
}

export default Propinfo
