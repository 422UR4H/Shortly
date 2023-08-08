import axios from "axios";

function getRanking() {
    return axios.get(`${import.meta.env.VITE_API_URL}/ranking`);
}

function signin(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signin`, body);
}

function signup(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signup`, body);
}

const api = {
    signin, signup,
    getRanking
};
export default api;