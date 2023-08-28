import React from 'react';
import './index.css';
import home from '../Assets/home.jpg'

const Home = () => {
    return (
<div className='general-container'>
<div className='home-container'>

{/* <div className='quote'>
    <p className='text'>
        The Humane Society of the United States reports that
        10 million dogs and cats go missing each year. One
        in three pets will become lost at some point in
        their life. Those are scary statistics.
        <br></br>
        LET'S CHANGE IT!!!
    </p>
</div> */}

<div className='left'>
    <p>The Humane Society of the United States reports that 10 million dogs and cats go missing each year.LET'S CHANGE IT!</p>

</div>


<div className='right'>
    <img className='home-dog' src={home} alt='happy dog background'></img>

</div>


</div>
</div>
    )
}

export default Home