import { useState } from "react";


const StateForm = () => {
    const [name,setName]=useState(null)
    const[email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const[error,setError]=useState('')
    const handleSubmit=e=>{
        e.preventDefault()

        if(password.length<6){
            setError('password must be 6 character longer')
        }
        else{
            setError('')
            console.log(email,name,password)
        }
    }
    const handleEmailChange=e=>{
        setEmail(e.target.value)

    }
    const handleNameChange=e=>{
        setName(e.target.value)

    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="text-center">
            <input onChange={handleNameChange} className="border border-black mb-4" type="text" name="name"  /><br></br>
            <input onChange={handleEmailChange}  className="border border-black mb-4" type="email" name="email"  /><br></br>
            <input onChange={handlePasswordChange}  className="border border-black mb-4" type="password" name="password"  /><br></br>
            <input className="border border-black mb-4"  type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
        </form>
        </div>
    );
};

export default StateForm;