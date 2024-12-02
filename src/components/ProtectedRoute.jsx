import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { API } from "../const";
import Loader from "./loader/loader";

export default function ProtectedRoute(){
    const [isAuthorized, setIsAuthorized] = useState(null);
    const token = useSelector(state => state.token.token);

    useEffect(() =>{
        const verifyToken = async () => {
            if(!token){
                setIsAuthorized(false);
                return;
            }

            try {
                await axios.post(API.PROTECTED_ROUTE,{}, {
                    headers:{
                        'accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
                setIsAuthorized(true)
            } catch (error) {
                console.error("Authorization error:", error);
                setIsAuthorized(false);
            }
        }

        verifyToken();
    }, [token])

    if (isAuthorized === null) {
        return <Loader />
    }   

    return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
}