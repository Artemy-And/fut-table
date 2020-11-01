import React from "react";
import style from './Table.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import styles from "../Header/Header.module.css";
import {Header} from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/Store";
import {defArrType, setInputAC, setModalIsOpenAC, setNewArrAC} from "../Redux/table-reducer";
import {defArr} from "../Array";



export const Table = () => {
    const dispatch = useDispatch()
  const input = useSelector<AppRootStateType, string>(state => state.table.input)
   const newArr = useSelector<AppRootStateType, Array<defArrType>>(state => state.table.newArr2)
  const modalIsOpen = useSelector<AppRootStateType, boolean>(state => state.table.modalIsOpen)

    let setValue = (value:string) => {
        if (input.length > 0) {
           dispatch(setNewArrAC(defArr.filter((i) => {
                let matchNames = i.name.toLowerCase()
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
    const onHandleClickASC=()=> {
        dispatch(setNewArrAC([...newArr].sort((a, b) => {
            return a.name === b.name ? 0:
                a.name > b.name ? 1 : -1
        })))
    }
    const onHandleClickDESC=()=>{
        dispatch(setNewArrAC([...newArr].sort((a, b) => {
            return a.name === b.name ? 0:
                a.name < b.name ? 1 : -1
        })))
    }

    return (
        <div>
            <Header input={input} setValue={setValue}/>
            {modalIsOpen ?  <div className={style.error}>Ничего не найдено</div> :''}
            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTableHeader}>
                        <div className={style.box1}>
                            <p className={style.headerName}  >
                                Tool name
                                <span onClick={onHandleClickASC}>▲</span><span onClick={onHandleClickDESC}>▼</span></p>
                        </div>
                        <div className={style.box2}>
                            <p className={style.headerName}>Used on</p>
                        </div>
                        <div className={style.box3}>
                            <p className={style.headerName}>Type</p>
                        </div>
                        <div className={style.box4}>
                            <p className={style.headerName}>Status</p>
                        </div>
                    </div>
                    {newArr.map((el, index) => {
                        return (
                            <div className={style.myTable} key={index}>
                                <div className={style.box1}>
                                    <p>{el.name}</p>
                                </div>
                                <div className={style.box2}>
                                    <p>{el.sites > 0 ? `${el.sites} site` : el.sites}</p>
                                </div>
                                <div className={style.box3}>
                                    <p className={style.types}>{el.type.replace("_"," ")}</p>
                                </div>
                                <div className={style.box4}>
                                    {(el.status === 'disable' && <button className={style.buttonOff}>OFF</button>) ||
                                    (el.status === 'enable' && <button className={style.buttonOn}>ON</button> )||
                                    (el.status === 'blocked' &&
                                    <FontAwesomeIcon icon={faLock} className={styles.faSearch}/>)
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>)

// </div>


}


