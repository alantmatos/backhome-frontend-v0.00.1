import React from 'react';
import { useEffec, useState } from 'react';

const AddPetModal = ({user, modalState, setModalState}) => {

  const [petName, setPetName ] = useState('');



  return (

    
    <div  className='addNewPet-container'>
    <div>
    <form>
          <div>
            <label>Name:</label><br></br>
            <input type='text'></input>
          </div>
          <div>
            <label>Breed</label><br></br>
            <input type='text'></input>
          </div>
          <div>
            <label>Color</label><br></br>
            <input type='text'></input>
          </div>
          <div>
            <label>Image:</label><br></br>
            <input type='text'></input>
          </div>
          <div>
            <label>Favorite Food:</label><br></br>
            <input type='text'></input>
          </div>
          <div>
            <label>Medical conditions</label><br></br>
            <input type='text-area'></input>
          </div>
          <div className='btn-container'> <br></br>
          <button className='signup-btn' onClick={()=>{setModalState(!modalState)}}>Add New Pet</button>
        </div>
        </form>
    </div>
  </div>
  
  )
}

export default AddPetModal