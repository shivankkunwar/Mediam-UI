import React, {useState} from "react";
import OTPInput from "./OTPinput"
import { useEffect } from "react";
const OTPInputGroup = ({setOTPValues}) => {
    
    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    });

   
    const handleInputChange = (inputId, value) => {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [inputId]: value,
      }));

      

    };

    useEffect(()=>{
            setOTPValues(inputValues)

    }, [inputValues])
    
    const handleSubmit = () => {
    
      console.log(inputValues)
    };
    
    
    return (
      <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
        <OTPInput id="input1" nextId="input2" value={inputValues.input1} onValueChange={handleInputChange} handleSubmit={handleSubmit} />
        <OTPInput id="input2" previousId="input1" nextId="input3" value={inputValues.input2} onValueChange={handleInputChange} handleSubmit={handleSubmit} />
        <OTPInput id="input3" previousId="input2" nextId="input4" value={inputValues.input3} onValueChange={handleInputChange} handleSubmit={handleSubmit}/>
        <OTPInput id="input4" previousId="input3"  value={inputValues.input4} onValueChange={handleInputChange} handleSubmit={handleSubmit}/>


    </div>
    )}

    export default OTPInputGroup;