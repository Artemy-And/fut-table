import React, {useEffect} from "react";
import style from './Table.module.css'
import {Header} from "../Header/Header";
import {useDispatch} from "react-redux";
import {
    fetchInfoSmallThunk,
    InformResponseType,
    setModalForNewContactAC,
} from "../Redux/table-reducer";
import {Paginator} from "../paginator/Pagination";
import {Button, CircularProgress} from "@material-ui/core";
import {AdditionalInfo} from "./additionalInfo/AdditionalInfo";
import {ModalNewContact} from "./ModalWindows/ModalNewContact";
import {FormikContextType} from "formik";
import {valuesPropsFormikType} from "./TableContainer";


export const TableSmallListOfContacts = (props: TablePropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInfoSmallThunk)
    }, [])

    //getCurrent contact
    const indexOfLastPost = props.currentPage * props.postPerPage;
    const indexOfFirstPost = indexOfLastPost - props.postPerPage
    const currentPost = props.array.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <div>
            <Button className={style.btn} color="primary" onClick={() => {
                dispatch(setModalForNewContactAC(true))
            }}>Добавить Контакт
            </Button>
            <ModalNewContact formik={props.formik} modalForNewContact={props.modalForNewContact}/>
            <Header input={props.input} setValue={props.setValue}/>
            {props.modalIsOpenForError ? <div className={style.error}>Ничего не найдено</div> : ''}
            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTableHeader}>
                        <div className={style.box1}>
                            <p className={style.headerName}>
                                Id
                                <span onClick={props.onHandleClickASC}>▲</span><span
                                onClick={props.onHandleClickDESC}>▼</span></p>
                        </div>
                        <div className={style.box2}>
                            <p className={style.headerName}>FirstName</p>
                        </div>
                        <div className={style.box3}>
                            <p className={style.headerName}>LastName</p>
                        </div>
                        <div className={style.box4}>
                            <p className={style.headerName}>Email</p>
                        </div>
                        <div className={style.box5}>
                            <p className={style.headerName}>Phone</p>
                        </div>
                    </div>
                    {props.preloader && <CircularProgress/>}

                    {currentPost.map((el: InformResponseType) => {
                        return (
                            <div onClick={() => {

                                props.setAdditionalInfoObj({
                                    id: el.id,
                                    firstName: el.firstName,
                                    lastName: el.lastName,
                                    email: el.email,
                                    phone: el.phone,
                                    address: {
                                        streetAddress: el.address.streetAddress,
                                        city: el.address.city,
                                        state: el.address.state,
                                        zip: el.address.zip
                                    },
                                    description: el.description,
                                })
                                props.setShowAdditionalInfo(true)
                            }} className={style.myTable} key={el.id}>
                                <div className={style.box1}>
                                    <p>{el.id}</p>
                                </div>
                                <div className={style.box2}>
                                    <p>{el.firstName}</p>
                                </div>
                                <div className={style.box3}>
                                    <p>{el.lastName}</p>

                                </div>
                                <div className={style.box4}>
                                    <p>{el.email}</p>

                                </div>
                                <div className={style.box5}>
                                    <p>{el.phone}</p>
                                </div>

                            </div>
                        )
                    })}
                    <Paginator postsPerPage={props.postPerPage} totalPosts={props.array.length}
                               paginate={props.paginate}/>
                    {props.showAdditionalInfo && <AdditionalInfo setShowAdditionalInfo={props.setShowAdditionalInfo}
                                                                 additionalInfoObj={props.additionalInfoObj}/>}
                </div>
            </div>
        </div>)


}


export type TablePropsType = {
    input: string
    currentPage: number
    postPerPage: number
    modalIsOpenForError: boolean
    array: Array<InformResponseType>
    modalForNewContact: boolean
    preloader: boolean
    showAdditionalInfo: boolean
    additionalInfoObj: InformResponseType
    formik:FormikContextType<valuesPropsFormikType>
    setValue: (value: string) => void
    onHandleClickASC: () => void
    onHandleClickDESC: () => void
    paginate: (pageNumber: number) => void
    setAdditionalInfoObj: (value:InformResponseType)=>void
    setShowAdditionalInfo: (value: boolean) => void

}


