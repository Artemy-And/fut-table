import {defArr} from "../Array";


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_INPUT = "SET_INPUT"
export const SET_MODAL_IS_OPEN = "SET_MODAL_IS_OPEN"



export type initialStateType = {
    modalIsOpen:boolean
    input:string
    newArr2:Array<defArrType>
}
export type defArrType = {
    "id": number,
    "name": string,
    "sites": number,
    "type": string,
    "status": string
}

let initialState = {
    newArr2:defArr,
    modalIsOpen:false,
    input: "",

}


export function tableReducer(state: initialStateType = initialState, action: allACTypes) {
    switch (action.type) {
        case SET_NEW_ARR:
            return {...state, newArr2: action.defArr}
        case SET_INPUT:
        return {...state,input:action.value}
        case SET_MODAL_IS_OPEN:
        return {...state,modalIsOpen: action.value}
        default:
            return state
    }
}

export const setNewArrAC = (defArr:Array<defArrType>): setNewArrACType => ({type: SET_NEW_ARR,defArr})
export const setInputAC = (value:string): setInputACType => ({type: SET_INPUT,value})
export const setModalIsOpenAC = (value:boolean): setModalIsOpenACType => ({type: SET_MODAL_IS_OPEN,value})



type setNewArrACType = {
    type: typeof SET_NEW_ARR
    defArr:Array<defArrType>
}
type setInputACType = {
    type: typeof SET_INPUT
    value:string
}
type setModalIsOpenACType = {
    type: typeof SET_MODAL_IS_OPEN
    value:boolean
}
type allACTypes =
    | setNewArrACType
|setInputACType
|setModalIsOpenACType











