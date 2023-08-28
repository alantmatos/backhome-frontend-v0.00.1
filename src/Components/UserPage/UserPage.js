import React from 'react';
import './index.css';
import { useEffec, useState } from 'react';
import AddPetModal from './AddPetModal';

const UserPage = ({user}) => {

  const [modalState, setModalState ] = useState(false);
  return (
    <>
    <div> USER PAGE !!! </div>

    {
      user ?
      <div>
        {user.name},
        {user.email},
        {user.id}
        {modalState}

        <div>
          <button onClick={()=>{setModalState(!modalState)}}> Add a Pet </button>
        </div>

        {
          modalState ?
          <AddPetModal user={user} modalState={modalState} setModalState={setModalState} ></AddPetModal>
          :
          null
        }





      </div>
      :
      null
    }



    
    
    
    </>
  )
}

export default UserPage