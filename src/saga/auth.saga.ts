import { call, fork, take } from "redux-saga/effects";
import { loginPending, logout } from "../redux/user/user.slide";
import { ILogin } from "../types/backend";
import { PayloadAction } from "@reduxjs/toolkit";

const authorize=(email:string,password:string)=>{
    return new Promise((resolve,reject)=>{
        if(email==="hoidanit@gmail.com" && password==="123456"){
            localStorage.setItem("access_token","hoidanit");
            resolve("ok");
        }
        resolve("no thing");
    })
}
function* authSaga(){
    while(true){
        const action:PayloadAction<ILogin>=yield take(loginPending);
        yield take(loginPending);
        yield fork(authorize,action.payload.email,action.payload.password);
        yield take([logout,'LOGIN_ERROR'])


    }
}
export default authSaga