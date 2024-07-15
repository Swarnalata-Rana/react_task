'use client'
import React, { useState } from 'react'

const Toggle_Button = () => {
    // React to create a state variable 'toggle'(nitial value) and a 'setToggle'(update value) function to update it.
    const [toggle, setToggle] = useState('On');

    //This line defines a function handleToggleClick that will be called when the toggle button is clicked.
    const handleToggleClick = () => {
        if (toggle == 'Off'){
            setToggle("On")
        }
        else{
            setToggle("Off")
        }
    }

    return (
        <>
            <div style={{textAlign:'center',justifyContent:'center',marginTop:'340px', background:'pink', border:'solid 2px black',margin:'auto',width:'700px'}}>
                <h1>Toggle_Button</h1>
                {/* <button style={{marginTop:'50px'}} onClick={handleToggleClick}>{toggle ? 'On' : 'Off'}</button> */}
                <button style={{marginTop:'50px',fontSize:'40px'}} onClick={handleToggleClick}>{toggle}</button> 
            </div>
        </>
    )
}
export default Toggle_Button;

