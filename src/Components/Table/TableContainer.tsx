import React, {useEffect, useState} from "react";
import styles from "./TableContainer.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {TableListOfFilms} from "./TableListOfFilms";
import {infoAPI} from "../Api/api";
import {ModalFavoiriteFilms} from "./ModalWindows/ModalFavoiriteFilms";
import {Button} from "@material-ui/core";


export type FavoiriteType={
    media_type: string,
    media_id: null|number,
    favorite: boolean
}


export const TableContainer = () => {
    let[preLoader,setPreLoader]=useState(true)
    let [films, setFilms] = useState<any>([])
    let [currentPage, setCurrentPage] = useState(1)
    const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false)
    const [infoAboutFilm, setInfoAboutFilm] = useState<string>('')
    let [favoirite, setFavoirite] = useState<FavoiriteType>({
        media_type: "",
        media_id: null,
        favorite: true
    })
    let [listOfFavoiritsFilms, setListOfFavoiritsFilms] = useState([])

    const [sort, setSort] = React.useState('');
    const [genre, setGenre] = useState('')
    useEffect(() => {
        try {
            infoAPI.getFilms(currentPage, sort, genre)
                .then(res => {
                    setFilms(res.data.results)
                    setPreLoader(false)
                })
        }
        catch (e){
            console.log(e)
        }


    }, [currentPage, sort, genre])

    return (
        <BrowserRouter>
            <div className={styles.App}>

                <div className={styles.newContainer}>
                    <div>
                        <a href={"/modalFavoiriteFilms"}
                        >SHOW FAVOIRITE FILMS</a>
                    </div>
                    <div>
                        <a href={"/"}
                        >CLOSE FAVOIRITE FILMS</a>
                    </div>
                    <Route
                        path="/modalFavoiriteFilms"
                        render={() =>
                            <ModalFavoiriteFilms
                                setPreLoader={setPreLoader}
                                preLoader={preLoader}
                                setListOfFavoiritsFilms={setListOfFavoiritsFilms}
                                listOfFavoiritsFilms={listOfFavoiritsFilms}
                                setInfoAboutFilm={setInfoAboutFilm}
                                setShowAdditionalInfo={setShowAdditionalInfo}
                            />}
                    />

                    <TableListOfFilms
                        setGenre={setGenre}
                        setSort={setSort}
                        setFavoirite={setFavoirite}
                        favoirite={favoirite}
                        currentPage={currentPage}
                        setPreLoader={setPreLoader}
                        showAdditionalInfo={showAdditionalInfo}
                        setShowAdditionalInfo={setShowAdditionalInfo}
                        films={films}
                        // totalPages={totalPages}
                        // totalResults={totalResults}
                        setCurrentPage={setCurrentPage}
                        infoAboutFilm={infoAboutFilm}
                        setInfoAboutFilm={setInfoAboutFilm}
                        preLoader={preLoader}
                    />

                    {currentPage <= 1 ? '' : <Button
                        onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}
                    >НАЗАД</Button>}
                    <Button
                        onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}
                    >ДАЛЕЕ
                    </Button>
                    <div>{currentPage}</div>
                </div>

            </div>
        </BrowserRouter>
    );
}


