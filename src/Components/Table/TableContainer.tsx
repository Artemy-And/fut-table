import React, {useState} from "react";
import Modal from 'react-modal'
import {useDispatch, useSelector} from "react-redux";
import styles from "./TableContainer.module.css"
import {
    fetchInfoBigThunk,
    fetchInfoSmallThunk, InformResponseType, ListOfContactsType,
    setAddNewContactAC,
    setChouseListOFContactsAC, setCurrentPageAC, setInputAC,
    setModalForNewContactAC, setModalIsOpenAC,
    setNewArrAC
} from "../Redux/table-reducer";
import {TableSmallListOfContacts} from "./TableSmallListOfContacts";
import {TableBigListOfContacts} from "./TableBigListOfContacts";
import {FormikErrors, useFormik} from "formik";
import {Button} from "@material-ui/core";
import {AppRootStateType} from "../Redux/Store";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
export type valuesPropsFormikType = {
    firstName: string,
    lastName: string
    email: string
    phone: string

}
export const TableContainer = React.memo(() => {
    const dispatch = useDispatch()
    const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false)
    const input = useSelector<AppRootStateType, string>(state => state.table.input)
    const currentPage = useSelector<AppRootStateType, number>(state => state.table.currentPage)
    const postPerPage = useSelector<AppRootStateType, number>(state => state.table.postPerPage)
    const modalIsOpenForError = useSelector<AppRootStateType, boolean>(state => state.table.modalIsOpenForError)
    const array = useSelector<AppRootStateType, Array<InformResponseType>>(state => state.table.array)
    const modalForNewContact = useSelector<AppRootStateType, boolean>(state => state.table.modalForNewContact)
    const preloader = useSelector<AppRootStateType, boolean>(state => state.table.preloader)
    const modalIsOpenForList = useSelector<AppRootStateType, boolean>(state => state.table.modalIsOpenForList)
    const listOfContacts = useSelector<AppRootStateType, ListOfContactsType>(state => state.table.listOfContacts)
    const [additionalInfoObj, setAdditionalInfoObj] = useState<InformResponseType>({
        id: 10,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
            streetAddress: '',
            city: '',
            state: '',
            zip: ''
        },
        description: '',
    })


    const formik = useFormik({
        validate: (values: valuesPropsFormikType) => {
            const errors: FormikErrors<valuesPropsFormikType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''

        },
        onSubmit: values => {

            dispatch(setAddNewContactAC(
                formik.values
            ))
            dispatch(setModalForNewContactAC(false))
        },

    })


    const setValue = (value: string) => {
        if (input.length >= 1) {
            let filteredContacts = (array.filter((i: InformResponseType) => {
                let matchNames = i.firstName.toLowerCase()
                return matchNames.match(value)
            }))
            dispatch(setNewArrAC(filteredContacts))
        } else if (input.length === 0 && listOfContacts === 1) {
            dispatch(fetchInfoSmallThunk)
        } else if (input.length === 0 && listOfContacts === 2) {
            dispatch(fetchInfoBigThunk)
        }
        dispatch(setInputAC(value))
        if (array.length === 0 && !modalIsOpenForError) {
            dispatch(setModalIsOpenAC(true))
            setTimeout(() => {
                dispatch(setModalIsOpenAC(false))
            }, 2000)
        }
    }
    const onHandleClickASC = () => {
        dispatch(setNewArrAC([...array].sort((a, b) => {
            return a.firstName === b.firstName ? 0 :
                a.firstName > b.firstName ? 1 : -1
        })))
    }
    const onHandleClickDESC = () => {
        dispatch(setNewArrAC([...array].sort((a, b) => {
            return a.firstName === b.firstName ? 0 :
                a.firstName < b.firstName ? 1 : -1
        })))
    }


    //set contact
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }

    return (
        <div className={styles.App}>

            <div className={styles.newContainer}>

                {listOfContacts === 0 &&
                <Modal
                    isOpen={modalIsOpenForList}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className={styles.info}>
                        <h2>Какой список пользователей Вы выбираете?</h2>
                        <Button variant="contained" onClick={() => {
                            return dispatch(setChouseListOFContactsAC(1))
                        }}>Маленький</Button>
                        <Button variant="contained" onClick={() => {
                            return dispatch(setChouseListOFContactsAC(2))
                        }}>Большой</Button>
                    </div>

                </Modal>}


                {listOfContacts === 1 ? <TableSmallListOfContacts
                    additionalInfoObj={additionalInfoObj}
                    array={array}
                    currentPage={currentPage}
                    formik={formik}
                    input={input}
                    modalForNewContact={modalForNewContact}
                    modalIsOpenForError={modalIsOpenForError}
                    onHandleClickASC={onHandleClickASC}
                    onHandleClickDESC={onHandleClickDESC}
                    paginate={paginate}
                    postPerPage={postPerPage}
                    preloader={preloader}
                    setValue={setValue}
                    showAdditionalInfo={showAdditionalInfo}
                    setAdditionalInfoObj={setAdditionalInfoObj}
                    setShowAdditionalInfo={setShowAdditionalInfo}


                /> : listOfContacts === 2 ? <TableBigListOfContacts
                    additionalInfoObj={additionalInfoObj}
                    array={array}
                    currentPage={currentPage}
                    formik={formik}
                    input={input}
                    modalForNewContact={modalForNewContact}
                    modalIsOpenForError={modalIsOpenForError}
                    onHandleClickASC={onHandleClickASC}
                    onHandleClickDESC={onHandleClickDESC}
                    paginate={paginate}
                    postPerPage={postPerPage}
                    preloader={preloader}
                    setValue={setValue}
                    showAdditionalInfo={showAdditionalInfo}
                    setAdditionalInfoObj={setAdditionalInfoObj}
                    setShowAdditionalInfo={setShowAdditionalInfo}
                /> : ''}

            </div>

        </div>
    );
})


