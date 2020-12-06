import React from 'react'
import {InformResponseType} from "../Redux/table-reducer";
import style from './AdditionalInfo.module.css'

type AdditionalInfoPropsType = {
    additionalInfoObj: InformResponseType
}

export const AdditionalInfo = ({additionalInfoObj}: AdditionalInfoPropsType) => {
    return (
        <div className={style.container}>
            <div>
                Выбран пользователь <b>{additionalInfoObj.firstName}</b>
                </div>
            {/*Описание:*/}
            {/*<textarea>*/}
            {/* {additionalInfoObj.description}*/}
            {/*</textarea>*/}
            <div>
                Адрес проживания: <b>{additionalInfoObj.address.streetAddress}</b>
            </div>
            <div>
                Город: <b>{additionalInfoObj.address.city}</b>
            </div>
            <div>
                Провинция/штат: <b>{additionalInfoObj.address.state}</b>
            </div>
            <div>
                Индекс: <b>{additionalInfoObj.address.zip}</b>
            </div>







        </div>
    )
}