import {Dispatch} from "redux";
import {infoAPI} from "../Api/api";


export type ListOfContactsType = 0 | 1 | 2

let initialState = {
    array: [] as Array<InformResponseType> | [],
    modalIsOpenForList: true,
    modalIsOpenForError: false,
    input: "",
    currentPage: 1,
    postPerPage: 10,
    listOfContacts: 0 as ListOfContactsType,
    modalForNewContact: false,
    contact: {} as InformResponseType,
    preloader: true
}


export function tableReducer(state: InitialStateType = initialState, action: AllACTypes) {
    switch (action.type) {
        case SET_NEW_ARR:
            return {...state, array: action.array}
        case SET_INPUT:
            return {...state, input: action.value}
        case SET_MODAL_IS_OPEN:
            return {...state, modalIsOpenForError: action.value}
        case SET_INFO_SMALL:
            return {...state, array: action.smallArray}//взять старый стей и пользовтелей которые там были и перезатеретт весь массив
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_LOADING:
            return {...state, loading: action.loading}
        case SET_LIST_OF_CONTACTS:
            return {...state, listOfContacts: action.listOfContacts}
        case SET_ADD_NEW_CONTACT:
            const newContact = {
                id: Math.floor(Math.random() * 1000),
                firstName: action.newContact.firstName,
                lastName: action.newContact.lastName,
                email: action.newContact.email,
                phone: action.newContact.phone,
                address: {
                    streetAddress: 'test',
                    city: 'test',
                    state: 'test',
                    zip: 'test'
                },
                description: "test"
            }
            return {
                ...state,
                array: [newContact, ...state.array]
            }


        case SET_MODAL_FOR_NEW_CONTACT: {
            return {...state, modalForNewContact: action.value}
        }
        case SET_PRELOADER:
        return {...state,preloader:action.value}
        default:
            return state
    }
}

////ACTIONS

export const setNewArrAC = (array: Array<InformResponseType>): setNewArrACType => ({type: SET_NEW_ARR, array})
export const setInputAC = (value: string): setInputACType => ({type: SET_INPUT, value})
export const setModalIsOpenAC = (value: boolean): setModalIsOpenACType => ({type: SET_MODAL_IS_OPEN, value})
export const setInfoSmallAC = (smallArray: Array<InformResponseType>): setInfoSmallType => ({
    type: SET_INFO_SMALL,
    smallArray
})
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, pageNumber})
export const setLoadingAC = (loading: boolean): SetLoadingACType => ({type: SET_LOADING, loading})
export const setChouseListOFContactsAC = (listOfContacts: ListOfContactsType): SetChouseListOFContactsACType => ({
    type: SET_LIST_OF_CONTACTS,
    listOfContacts
})
export const setAddNewContactAC = (newContact: newContactType): SetAddNewContactACType => ({
    type: SET_ADD_NEW_CONTACT,
    newContact
})
export const setModalForNewContactAC = (value: boolean): SetModalForNewContactACType => ({
    type: SET_MODAL_FOR_NEW_CONTACT,
    value
})
export const setPreloader = (value: boolean): SetPreloaderType => ({
    type: SET_PRELOADER,
    value
})


////THUNKS
export const fetchInfoSmallThunk = async (dispatch: Dispatch) => {
    try {
        let data = await infoAPI.getInfoSmall()
        dispatch(setInfoSmallAC(data))
        dispatch(setPreloader(false))
    } catch (error) {
        console.log(error)
    }
}
export const fetchInfoBigThunk = async (dispatch: Dispatch) => {
    try {
        let data = await infoAPI.getInfoBig()
        dispatch(setInfoSmallAC(data))
        dispatch(setPreloader(false))
    } catch (error) {
        console.log(error)
    }

}


type SetPreloaderType = {
    type: typeof SET_PRELOADER
    value: boolean
}
type SetModalForNewContactACType = {
    type: typeof SET_MODAL_FOR_NEW_CONTACT
    value: boolean
}
type SetAddNewContactACType = {
    type: typeof SET_ADD_NEW_CONTACT
    newContact: newContactType

}
type newContactType = {
    firstName: string
    lastName: string,
    email: string,
    phone: string
}
type SetLoadingACType = {
    type: typeof SET_LOADING
    loading: boolean
}
type SetChouseListOFContactsACType = {
    type: typeof SET_LIST_OF_CONTACTS
    listOfContacts: ListOfContactsType
}
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
type setNewArrACType = {
    type: typeof SET_NEW_ARR
    array: Array<InformResponseType>
}
type setInfoSmallType = {
    type: typeof SET_INFO_SMALL
    smallArray: Array<InformResponseType>
}
type setInputACType = {
    type: typeof SET_INPUT
    value: string
}
type setModalIsOpenACType = {
    type: typeof SET_MODAL_IS_OPEN
    value: boolean
}
type AllACTypes =
    | setNewArrACType
    | setInputACType
    | setModalIsOpenACType
    | setInfoSmallType
    | SetCurrentPageACType
    | SetLoadingACType
    | SetChouseListOFContactsACType
    | SetAddNewContactACType
    | SetModalForNewContactACType
    | SetPreloaderType


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_INPUT = "SET_INPUT"
export const SET_MODAL_IS_OPEN = "SET_MODAL_IS_OPEN"
export const SET_INFO_SMALL = "SET_INFO_SMALL"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_LOADING = "SET_LOADING"
export const SET_LIST_OF_CONTACTS = "SET_LIST_OF_CONTACTS"
export const SET_ADD_NEW_CONTACT = "SET_ADD_NEW_CONTACT"
export const SET_MODAL_FOR_NEW_CONTACT = "SET_MODAL_FOR_NEW_CONTACT"
export const SET_PRELOADER = "SET_PRELOADER"


export type InitialStateType = {
    array: Array<InformResponseType>
    modalIsOpenForList: boolean,
    modalIsOpenForError: boolean,
    input: string,
    currentPage: number,
    postPerPage: number,
    listOfContacts: ListOfContactsType
    modalForNewContact: boolean
    preloader: boolean
}
export type defArrType = {
    "id": number,
    "name": string,
    "sites": number,
    "type": string,
    "status": string
}
type AddressType = {
    streetAddress: string
    city: string,
    state: string,
    zip: string
}

export type InformResponseType = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: AddressType,
    description: string,
}








