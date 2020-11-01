import React from "react";
import styles from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";


type HeaderPropsType = {
    input: string
    setValue: Function

}
export const Header = (props: HeaderPropsType) => {


    return <div className={styles.searcContainer}>
        <input
            value={props.input}
            onChange={(e) => {
                e.preventDefault()
                props.setValue(e.target.value)
            }}/>
        <FontAwesomeIcon
            icon={faSearch} className={styles.faSearch}/>
    </div>
}