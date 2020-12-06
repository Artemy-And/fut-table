import React, {ChangeEvent} from "react";
import styles from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {setInputAC, setNewArrAC} from "../Redux/table-reducer";
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";


type HeaderPropsType = {
    input: string
    setValue: (value: string) => void
}


export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch()

    const onChangeInputFind = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(setInputAC(e.target.value))
    }

    return <div className={styles.searcContainer}>
        <input
            value={props.input}
            onChange={onChangeInputFind}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    props.setValue(props.input)
                }
            }}
        />


        <FontAwesomeIcon
            icon={faSearch} className={styles.faSearch}/>

        <Button color="primary" onClick={() => {
            props.setValue(props.input)
        }}>Найти</Button>

    </div>
}