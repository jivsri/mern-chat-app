import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext();

  const signup = async ({ fullName, userName, gender, password, confirmPassword }) => {
    const success = handleInputErrors({ fullName, userName, gender, password, confirmPassword });

    if(!success) return;

    setLoading(true);
    try{
      const res=await fetch("/api/auth/signup",{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({ fullName, userName, gender, password, confirmPassword }),
      });

      const data=await res.json();
      if(!data.success){
        throw new Error(data.message);
      }

      // localstorage
      localStorage.setItem("chat-user",JSON.stringify(data));
      // context
      setAuthUser(data);
    }catch(error){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  };

  return {loading,signup};
}



function handleInputErrors({fullName,userName,gender,password,confirmPassword}){
  if(!fullName || !userName || !password || !confirmPassword || !gender){
    toast.error("Please fill all the fields");
    return false;
  }

  if(password!== confirmPassword){
    toast.error("Passwords do not match");
    return false;
  }

  if(password.length<6){
    toast.error("Password should be of at least 6 characters");
    return false;
  }

  return true;
}