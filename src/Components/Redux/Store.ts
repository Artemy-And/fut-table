import {combineReducers, createStore} from 'redux';
import {useDispatch} from "react-redux";
import {tableReducer} from "./table-reducer";

const rootReducer = combineReducers({
    table: tableReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

type AppDispatchType  = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatchType>()
