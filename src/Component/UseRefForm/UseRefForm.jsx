import { useEffect, useRef } from "react";


const UseRefForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
             <form onSubmit={handleSubmit} className="text-center">
            <input ref={nameRef} className="border border-black mb-4" type="text" name="name"  /><br></br>
            <input ref={emailRef}  className="border border-black mb-4" type="email" name="email"  /><br></br>
            <input ref={passwordRef}  className="border border-black mb-4" type="password" name="password"  /><br></br>
            <input className="border border-black mb-4"  type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default UseRefForm;