import { put, takeEvery } from "redux-saga/effects"

function* handleSage(action: any){
    console.log(">>> check handleSage: ",action)
}
function* handleIncrease(action: any){
    console.log(">>>check handleSage: ",action);
    yield(3000)
    yield put({
        type:"counter/increaseSagaFinish",
        payload:{value:2}
    })
}
function* handleDecrease(action: any){
    console.log(">>>check handleSage: ",action);
    yield(3000)
    yield put({
        type:"counter/decreaseSagaFinish",
        payload:{value:2}
    })
}
function* counterSaga(){
    yield takeEvery("counter/increaseSagaStart",handleIncrease),
    yield takeEvery("counter/decreaseSagaStart",handleDecrease)
}
export default counterSaga;