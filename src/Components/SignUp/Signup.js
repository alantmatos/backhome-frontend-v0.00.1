import React, { useState } from 'react';
import './index.css';


const Signup = () => {

  let [modalDisplay, setModalDisplay] = useState(false);



  return (
    <div className='signup-container'>


      <div className='left'>
        <div className='signup-tittle'>
          <h3>Yay, lets create an account!</h3> <br></br>

          <h5>
            You made the right choice. <br>
            </br>Our goal is too make your pet safer, and we truly hope you will never have your pet lost,
            but in case you do, be sure we will always be working on ways to improve its chances to get back to you.
          </h5>
        </div>

      </div>

      {!modalDisplay ?
        <div className='right'>
          <form>
            <div>
              <label>Name:</label><br></br>
              <input type='text'></input>
            </div>

            <div>
              <label>Email:</label><br></br>
              <input type='text'></input>
            </div>

            <div>
              <label>Password:</label><br></br>
              <input type='text'></input>
            </div>

            <div className='btn-container'> <br></br>
              <button className='signup-btn' onClick={() => setModalDisplay(!modalDisplay)}>Sign Up</button>
            </div>
          </form>
        </div>
        : null}



      {modalDisplay ?
        <div className='modal-card'>
          <form>
            <div>
              <label>Enter the PIN sent to your Email:</label><br></br>
              <input type='number'></input>
            </div>

            <div className='btn-container'>
              <button type=''> Sign Up</button>
            </div>
          </form>
        </div>
        : null}
    </div>
  )
}

export default Signup