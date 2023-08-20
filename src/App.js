// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState('light'); // wether mode is dard or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  // const modeGreen =() =>{
  //   setmode("success");
  //   document.body.style.backgroundColor = "#E8FFCE"
  // }

  // const modeBlue =() =>{
  //   setmode("primary");
  //   document.body.style.backgroundColor = "#E6FFFD"
  // }
  
  // const modeRed =()=>{
  //   setmode("danger");
  //   document.body.style.backgroundColor = "#FFEADD";
  // }

  // const modeDark = () =>{
  //   setmode('dark');
  //     document.body.style.backgroundColor =  "#181818";
  // }

  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = "#181818";
      showAlert("Mode is changed to dark",'success');
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Mode is changed to Light",'success');
    }
  }

  return (
    <>
    <Navbar title="TexTify" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container p-2">
      <TextForm heading="Enter the text" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </div>
    </>
  );
}



export default App; 
//props will always we read only 
//Proptype can be used to insure that the passed props is of a fixed data type.


//link:


 