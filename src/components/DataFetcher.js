import React, {useState, useEffect} from 'react';


function DataFetcher()
{

    const[loading,setLoading]=useState(true);
    const[data,setData]= useState(null);


    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
            setLoading(false);
        })

    },[] );


    if(loading)
        {
            return <div>Loading..... </div>
        }
return(

    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>



);





};

export default DataFetcher;