import React from 'react'
import {InformResponseType} from "../../Redux/table-reducer";
import style from './AdditionalInfo.module.css'
import {Button} from "@material-ui/core";

type AdditionalInfoPropsType = {
    additionalInfoObj: InformResponseType
    setShowAdditionalInfo: (value: boolean) => void
}

export const AdditionalInfo = (props: AdditionalInfoPropsType) => {
    return (
        <div className={style.container}>
            <div>
                Выбран пользователь <b>{props.additionalInfoObj.firstName}</b>
            </div>
            <div>
                Адрес проживания: <b>{props.additionalInfoObj.address.streetAddress}</b>
            </div>
            <div>
                Город: <b>{props.additionalInfoObj.address.city}</b>
            </div>
            <div>
                Провинция/штат: <b>{props.additionalInfoObj.address.state}</b>
            </div>
            <div>
                Индекс: <b>{props.additionalInfoObj.address.zip}</b>
            </div>
            <Button className={style.btn} color="secondary" onClick={() => {
                props.setShowAdditionalInfo(false)
            }}>Close</Button>


        </div>
    )
}