import React, {Component} from "react";

class LifeCycleDemoClassComp extends Component
{
    //mount phase lifecylce methods
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
        console.log('Constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState)
    {
        console.log('getDerivedStateFromProps');
        return null; //No state update needed
    }

    componentDidMount()
    {
        console.log('componentDidMount');
    }

    //update phase lifecylce methods

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('shouldComponentUpdate');
        return true; //allows re-render
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('getSnapshotBeforeUpdate');
        return null; //no snapshot value needed
    }

    componentDidUpdate(prevProps,prevState)
    {
        console.log('componentDidUpdate');
    }
    
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }
    render(){
        console.log('render')
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={
                    ()=>this.setState(
                        {count:this.state.count+1})
                        }>
                    Increment
                </button>
            </div>

        );
    }

}

export default LifeCycleDemoClassComp;