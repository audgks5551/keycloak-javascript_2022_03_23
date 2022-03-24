import UserService from "./UserService";
import axios from "axios";

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config) => {

        if (UserService.isLoggedIn()) {
            const cb = () => {
                config.headers.Authorization = `Bearer ${UserService.getToken()}`;
                return Promise.resolve(config);
            };
            return UserService.updateToken(cb);
        }
    });
};

const HttpService = {
    configure
};

export default HttpService;