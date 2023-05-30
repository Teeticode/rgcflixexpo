import axios from "axios";
import React from "react";

const userLoginList = ({email,password, setLoading})=>{
    const Log = async () =>{
        setLoading(true)
        const res = await axios.post('https://rgcstreamapp.onrender.com/api/v1/users/login',{
            email: email,
            password: password
        });
        if(res){
            setLoading(false)
        }

    }
    return{
        Log
    }
}