import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) =>{
    if(!localStorage.getItem('user_id')){
        console.log(1)
        return <Navigate to="/SignIn" />
    }
    return children;
}