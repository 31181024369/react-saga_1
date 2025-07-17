import { all } from "redux-saga/effects";
import counterSaga from "./counter.saga";
import userSage from "./user.saga";

function* RootSage(){
    console.log(">>> i'm root saga")
    yield all([
        counterSaga(),
        userSage(),
    ])
}
export default RootSage;