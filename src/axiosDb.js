import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://matur-dev-default-rtdb.firebaseio.com/'
});

export default instance;