import React from "react";

function UseStateChild({onMessage})
{

    const sendMessage= () => {
        onMessage('hello from child!')
    }

    return(
<button onClick={sendMessage}>send message</button>
    );
}

export default UseStateChild;