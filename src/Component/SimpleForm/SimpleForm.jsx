
const SimpleForm = () => {
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }
    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input className="border border-black mb-4" type="text" name="name"  /><br></br>
            <input  className="border border-black mb-4" type="email" name="email"  /><br></br>
            <input  className="border border-black mb-4" type="password" name="password"  /><br></br>
            <input className="border border-black mb-4"  type="submit" value="Submit" />
        </form>
    );
};

export default SimpleForm;