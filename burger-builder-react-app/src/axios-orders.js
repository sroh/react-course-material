import axios from "axios";

const instance = axios.create({
    baseUrl: "https://react-burger-app-293be.firebaseio.com/"
});

export default instance;