import axios from "axios";
import React from "react";

const userLoginList = ()=>{
    const Log = async ({email,password, setLoading, setError}) =>{
        try{
            setLoading(true)
            setError(null)
            const res = await axios.post('https://rgcstreamapp.onrender.com/api/v1/users/login',{
                email: email,
                password: password
            });
            res.json()
            if(res.error){
                setError(res.error)
                setLoading(false)
            }
        }catch(error){
            setLoading(false)
            console.log(error)
            setError('Try Again Later')
        }

    }
    return{
        Log
    }
}

export default userLoginList