import axios from "axios";
import { Actions } from "react-native-router-flux";
import { Config } from "./Config";

const Api = axios.create({
    baseURL: Config.baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

///Intercept All Request 
Api.interceptors.request.use(
    async (request) => {
        if (request.data) {
            console.log('request url : ', request.url, 'request plain : ', JSON.stringify(request.data));
        } else {
            console.log('request url : ', request.url, 'request no data');
        }

        return request;
    }, (error) => Promise.reject(error),
);

//intercept All Response  
Api.interceptors.response.use(
    async (response) => {
        console.log('response plain : ', response.data);

        return response;
    },
    (error) => {
        let result = { Status: 'E', Message: 'Error : Bad Request' };
        if (error.response != undefined) {
            switch (error.response.status) {
                case 400:
                    result = { Status: 'E', Message: 'Terjadi kesalahan server' };
                    Actions.BadRequest({ message: result.Message })
                // break;
                case 404:
                    result = {
                        Status: 'E',
                        Message: 'Alamat tidak di temukan',
                    };
                    Actions.BadRequest({ message: result.Message })
                case 500:
                    result = {
                        Status: 'E',
                        Message: 'Oh Tidak, Ada Kesalah pada Server.',
                    };
                case 502:
                    result = { Status: 'E', Message: 'Error : Bad Gateway.' };
                    break;
                case 503:
                    result = {
                        Status: 'E',
                        Message: 'Server sedang Update, Coba Sebentar Lagi.',
                    };
                    break;
                default:
                    result = { Status: 'E', Message: 'Whoops, Something Bad happen. :)' };
                    break;
            }
        }
        return Promise.reject(result);
    }
);

export default Api;