import React, { useState } from 'react'
import Navbar from './Navbar';

export default function About() {
    let [myStyle,SetMyStyle] = useState( {}); 

    const [buttonData,setButtonData] = useState("Light Mode");

    const toggleStyle = () =>
    {
        if(myStyle.color === "white")
        {
        SetMyStyle({
            color:"black",
            padding: "20px",
            backgroundColor: "white"
})
        }
    
    else{
        SetMyStyle({
            color: "white",
            backgroundColor: "#03001C",
            padding: "20px",
        })
    }
    const message =  buttonData === "Dark Mode" ? "Light Mode" : "Dark Mode";
    setButtonData(message);

    }

  return (
    <div >
    <Navbar title="TexTify"/>
    <div  style={myStyle} className='container p-3 mt-3' >
      <h1 className='m-3'>About Us: TexTify - Transforming Your Text Experience</h1>
      <p className='m-4'>Welcome to TexTify, your ultimate destination for enhancing and manipulating text in a multitude of ways. Our web application is designed to empower you with the tools you need to make your text truly stand out, offering a range of features that go beyond the ordinary. Whether you're a writer, student, designer, or just someone who loves playing with words, TexTify is here to elevate your text experience.</p>
<button type='button' onClick={toggleStyle} className='btn btn-primary m-5'>{buttonData}</button>
    </div>
    </div>
  )
}
