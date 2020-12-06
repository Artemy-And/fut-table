import axios from "axios";
import {InformResponseType} from "../Redux/table-reducer";


export const infoAPI = {
    getInfoSmall() {
      return axios.get<Array<InformResponseType>>('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}/')
            .then(res=>res.data)

    },
    getInfoBig(){
        debugger
        return axios.get<Array<InformResponseType>>('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}/')
            .then(res=>res.data)
    }



}

