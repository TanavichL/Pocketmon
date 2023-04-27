import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) =>{
    if(!localStorage.getItem('user_id')){
        return <Navigate to="/signin" />
    }
    return children;
}