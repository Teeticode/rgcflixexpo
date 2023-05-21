import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPost } from "../helpers";
import SensitiveInfo from "react-native-sensitive-info";

const initialState = {
    token:'',
    loading:false,
    error:'',
    user:{},
    message:'',
    success:false
}
export const registerUser = createAsyncThunk(
    'registerUser',
    async (body)=>{
        const result = await fetchPost('users/register', body);
        return result;
    }
)
export const loginUser = createAsyncThunk(
    'loginUser',
    async (body)=>{
        const result = await fetchPost('users/login', body);
        return result;
    }
)
export const checkMail = createAsyncThunk(
    'checkMail',
    async (body)=>{
        const result = await fetchPost('checkmail', body);
        return result;
    }
)

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state, action)=>{
            state.token = null;
            SensitiveInfo.deleteItem('token');
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.fulfilled, (state, {payload:{error, message}})=>{
            state.loading = false;
            if(error){
                state.message = ''
                state.error = error;
            }else{
                state.error = '';
                state.message = message;
            }
        })
        .addCase(registerUser.pending, (state,action)=>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, {payload:{error, user}})=>{
            state.loading = false;
            if(error){
                state.user = null;
                state.error = error;
                state.token = null;
            }else{
                state.error = null;
                state.user = user
                state.token = user.token;
                SensitiveInfo.setItem('token', user.token);
            }
        })
        .addCase(loginUser.pending, (state,action)=>{
            state.loading = true;
        })
        .addCase(checkMail.fulfilled, (state,{payload:{error,success, message}})=>{
            state.loading = false;
            if(success === true){
                state.success = success;
                state.error = null;
            }else{
                state.success = null;
                state.error = error;
            }
        })
        .addCase(checkMail.pending, (state, action)=>{
            state.loading = true;
        })
    }
})

export const {logout} = AuthSlice.actions;
export default AuthSlice.reducer;