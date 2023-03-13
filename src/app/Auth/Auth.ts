import { PayloadAction } from '@reduxjs/toolkit';
import { createReducer,createAction,createAsyncThunk } from '@reduxjs/toolkit';

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

export const Type_SetData= 'TYPE-SET-DATA'

export const setData =createAction<UserData>(Type_SetData)

export const Auth = createReducer(InitialState,{
    [setData.type]:(state,action:PayloadAction<UserData>)=>{
        const payload = action.payload
        return{ 
            ...state,
            payload
        }
    }
})

