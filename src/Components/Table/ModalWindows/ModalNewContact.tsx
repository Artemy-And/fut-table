import React from "react";
import Modal from "react-modal";
import styles from "../../Header/Header.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import {Button, createStyles, FormControl, FormGroup, TextField, Theme} from "@material-ui/core";
import style from "../Table.module.css";
import {setModalForNewContactAC} from "../../Redux/table-reducer";
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
    modalForNewContact:boolean
    formik:FormikContextType<valuesPropsFormikType>
}

export const ModalNewContact=(props:ModalNewContactPropsType)=>{
    const dispatch = useDispatch()
    const classes = useStyles();
    return(
        <Modal
            isOpen={props.modalForNewContact}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={styles.info}>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <form onSubmit={props.formik.handleSubmit} className={classes.root} noValidate autoComplete="off" >
                            <FormControl>
                                <FormGroup>
                                    <TextField
                                        id="standard-basic"
                                        variant="outlined"
                                        label="firstName"
                                        type="firstName"
                                        margin="normal"
                                        {...props.formik.getFieldProps('firstName')}
                                    />
                                    <TextField
                                        type="lastName"
                                        variant="outlined"
                                        label="lastName"
                                        margin="normal"
                                        {...props.formik.getFieldProps('lastName')}
                                    />
                                    <TextField
                                        type="email"
                                        variant="outlined"
                                        label="email"
                                        margin="normal"
                                        {...props.formik.getFieldProps('email')}
                                    />
                                    {props.formik.errors.email ? <div className={style.errorEmail}>{props.formik.errors.email}</div> : null}
                                    <TextField
                                        type="phone"
                                        variant="outlined"
                                        label="phone"
                                        margin="normal"
                                        {...props.formik.getFieldProps('phone')}
                                    />
                                    {/*{formik.errors.phone ? <div>{formik.errors.phone}</div> : null}*/}
                                    <br></br>
                                    <Button className={classes.buttons} disabled={
                                        props.formik.values.firstName.length>0 &&
                                        props.formik.values.lastName.length>0  &&
                                        props.formik.values.email.length>0 &&
                                        props.formik.values.phone.length>0 ? false :true
                                    } type={'submit'} variant={'contained'} color={'primary'}>Добавить</Button>
                                    <Button
                                        onClick={()=>{dispatch(setModalForNewContactAC(false))}}
                                        className={classes.buttons}  variant={'contained'} color={'secondary'}>Назад</Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>

            </div>
        </Modal>
    )
}