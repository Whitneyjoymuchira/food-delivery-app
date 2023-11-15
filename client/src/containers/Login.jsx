import { logoBg } from "../assets"

const Login = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex" >
      <img 
      className="w-full h-full object-cover top-0 left-0 absolute"
      src={logoBg} 
      alt="our iconic packaging" />
    </div>
  )
}

export default Login
