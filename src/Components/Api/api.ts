import axios from "axios";


let requestToken = {
    "request_token": "bf71824d1c0a7439f1ab3bfc0459d4eb15901f18"
}


export const infoAPI = {
    getFilms(page: number, sort: string, genre: string) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&${sort}&include_adult=false&include_video=false&page=${page}${genre}`)
            .then(res => {
                    return res
                }
            )
    },
    getFilmsFavoirite(myMovie: any) {
        return axios.post(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4237669ebd35e8010beee2f55fd45546&session_id=3daafbf1bb655d7b9a4d48021ed128381d6d6b40`, myMovie)
            .then(res => {
                    return res
                }
            )
    },
    getReauestTokenReauest() {
        return axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=4237669ebd35e8010beee2f55fd45546', requestToken)
            .then(res => {
                return res
            })
    },
    showFavoiriteMovies() {
        return axios.get('https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=4237669ebd35e8010beee2f55fd45546&session_id=3daafbf1bb655d7b9a4d48021ed128381d6d6b40&language=en-US&sort_by=created_at.asc&page=1')
            .then(res => {
                return res
            })
    }

}

