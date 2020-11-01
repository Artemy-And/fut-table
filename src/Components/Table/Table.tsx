import React, {useState} from "react";
import style from './Table.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import {Header} from "./Header";



let defArr = [
    {
        "id": 1,
        "name": "ExpsaertSender",
        "sites": 0,
        "type": "email",
        "status": "blocked"
    },
    {
        "id": 2,
        "name": "Tag Commander",
        "sites": 0,
        "type": "tag_manager",
        "status": "blocked"
    },
    {
        "id": 3,
        "name": "Ysance",
        "sites": 0,
        "type": "dmp_crm",
        "status": "blocked"
    },
    {
        "id": 4,
        "name": "AT Internet",
        "sites": 1,
        "type": "analytics",
        "status": "enable"
    },
    {
        "id": 5,
        "name": "Content Square",
        "sites": 3,
        "type": "analytics",
        "status": "enable"
    },
    {
        "id": 6,
        "name": "Google Tag Manager",
        "sites": 2,
        "type": "tag_manager",
        "status": "enable"
    },
    {
        "id": 7,
        "name": "Heatmap",
        "sites": 1,
        "type": "heatmap",
        "status": "enable"
    },
    {
        "id": 8,
        "name": "Tealium",
        "sites": 0,
        "type": "dmp_crm",
        "status": "disable"
    },
    {
        "id": 9,
        "name": "Emarsys",
        "sites": 0,
        "type": "email",
        "status": "disable"
    }
]
export const Table = () => {
    const [modalIsOpen, setIsOpen2] = React.useState(false);
    let [input, setInput] = useState('')
    let [newArr, setNewArr] = useState(defArr)

    let setValue = (value:string) => {
        if (input.length > 0) {
            setNewArr(defArr.filter((i) => {
                let matchNames = i.name.toLowerCase()
                return matchNames.match(value)
            }))
        }
        setInput(value)
        if (newArr.length === 0 && !modalIsOpen) {
            setIsOpen2(true)
            setTimeout(() => {
                setIsOpen2(false)
            }, 2000)
        }
    }


    return (
        <div>
            <Header input={input} setValue={setValue}/>
            {modalIsOpen ?  <div className={style.error}>введенные данные не корректны</div> :''}
            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTable}>
                        <div className={style.box1}>
                            <p className={style.headerName}  >
                                Tool name
                                <span onClick={()=>setNewArr([...newArr].sort((a, b) => {
                                    return a.name === b.name ? 0:
                                    a.name > b.name ? 1 : -1
                                }))}>▲</span><span onClick={()=>setNewArr([...newArr].sort((a, b) => {
                                return a.name === b.name ? 0:
                                    a.name < b.name ? 1 : -1
                            }))}>▼</span></p>

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
                                    <p className={style.types}>{el.type}</p>
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


