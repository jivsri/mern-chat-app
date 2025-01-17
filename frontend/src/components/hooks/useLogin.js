import { useState } from "react";
import {useAuthContext} from "../../context/AuthContext";
import toast from "react-hot-toast";

export const useLogin=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    const login=async(username,password)=>{
        setLoading(true);
        try {
            const res=await fetch("/api/auth/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({userName: username,password}),
            });

            const data=await res.json();
            if(!data.success){
                throw new Error(data.message);
            }

            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    };
    return {loading,login};
}