import axios from "axios";

// const baseUrl = "http://localhost:3001/api/points";
const baseUrl = "/api/points";

const getAll = async () => {
    const points = await axios.get(baseUrl);
    return points.data;
}

const getById = async (id) => {
    const point = await axios.get(`${baseUrl}/${id}`);
    return point.data;
}

const submitPoint = async (newPoint) => {
    const response = await axios.post(baseUrl, newPoint);
    return response.data;
}

export default {getAll, getById, submitPoint};