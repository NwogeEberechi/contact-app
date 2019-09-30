import axios from 'axios';

const axiosInstance = axios.create({
    headers: {"Content-Type": "application/json"}
})

axiosInstance.defaults.baseURL = "https://contacts-registry.herokuapp.com/"

export default axiosInstance;