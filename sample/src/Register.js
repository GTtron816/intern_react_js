import { useNavigate,Link } from "react-router-dom"

export default function Register(){
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/login")

    }
    return(
    
    <div>
    <h1>Register</h1>
    <button onClick={handleSubmit}>Login</button>
    <Link to={"/login"}>
               login
              </Link>
    </div>
    
    )
}