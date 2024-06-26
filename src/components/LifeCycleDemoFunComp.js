import React,{Component, useEffect, useState} from "react";

 const LifeCycleDemoFunComp= () =>{

    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{
        console.log('ComponentWillUnmount');
        };


    },[]);

    useEffect(()=>{
        console.log('componentDidUpdate');
    }

    );

    console.log('render')

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>

    );

};

export default LifeCycleDemoFunComp;