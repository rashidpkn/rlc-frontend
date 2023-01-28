import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:'',
    password:'',
    email:'',
    token:sessionStorage.token,
    role:sessionStorage.role
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUsername(state,{payload}){state.username=payload},
    setPassword(state,{payload}){state.password=payload},
    setEmail(state,{payload}){state.email = payload},
    setToken(state,{payload}){
        state.token = payload;
        sessionStorage.setItem("token", payload);
    },
    setRole(state,{payload}){
        state.role = payload;
        sessionStorage.setItem("role", payload);
    }
  }
});

export const {setEmail,setPassword,setUsername,setToken,setRole} = userSlice.actions

export default userSlice.reducer