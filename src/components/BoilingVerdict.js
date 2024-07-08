import React from 'react';

function BoilingVerdict({celsius}){

    if(celsius>=100){
        return <p>the water would boil.</p>
    }
    return <p>the water would not bil.</p>
};


export default BoilingVerdict;