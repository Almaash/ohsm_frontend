import React, { useState } from 'react'
import "../Styles/Inventory.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



const Inventory = () => {

    const [values,setValues] = useState({
        property_space_name: '',
        property_inventory_type: '',
        other_prop_invt_type: '',
        capacity: '',
        amenities: '',
        available_status: '',
        note: ''
    })

    const Navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8005/saveinventorydata',values)
        .then(res=> {
            console.log(res);
            alert(' inventory data saved successful!')
            Navigate('/inventinfo')
        })
        .catch(error=>console.log(error));
        
    
      }

  return (
    <>
      

      <div className="container-invt">

            <form onSubmit={handleSubmit}>
            <center><h3>Inventory</h3></center>

                <div class="form-group">
                    <label for="exampleInputPassword1">Propery Space Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,property_space_name:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Property Inventory Type</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={e => setValues({...values,property_inventory_type:e.target.value})}>
                    <option>Type A</option>
                    <option>Type B</option>
                    <option>Type C</option>
                    <option>Type D</option>
                    <option>Type E</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Other Property Inventory Type</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,other_prop_invt_type:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Capacity</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,capacity:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Amenities</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,amenities:e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Available Status</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={e => setValues({...values,available_status:e.target.value})}>
                    <option>Active</option>
                    <option>Un-Active</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Note (if any )</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={e => setValues({...values,note:e.target.value})}/>
                </div>

                <br />

                <center><Link to="/property" class="btn btn-outline-success">Cancel</Link></center>
                <center><button type="submit" class="btn btn-success">Save</button></center>
            </form>


        </div>


    </>
  )
}

export default Inventory
