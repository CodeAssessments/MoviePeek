import axios from 'axios'

const getMovies = (url) => {
    //async util, returns only the array with movies
    return axios.get(url)
    .then(res => res.data.results)
    .catch(function (error) {
        console.log(error);
    })
}

export default getMovies
