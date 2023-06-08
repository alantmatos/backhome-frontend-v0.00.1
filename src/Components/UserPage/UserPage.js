import React from 'react';
import './index.css';

const UserPage = ({user}) => {
  return (
    <>
    <div>UserPage</div>

    {
      user ?
      <div>
        {user.name}

      </div>
      :
      null
    }
    
    
    
    </>
  )
}

export default UserPage