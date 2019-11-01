import axios from 'axios';

const API_URL = 'http://localhost:3000/api'

export const getUsers = () => {
    return axios.get(`${API_URL}/search`)
    .then(({data}) => {
        //console.log(data, 'data')
        return data;
    })
};

// export const getFullUserInfo = async (id) => {
//     const users = await getUsers();
//     console.log(users, 'await users');
//     return axios.get(`${API_URL}/api/profiles?ids=${id}`)
//     .then(({data}) => {
//         console.log(data, 'Full data')
//         return data;
//     });
// };

// export const getAllDetails = () => {
//     return axios.get(`${API_URL}/search`)
//       .then(((users) => {
//         const userArr = users.data.items;
//         console.log(userArr, 'UsArr');

//         const allUsers = userArr.map((eachUser) => {
//             let id = eachUser.id;
//             //let profileUrl = `${API_URL}/api/profiles?ids=${id}`
//             const urls = axios.get(`${API_URL}/profiles?ids=${id}`)
//             .then((fullUser) => {
//                 //console.log(fullUser.data[0], 'eachFullUser')
//                 return fullUser.data[0];
//             })
//             return urls
//         })
//         //console.log(allUsers, 'array of users');
//         return allUsers;
//       }));
// }

export const getAllDetails = async () => {
    const users = await axios.get(`${API_URL}/search`)
    const userArr = users.data.items;
        const profiles = [];
        
        for (const user of userArr) {
            //console.log(userArr, 'user');
            const profile = await axios.get(`${API_URL}/profiles?ids=${user.id}`)
            console.log(profile, 'prof')
            profiles.push(profile.data[0])
            console.log(profiles)
        }
        
        return profiles;
}