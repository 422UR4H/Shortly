import axios from "axios";

function getRanking() {
    return axios.get(`${import.meta.env.VITE_API_URL}/ranking`);
}

function signin(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signin`, body);
}

const api = {
    signin,
    getRanking
};
export default api;