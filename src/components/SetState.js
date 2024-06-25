import React, { Component } from 'react'

 class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    /* 
   don't mutate the state directly, it will not reflect in the template
   inc()
    {
      this.state.count=this.state.count+1
      console.log(this.state.count)
    }*/
/* getting displayed the count value in console before manipulation of count
   inc()
    {
      this.setState({
        count:this.state.count+1
      })
      console.log(this.state.count)}*/

      inc()
      {
        this.setState(
          {
          count:this.state.count+1
        },()=>{
          console.log('callback value',this.state.count)
        })
      console.log(this.state.count)
      }
       /* inc()
      {
        this.setState(
          {
          count:this.state.count+1
        },()=>{
          console.log('callback value',this.state.count)
        })
      console.log(this.state.count)
      }*/

      inc()
      {
        this.setState((prevState)=>({
count:prevState.count+1
        }),
        ()=>{
          console.log('callback value',this.state.count)
        } 
        )
        console.log(this.state.count)
      }

      display()
      {            //0
        this.inc(); //1
        this.inc(); //2
      
        
      }

  render() {
    return (
      <div>
<div> Count: {this.state.count}</div>
<button onClick={()=>this.display()}>increment</button>
      </div>
    )
  }
}

export default SetState;