import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-app-293be.firebaseio.com"
});

export default instance;