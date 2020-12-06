import axios from "axios";
// import {PhotosType, ProfileType} from "../redux/profile-reducer";
// import {UsersType} from "../redux/user-reducer";



// const instance = axios.create({
//     withCredentials: true,
//     baseURL: ' http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
//     // headers: {
//     //     "API-KEY": "53444f05-2fd9-4762-9034-1b37fffb3067"
//     // }
// })


export const infoAPI = {
    getInfoSmall() {
        return axios.get<any>(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            .then((response: any) => {
                return response.data
            });
    },
    // getUsers(currentPage: number, pageSize: number) {
    //     return axios.get<any>(`users?page=${currentPage}&count=${pageSize}`)
    //         .then((response: any) => {
    //             return response.data
    //         });
    // },
    // unFollowUsers(userId: number) {
    //     return instance.delete<ResponseType>(`follow/${userId}`)//когда хотим отписаться нужен delete
    //         .then((response: any) => {
    //             return response.data
    //         });
    // },
    // followUsers(userId: number) {
    //     return instance.post<ResponseType>(`follow/${userId}`)//когда хотим отписаться нужен delete
    //         .then((response: any) => {
    //             return response.data
    //         });
    // },
    // getProfile(userId: number) {
    //     return instance.get<ProfileType>(`profile/${userId}/`)
    //         .then(res => res.data)
    // }

}
// export const profileAPI = {
//     // getProfile(userId: any) {
//     //     return instance.get<ProfileType>(`profile/${userId}`)
//     //         .then(res=>res.data)
//     // },
//     getStatus(userId: number) {
//         return instance.get<string>(`profile/status/${userId}`)
//             .then(res => res.data)
//     },
//     updateStatus(status: any) {
//         return instance.put<ResponseType>('profile/status/', {status: status})
//             .then(res => res.data)
//     },
//     saveProfile(profile: ProfileType) {
//         return instance.put<any>('profile', profile)
//             .then(res => res.data)
//     },
//
//     savePhoto(photoFile: any) {
//         const formData = new FormData();
//         formData.append('image', photoFile)
//
//         return instance.put<ResponseType<PhotosAPIType>>('profile/photo', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//             .then(res => res.data)
//     }
//
// }
// export const securityAPI = {
//     getCaptchaUrl() {
//         //нужно вернуть объект у которго есть URL
//         return instance.get<GetCaptchaUTL>('security/get-captcha-url')
//             .then(res=>res.data)
//     }
// }
// export const authAPI = {
//     me() {
//         return instance.get<ResponseType<ResponseMeType>>('auth/me').then(res => res.data)
//     },
//
//     authUsers() {
//         return instance.get<ResponseType<ResponseMeType>>("auth/me")
//             .then((response: any) => {
//                 return response.data
//             });
//     },
//     login(email: string, password: string, rememberMe: boolean = false, captcha: any = null) {
//         return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha});
//     },
//     logOut() {
//         return instance.delete(`auth/login`);
//     }
//
// }
//

// type GetCaptchaUTL={
//     url:string
// }
// type PhotosAPIType={
//     photos:PhotosType
// }
// export type ResponseType<D = {}, RC = ResultCodesEnum> = {
//     data: D
//     messages: string[]
//     resultCode: RC
//     fieldsError?: string[]
//
//
// }
// type ResponseGetUsersType = {
//     items: Array<UsersType>
//     totalCount: any
//     error: string
// }
// type ResponseUnfollowFollowType = {
//     resultCode: ResultCodesEnum
//     messages: Array<string>
//     data: {}
// }
//
// type ResponseLoginType = {
//     fieldsError?: string[]
//     messages: Array<string>
//     resultCode: ResultCodesEnum
//     data: {
//         userId: number
//     }
// }
//
// type LoginResponseDataType = {
//     userId: number
// }
// type ResponseMeType = {
//     email: string
//     login: string
//     id: number
// }
//
//
// export enum ResultCodesEnum {
//     Success = 0,
//     Error = 1,
//     CaptchaIsRequired = 10
// }
//
//
//













