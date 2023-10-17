import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    // ссылка запроса на сервер
    baseURL: __API__,
    headers: {
        // достаем даннные, которые хранятся в локальном хранилище
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
