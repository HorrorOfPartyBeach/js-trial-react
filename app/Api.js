import axios from 'axios';

const API_URL = 'http://localhost:3000/api'

export const getUsers = () => {
    return axios.get(`${API_URL}/search`)
    .then(({data}) => {
        //console.log(data, 'data')
        return data;
    })
};

export const getAllDetails = async () => {
    const users = await axios.get(`${API_URL}/search`)
    const userArr = users.data.items;
    const profiles = [];
        
        for (const user of userArr) {
            // console.log(userArr, 'user');
            const profile = await axios.get(`${API_URL}/profiles?ids=${user.id}`)
            // console.log(profile, 'prof')
            profiles.push(profile.data[0])
            //console.log(profiles, 'allProfiles');
        }
        return profiles;
}