import {createSlice} from '@reduxjs/toolkit'

let token;
let email;
if(!localStorage.getItem('token') && !localStorage.getItem('email')){
     localStorage.setItem('token', '');
     localStorage.setItem('email', '');
}else{
    token = localStorage.getItem('token');
    email = localStorage.getItem('email');
}

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        token:token,
        email:email,
        isLoggedIn: !!token
    },
    reducers:{
        login:(state, action)=>{
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('email',action.payload.email);
            console.log(state.email);
            console.log(state.token);
        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.email = '';
            state.token = '';
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        }
    }
})

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;