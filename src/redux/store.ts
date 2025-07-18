import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./counter/counter.slide"
import createSagaMiddleware from "redux-saga"
import RootSage from "../saga/root.saga";
import userReducer from "./user/user.slide";


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user:userReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(RootSage);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
