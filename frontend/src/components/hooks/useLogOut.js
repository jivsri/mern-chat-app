import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext";

export const useLogOut=()=>{
    const  [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    const logout=async()=>{
        setLoading(true);
        try {
            const res=await fetch("/api/auth/logout",{
                method: "GET",
            });

            const data=await res.json();

            if(!data.success){
                throw new Error(data.message);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    };

    return {loading,logout};
}

