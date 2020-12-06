import {InformResponseType, ListOfContactsType, setAddNewContactAC, tableReducer} from "./table-reducer";


test('correct todolist should be added to correct array', () => {
    let startState = {
        array: [] as Array<InformResponseType> | [],
        modalIsOpenForList: true,
        modalIsOpenForError: false,
        input: "",
        currentPage: 1,
        postPerPage: 10,
        listOfContacts: 0 as ListOfContactsType,
        modalForNewContact: false,
        contact: {} as InformResponseType,
        preloader: true
    }


    const newContact2 = {
        id: Math.floor(Math.random() * 1000),
        firstName: 'NewName',
        lastName: 'NewLastName',
        email: 'test@test.com',
        phone: '555',
        address: {
            streetAddress: 'test',
            city: 'test',
            state: 'test',
            zip: 'test'
        },
        description: "test"
    }

    const newContact = {
        firstName: 'NewName',
        lastName: 'NewLastName',
        email: 'test@test.com',
        phone: '555'
    }

    const action = setAddNewContactAC(newContact);
    const endState = tableReducer(startState, action)

    expect(endState["array"].length).toBe(1);
    expect(endState["array"][0].firstName).toBe('NewName');
})


