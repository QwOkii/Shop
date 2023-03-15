import { PayloadAction } from '@reduxjs/toolkit';
import { createReducer,createAction,createAsyncThunk } from '@reduxjs/toolkit';
import { Authme } from '../../API/api';

interface ItinialStateAuth {
    fullName:string,
    email:string,
    id:number,
    isAuth:boolean
}
const InitialState:ItinialStateAuth={
    fullName:'',
    email:'',
    id:0,
    isAuth:false
}

interface UserData{
    fullName:string,
    email:string,
    id:number,
}

interface AwaitUserData{
    fullName:string, 
    email:string, 
    password:string,
    role:string 
}

export const SingUp = createAsyncThunk<unknown,AwaitUserData>('SING-UP-USER',async (value,{dispatch})=>{
    const fetch = new Authme().SignUp({...value,role:''})
})

export const Login = createAsyncThunk<unknown,AwaitUserData>('LOGIN-USER',async (value,{dispatch})=>{

})

export const setData =createAction<UserData>('TYPE-SET-DATA')

export const Auth = createReducer(InitialState,{
    [setData.type]:(state,action:PayloadAction<UserData>)=>{
        const payload = action.payload
        return{ 
            ...state,
            payload
        }
    }
})

