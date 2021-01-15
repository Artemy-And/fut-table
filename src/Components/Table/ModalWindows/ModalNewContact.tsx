import React from "react";
import Modal from "react-modal";
import styles from "../../Header/Header.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import {Button, createStyles,Theme} from "@material-ui/core";
import style from "../Table.module.css";

import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import {FormikContextType} from "formik";
import {valuesPropsFormikType} from "../TableContainer";

const customStyles = {
    content: {
        width: '450px',
        height: '420px',
        display: 'flex',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },

};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                // margin:'5px',
                width: '25ch',
            },
        },
        buttons:{

            margin: theme.spacing(1),
            width: '32ch',

        }
    }),
);

type ModalNewContactPropsType = {

    setShowAdditionalInfo: (value: boolean) => void
    infoAboutFilm:any
    showAdditionalInfo:boolean
}

export const ModalNewContact=(props:ModalNewContactPropsType)=>{
    const dispatch = useDispatch()
    const classes = useStyles();
    return(
        <Modal
            isOpen={props.showAdditionalInfo}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={styles.info}>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <div>
                            Description of film <b>{props.infoAboutFilm}</b>
                        </div>
                                    <Button
                                        onClick={()=>{props.setShowAdditionalInfo(false)}}
                                        className={classes.buttons}  variant={'contained'} color={'secondary'}>Назад</Button>


                    </Grid>
                </Grid>

            </div>
        </Modal>
    )
}