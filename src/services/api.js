import axios from "axios";
import config from "./config.js";


function getRanking() {
    return axios.get(`${import.meta.env.VITE_API_URL}/ranking`);
}

function signin(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signin`, body);
}

function signup(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signup`, body);
}

function shorten(body, token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/urls/shorten`, body, config(token));
}

function getLinks(token) {
    return axios.get(`${import.meta.env.VITE_API_URL}/urls`, config(token));
}

function deleteLink(token, id) {
    return axios.get(`${import.meta.env.VITE_API_URL}/urls/${id}`, config(token));
}

const api = {
    signin, signup,
    shorten, getLinks,
    getRanking, deleteLink
};
export default api;