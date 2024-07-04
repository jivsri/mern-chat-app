import { useEffect, useState } from "react";

export const useGetConversations=()=>{
    const [loading,setLoading]=useState(false);
    const [conversations,setConversations]=useState([]);
    
    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            try {
                const res=await fetch("/api/users");
                const data=await res.json();
                console.log("server: ",data);
                if(!data.success){
                    throw new Error(data.message);
                }

                setConversations(data);

            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

        getConversations();
    },[]);

    return {loading,conversations};

}