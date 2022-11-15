import axios from 'axios';

const http = axios.create({
    baseURL: 'http://127.0.0.1:8002/api'
});

export const getAllPirates = async () => {
    const res = await http.get('/pirates');
    return res.data;
}

export const getOnePirate = async (id) => {
    const res = await http.get(`/pirates/${id}`);
    return res.data;
}

export const getOnePirateByPosition = async () => {
    const res = await http.get('/pirates/findcaptain');
    return res.data;
}

export const createPirate = async (data) => {
    const res = await http.post('/pirates', data);
    return res.data;
}

export const updatePirate = async (data) => {
    const res = await http.put(`/pirates/${data._id}`, data);
    return res.data;
}

export const deletePirate = async (id) => {
    const res = await http.delete(`/pirates/${id}`);
    return res.data;
}

