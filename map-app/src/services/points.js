import axios from "axios";

const baseUrl = "http://localhost:3001/points";

const getAll = async () => {
    const points = await axios.get(baseUrl);
    return points.data;
}

export default {getAll};