import React from 'react'

const Propstrct = (props) => {
  return (
    <>
    


        <form>

            {/* <h5>Property no: {props.id}</h5> */}

            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Property Type</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.property_type}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Propery Name</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.property_name}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Phone Number</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.phone}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Email Address</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.email}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Address</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.address}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">State</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.state}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">City</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.city}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Pin Code</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.pin_code}/> <br />
                </div>
            </div>

        </form>



    </>
  )
}

export default Propstrct
