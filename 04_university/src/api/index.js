import axios from "axios";

const apiClinet = axios.create({
    baseURL: 'http://localhost:8080/v1/department-server',
    timeout: 2000
});

export default apiClinet;