import React from 'react'

const Stricture = (props) => {
  return (
    <>
      
      
      <div class="card">
            <div class="card-body">
                
            <form>
            <div class="row">
                <div class="col">
                    <label htmlFor="">First Name</label>
                <input type="text" class="form-control" value={props.first_name} readOnly/>
                </div>
                <div class="col">
                    <label htmlFor="">Last Name</label>
                <input type="text" class="form-control" value={props.last_name} readOnly/>
                </div>
            </div>
            <br />
            <div class="form-row">
                <div class="col-4">
                    <label htmlFor="">Phone</label>
                <input type="number" class="form-control" value={props.phone} readOnly/>
                </div>
                <div class="col">
                    <label htmlFor="">Email</label>
                <input type="text" class="form-control" value={props.email} readOnly/>
                </div>
                <div class="col">
                    <label htmlFor="">Password</label>
                <input type="text" class="form-control" value={props.password} readOnly/>
            </div>
            </div>
            </form>
            </div>
        </div>

    </>
  )
}

export default Stricture
