import {applyMiddleware, combineReducers, createStore} from 'redux';
import {useDispatch} from "react-redux";
import {tableReducer} from "./table-reducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    table: tableReducer,
})


export const store = createStore(reducers,applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

type AppDispatchType  = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatchType>()


