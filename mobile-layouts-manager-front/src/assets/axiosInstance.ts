import axios from 'axios';
import qs from 'qs';

import {Template} from '../../types';

const instance = axios.create({
    baseURL: 'http://localhost',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    withCredentials: true
});

export const axiosApi = {
    setTemplatesServer(templates: Template[]) {
        return instance.post('', qs.stringify({
            q: 'templatesSaving',
            templates: JSON.stringify(templates)
        })).then(res => {
            return res.data
        })
    },

    getTemplates() {
        return instance.get('templates').then(res => {
            return res.data[0] ? res.data : []
        })
    },

    login (login: string, password: string) {
        return instance.post('', qs.stringify({
            login: login,
            password: password,
            q: 'login'
        }))
    },

    registration(login: string, password: string, email: string) {
        return instance.post('', qs.stringify({
            login: login,
            password: password,
            email: email,
            q: 'registration'
        }))
    }
}
