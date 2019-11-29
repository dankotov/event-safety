import axios from "axios";

const baseUrl = "http://localhost:3001/api/points";

const getAll = async () => {
    const points = await axios.get(baseUrl);
    return points.data;
}

const getById = async (id) => {
    const point = await axios.get(`${baseUrl}/${id}`);
    return point.data;
}

export default {getAll, getById};