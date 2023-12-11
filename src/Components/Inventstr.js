import React from 'react'

const Inventstr = (props) => {
  return (
    <div>
      

      <form>

            {/* <h5>Property no: {props.id}</h5> */}

            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Property Space Name</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.property_space_name}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Propery Inventory Type</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.property_invt_type}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Other Prop Invent Type</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.other_prop_invt_type}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Capacity</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.capacity}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Amenities</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.amenities}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">Availabe Satus</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.availabe_status}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">note</label>
                <div class="col-sm-8">
                <input type="text" readonly class="form-control" id="staticEmail" value={props.note}/>
                </div>
            </div> <br />
            

        </form>



    </div>
  )
}

export default Inventstr
