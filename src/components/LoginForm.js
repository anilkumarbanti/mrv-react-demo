import React,{useState} from 'react'

function LoginForm()
{
 
    const[loggedIn,setLoggedIn]= useState(false);
    const [formData, setFormData]= useState({username:'',password:''});

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value
    });
  };

  const handleSubmit=(e)=>{

    e.preventDefault();
    if(formData.username==='anil' && formData.password==='anil123@')
        {
            setLoggedIn(true);
        }
        
    else
    {
        alert('enter valid credentials');
    }
  };

if(loggedIn){
    return <h1> Welcome, {formData.username}!</h1>
}

return(

<form onSubmit={handleSubmit}>
      <div>
        <label>UserName:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>

)


};

export default LoginForm;