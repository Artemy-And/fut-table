import React, {useEffect, useState} from "react";
import style from './Table.module.css'
import {
    Button,
    CircularProgress, createStyles,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Theme
} from "@material-ui/core";
import {ModalFilmInfo} from "./ModalWindows/ModalFilmInfo";

import {infoAPI} from "../Api/api";
import {FavoiriteType} from "./TableContainer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const TableListOfFilms = (props: TablePropsType) => {
    const classes = useStyles();
    const handleChangeForPopularity = (event: React.ChangeEvent<{ value: unknown }>) => {
        // setPopularity(event.target.value as string);
        props.setSort(event.target.value as string)
        props.setGenre(event.target.value as string)
    };


    return (
        <div>
            <h1>All films</h1>
            <div className={style.sorting}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Popularity</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={popularity}
                    onChange={handleChangeForPopularity}
                    label="Popularity"
                >
                    <MenuItem value={'sort_by='}><em>None</em></MenuItem>
                    <MenuItem value={'sort_by=popularity.desc'}>High</MenuItem>
                    <MenuItem value={'sort_by=popularity.asc'}>Low</MenuItem>

                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Rating</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={rating}
                    onChange={handleChangeForPopularity}
                    label="Rating"
                >
                    <MenuItem value={'sort_by='}><em>None</em></MenuItem>
                    <MenuItem value={'sort_by=vote_count.desc'}>High</MenuItem>
                    <MenuItem value={'sort_by=vote_count.asc'}>Low</MenuItem>

                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Release</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={rating}
                    onChange={handleChangeForPopularity}
                    label="Rating"
                >
                    <MenuItem value={'sort_by='}><em>None</em></MenuItem>
                    <MenuItem value={'sort_by=release_date.desc'}>New</MenuItem>
                    <MenuItem value={'sort_by=release_date.asc'}>Old</MenuItem>

                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={rating}
                    onChange={handleChangeForPopularity}
                    label="Genres"
                >
                    <MenuItem value={'sort_by='}><em>None</em></MenuItem>
                    <MenuItem value={'&with_genres=18'}>Drama</MenuItem>
                    <MenuItem value={'&with_genres=28'}>Action</MenuItem>
                    <MenuItem value={'&with_genres=12'}>Adventure</MenuItem>
                    <MenuItem value={'&with_genres=16'}>Animation</MenuItem>
                    <MenuItem value={'&with_genres=35'}>Comedy</MenuItem>
                    <MenuItem value={'&with_genres=80'}>Crime</MenuItem>
                    <MenuItem value={'&with_genres=99'}>Documentary</MenuItem>
                    <MenuItem value={'&with_genres=10751'}>Family</MenuItem>
                    <MenuItem value={'&with_genres=14'}>Fantasy</MenuItem>
                    <MenuItem value={'&with_genres=36'}>History</MenuItem>
                    <MenuItem value={'&with_genres=27'}>Horror</MenuItem>
                    <MenuItem value={'&with_genres=10402'}>Music</MenuItem>
                    <MenuItem value={'&with_genres=9648'}>Mystery</MenuItem>
                    <MenuItem value={'&with_genres=10749'}>Romance</MenuItem>
                    <MenuItem value={'&with_genres=878'}>Science Fiction</MenuItem>
                    <MenuItem value={'&with_genres=10770'}>TV Movie</MenuItem>
                    <MenuItem value={'&with_genres=53'}>Thriller</MenuItem>
                    <MenuItem value={'&with_genres=10752'}>War</MenuItem>
                    <MenuItem value={'&with_genres=37'}>Western</MenuItem>


                </Select>
            </FormControl>
            </div>
            <ModalFilmInfo
                showAdditionalInfo={props.showAdditionalInfo}
                setShowAdditionalInfo={props.setShowAdditionalInfo}
                             infoAboutFilm={props.infoAboutFilm}

            />




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
                    {props.films.map((el: any) => {
                        return (
                            <div


                                className={style.myTable} key={el.id}>
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
                                            favorite:true
                                        })
                                    }}>Add to favoirite️</Button>


                                </div>
                                <div className={style.box4}>
                                    <Button
                                        onClick={() => {
                                            props.setInfoAboutFilm(el.overview)
                                            props.setShowAdditionalInfo(true)
                                        }}
                                    >Show more info</Button>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}


type TablePropsType = {
    films: any
    currentPage: number
    preLoader: boolean
    setPreLoader:any
    showAdditionalInfo:boolean
    setShowAdditionalInfo: (value: boolean) => void
    // totalPages: number | undefined
    // totalResults: number | undefined
    setCurrentPage: Function
    infoAboutFilm: string
    setInfoAboutFilm: Function
    setFavoirite: Function
    favoirite: FavoiriteType
    setSort:Function
    setGenre:Function
}