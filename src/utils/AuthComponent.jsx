import { Navigate } from "react-router-dom";
const AuthComponent=((Children)=>{
    let istoken=JSON.parse(localStorage.getItem('token'))
    if(istoken){
        return <>{Children}</>
    }else{
        return <Navigate to='/login' replace/>
    }
})
export default AuthComponent