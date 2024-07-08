import React from "react";

function TemperatureInput({scale, temperature, onTemperatureChange}){

const scaleNames={
    c:'celsisus',
    f:'Fahrenheit'
};
const handleChange=(e)=>{
 onTemperatureChange(e.target.value);
};

return(
<fieldset>
<legend>enter temperature in {scaleNames[scale]}:</legend>
<input value={temperature} onChange={handleChange}/>
</fieldset>
);

}

export default TemperatureInput;