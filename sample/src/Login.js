import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/register")

    }
    return(
    
    <div>
    <h1>Login</h1>
    <button onClick={handleSubmit}>Register</button>
    </div>
    
    )
}