import SensitiveInfo from 'react-native-sensitive-info';
const url = 'https://rgcstreamapp.onrender.com/api/v1';

export const fetchPost = async(api, body)=>{
    const res = await fetch(url+api,{
        method: "POST",
        headers:{
            "Content-Type":'application/json',
            "Authorization":"Bearer "+await SensitiveInfo.getItem('token')
        },
        body:JSON.stringify(body)
    })
    
    return await res.json()
}

export const fetchGet = async(api)=>{
    const res = await fetch(url+api,{
        method: "GET",
        headers:{
            "Content-Type":'application/json',
            "Authorization":"Bearer "+await SensitiveInfo.getItem('token')
        }
    })
    
    return await res.json()
}