import axios from 'axios';

const API_URL = 'http://localhost:3000'

export const getUsers = () => {
    return axios.get(`${API_URL}/api/search`)
    .then(({data}) => {
        console.log(data, 'data');
        return data
    })
}