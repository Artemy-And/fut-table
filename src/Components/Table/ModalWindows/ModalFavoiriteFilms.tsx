import React, {useEffect} from "react";
import {Button, CircularProgress} from "@material-ui/core";
import style from "../Table.module.css";
import {infoAPI} from "../../Api/api";



type ModalNewContactPropsType = {
    setInfoAboutFilm:Function
    setShowAdditionalInfo:Function
    setListOfFavoiritsFilms: Function
    listOfFavoiritsFilms: any
    preLoader:boolean
    setPreLoader:(value:boolean)=>void
}


export const ModalFavoiriteFilms = (props: ModalNewContactPropsType) => {
    useEffect(()=>{
       infoAPI.showFavoiriteMovies()
            .then(res => {
                props.setListOfFavoiritsFilms(res.data.results)
                props.setPreLoader(false)
            })

    },[props.listOfFavoiritsFilms])
    return (
        <div>
            <div>
                <h1>My favorite films</h1>
                <div className={style.newClassName}>
                    <div className={style.tableForHover}>
                        <div className={style.myTableHeader}>
                            <div className={style.box1}>
                                <p className={style.headerName}>Image</p>
                            </div>
                            <div className={style.box2}>
                                <p className={style.headerName}>Film name</p>
                            </div>
                            <div className={style.box3}>
                                <p className={style.headerName}>Favoirite</p>
                            </div>
                            <div className={style.box4}>
                                <p className={style.headerName}>More info</p>
                            </div>

                        </div>
                        {props.preLoader && <CircularProgress className={style.preloader}/>}
                        {props.listOfFavoiritsFilms.map((el: any) => {

                            return (
                                <div className={style.myTable} key={el.id}>
                                    <div className={style.box1}>
                                        <img src={`https://image.tmdb.org/t/p/w185/${el.poster_path}`}></img>

                                    </div>
                                    <div className={style.box2}>
                                        <h3>{el.original_title}</h3>
                                    </div>
                                    <div className={style.box3}>
                                        <Button onClick={() => {
                                            infoAPI.getFilmsFavoirite({
                                                media_type:"movie",
                                                media_id:el.id,
                                                favorite:false
                                            })
                                        }}>Delete from favoirite️</Button>


                                    </div>
                                    <div className={style.box4}>
                                        <button
                                            onClick={() => {
                                                props.setInfoAboutFilm(el.overview)
                                                props.setShowAdditionalInfo(true)
                                            }}
                                        >Show more info</button>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>






    )
}