import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Inventstr from './Inventstr';


const Inventinfo = () => {
 
    const [users,setUsers] = useState([]);

    useEffect(()=>{

    axios
    .get('http://localhost:8005/showinventorydata')
    .then(users=> setUsers(users.data))
    .catch(error=>console.log(error));

    },[]);

    // console.log(users)

return (
<>


    <div className="container-prop2">
        <div className="container-2">


        <div className="row">
          <div className="col-lg-4">
            
        <h2>Inventory <br /> Informantions</h2>
          </div>
          <div className="col-lg-8">

          {
    users.map(user => {

      return <Inventstr  property_space_name={user.property_space_name} property_invt_type={user.property_invt_type} other_prop_invt_type={user.other_prop_invt_type} capacity={user.capacity} amenities={user.amenities} availabe_status={user.availabe_status} note={user.note} />

        })
        }


          </div>
        </div>

        </div>
    </div>

    </>
  )
}

export default Inventinfo
