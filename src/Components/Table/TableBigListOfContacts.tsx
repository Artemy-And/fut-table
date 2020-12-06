import React, {useEffect, useState} from "react";
import style from './Table.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import styles from "../Header/Header.module.css";
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";

import {AppRootStateType} from "../Redux/Store";
import {
    defArrType, fetchInfoBigThunk, fetchInfoSmallThunk, setChouseListOFContactsAC,
    setCurrentPageAC,
    setInfoSmallAC,
    setInputAC, setLoadingAC,
    setModalIsOpenAC,
    setNewArrAC
} from "../Redux/table-reducer";
import {defArr} from "../Array";
import {infoAPI} from "../Api/api";
import axios from "axios";
import {Paginator} from "../Pagination";




// type ListOfContactsType= 0|1|2

export const TableSmallListOfContacts = () => {
    const dispatch = useDispatch()
    const input = useSelector<any, string>(state => state.table.input)
    const newArr = useSelector<any, any>(state => state.table.newArr2)
    const currentPage = useSelector<any, any>(state => state.table.currentPage)
    const postPerPage = useSelector<any, any>(state => state.table.postPerPage)
    const modalIsOpen = useSelector<any, boolean>(state => state.table.modalIsOpen)
    const loading = useSelector<any, boolean>(state => state.table.loading)
    const array = useSelector<any, any>(state => state.table.array)

    // const [listOfContacts,setListOfContacts]=useState<ListOfContactsType>(0)

    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrnetPage] = useState(1)
    // const [postPerPage, setPostPerPage] = useState(10)



    useEffect(() => {
        // let promise = axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
        // // debugger
        // const fetchPosts = async () => {
        //     const res = await infoAPI.getInfoSmall()
        //     setLoadingAC(true)
        //     dispatch(setInfoSmallAC(res.data))
        //     setLoadingAC(false)
        //     console.log(res)
        //
        // }
        // fetchPosts()
        // if (listOfContacts === 1){
            dispatch(fetchInfoSmallThunk)
        // } else if(listOfContacts ===2){
        //     dispatch(fetchInfoBigThunk)
        // }

    }, [])
    let setValue = (value: string) => {
        if (input.length > 0) {
            dispatch(setNewArrAC(array.filter((i: any) => {
                let matchNames = i.firstName.toLowerCase()
                return matchNames.match(value)
            })))
        }
        dispatch(setInputAC(value))
        if (newArr.length === 0 && !modalIsOpen) {
            dispatch(setModalIsOpenAC(true))
            setTimeout(() => {
                dispatch(setModalIsOpenAC(false))
            }, 2000)
        }
    }
    const onHandleClickASC = () => {
        dispatch(setNewArrAC([...array].sort((a, b) => {
            return a.firstName === b.firstName ? 0 :
                a.firstName > b.firstName ? 1 : -1
        })))
    }
    const onHandleClickDESC = () => {
        dispatch(setNewArrAC([...array].sort((a, b) => {
            return a.firstName === b.firstName ? 0 :
                a.firstName < b.firstName ? 1 : -1
        })))
    }

    //getCurrent contact
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = array.slice(indexOfFirstPost, indexOfLastPost)

    //set contact
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }

    return (
        <div>


            <Header input={input} setValue={setValue}/>
            {modalIsOpen ? <div className={style.error}>Ничего не найдено</div> : ''}
            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTableHeader}>
                        <div className={style.box1}>
                            <p className={style.headerName}>
                                Id
                                <span onClick={onHandleClickASC}>▲</span><span onClick={onHandleClickDESC}>▼</span></p>
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
                    {currentPost.map((el: any, index: any) => {
                        return (
                            <div className={style.myTable} key={el.id}>
                                <div className={style.box1}>
                                    <p>{el.id}</p>
                                </div>
                                <div className={style.box2}>
                                    <p>{el.firstName}</p>
                                    {/*<p>{el.sites > 0 ? `${el.sites} site` : el.sites}</p>*/}
                                </div>
                                <div className={style.box3}>
                                    <p>{el.lastName}</p>
                                    {/*<p className={style.types}>{el.type.replace("_"," ")}</p>*/}
                                </div>
                                <div className={style.box4}>
                                    <p>{el.email}</p>
                                    {/*{(el.status === 'disable' && <button className={style.buttonOff}>OFF</button>) ||*/}
                                    {/*(el.status === 'enable' && <button className={style.buttonOn}>ON</button> )||*/}
                                    {/*(el.status === 'blocked' &&*/}
                                    {/*<FontAwesomeIcon icon={faLock} className={styles.faSearch}/>)*/}
                                    {/*}*/}
                                </div>
                                <div className={style.box5}>
                                    <p>{el.phone}</p>
                                </div>
                            </div>
                        )
                    })}
                    <Paginator postsPerPage={postPerPage} totalPosts={array.length} paginate={paginate}/>
                </div>
            </div>
        </div>)

// </div>


}


