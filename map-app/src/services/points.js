import axios from "axios";

const baseUrl = "http://localhost:3001/api/points";

const getAll = async () => {
    const points = await axios.get(baseUrl);
    return points.data;
}

export default {getAll};