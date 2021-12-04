import axios from 'axios';

const API = axios.create();

export const FounderRecommendation = (str) => {
    let url = "http://3.144.102.191:8000/recommendation/"
    url = url + String(str)
    return API.get(url)
};

