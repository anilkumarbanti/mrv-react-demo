import React from "react";

class SetSateChild extends React.Component
{

    sendMessage = ()=>{
        this.props.onMessage("Hello from child");
    }
    render(){
        return(
<button onClick={this.sendMessage} >send message</button>
        );
    }
}

export default SetSateChild