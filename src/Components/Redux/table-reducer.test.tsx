import React from "react";
import profileReducer, {actionsProfile, getUserProfile, PhotosType, ProfileType} from "./profile-reducer";
import {userAPI} from './../api/api'

jest.mock('./../api/api')

let resultGetProfile:ProfileType = {
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: "string",
    fullName: "string",
    contacts: { github: "string",vk: "string",facebook: "string",instagram: "string",twitter: "string",website: "string",youtube: "string",mainLink: "string"},
    photos: { small: '',
    large: ''},
    initialValues:'any',
    aboutMe:'any'
}
const profileApiMock = userAPI as jest.Mocked<typeof userAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    profileApiMock.getProfile.mockClear()

})
profileApiMock.getProfile.mockReturnValue(Promise.resolve(resultGetProfile))

test('new post should be added', () => {
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", countLikes: 10},
            {id: 2, message: "Hi, how are you?", countLikes: 133},
            {id: 3, message: "Hi, how are you?", countLikes: 4432},
        ],
        profile: null,
        status: "",
        newPostText: ""
    }
    const newPost = 'lanfren lanfra'
    const action = actionsProfile.addPostActionCreator(newPost)


    const endState = profileReducer(state, action)
    expect(endState.posts[3].message.length).toBe(14)
    expect(endState.posts[3].message).toBe(newPost)
    // expect(endState[1].entityStatus).toBe('idle')

})
test('post should be deleted', () => {
    let state = {
        posts: [
            {id: 1, message: "Hi, how are you?", countLikes: 10},
            {id: 2, message: "Hi, how are you?", countLikes: 133},
            {id: 3, message: "Hi, how are you?", countLikes: 4432},
        ],
        profile: null,
        status: "",
        newPostText: ""
    }

    const action = actionsProfile.deletePostAC(3)


    const endState = profileReducer(state, action)
    expect(endState.posts.length).toBe(2)


})


test('getUserProfile',async ()=>{
    const thunk = getUserProfile(1)

    //типизируем вторым параметром добавляем ЛЕВЫЙ гет стэйт и третьим просто объект
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(1)
})