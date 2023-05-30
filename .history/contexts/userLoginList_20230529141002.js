import axios from "axios";
import React from "react";

const userLoginList = ()=>{
    const Log = async ({email,password, setLoading}) =>{
        try{
            setLoading(true)
            const res = await axios.post('https://rgcstreamapp.onrender.com/api/v1/users/login',{
                email: email,
                password: password
            });
            if(res){
                setLoading(false)
            }
        }catch(error){
            setLoading(false)
            console.log(error)
        }

    }
    return{
        Log
    }
}

export default userLoginList