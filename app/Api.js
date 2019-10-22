import axios from 'axios';

const API_URL = 'http://localhost:3000'

export const getUsers = () => {
    return axios.get(`${API_URL}/api/search?length=32`)
    .then(console.log(data, 'data'))
    .then(({data}) => data.users)
}