import { useContext } from "react";
import { userContext } from "../Context/userContext";


export const useAuth = () => {
    const {allUsers,setUsers} = useContext(userContext);
    
    const register=(userData)=>{
        try{
            if(!userData.email || !userData.password || !userData.confirmPassword ||!userData.name ){
                alert("All fields are required");    
            }
            if(userData.password !== userData.confirmPassword){
                alert("Passwords do not match");
            }
            if(allUsers.includes(userData.email)){
                alert("User already exists");
            }

            setUsers([...allUsers, userData]);
        }catch(err){
            console.log(err);
        }

    }
   
    return {register, allUsers};
}