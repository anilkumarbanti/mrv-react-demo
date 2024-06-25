import React from "react";
import ChildComponent from "../ChildComponent";

class SetSatetParent extends React.Component
{
   constructor(props){
    super(props)
    this.state={
        message:" "
    };
   }

    handleMessage=(msg)=>{
        this.setState({message:msg})

    }

    render(){
        return(
            <div>
                <ChildComponent onMessage={this.handleMessage}/>
                <p>Message from child: {this.state.message}</p>
            </div>

        );
    }
}

export default SetSatetParent;