import axios from 'axios';

const API_URL = 'http://localhost:3000/api'

// Get the basic user profiles
export const getUsers = () => {
    return axios.get(`${API_URL}/search`)
    .then(({data}) => {
        return data;
    })
};

// Get the more detailed user profiles
export const getAllDetails = async () => {
    const users = await axios.get(`${API_URL}/search`)
    const userArr = users.data.items;
    const profiles = [];
        
        for (const user of userArr) {
            const profile = await axios.get(`${API_URL}/profiles?ids=${user.id}`)
            profiles.push(profile.data[0])
        }
        return profiles;
}