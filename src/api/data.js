import * as api from './api.js';

api.settings.host = 'http://localhost:3030';

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getData() {
    return await api.get(api.settings.host + '/data/wiki?sortBy=_createdOn%20desc');
}

export async function getMyData(id) {
    return await api.get(api.settings.host + '/data/wiki/' + id);
}

export async function deleteRecord(id) {
    return await api.del(api.settings.host + '/data/wiki/' + id);
}

export async function getHomeData() {
    return await api.get(api.settings.host + '/data/wiki?sortBy=_createdOn%20desc&distinct=category');
}

export async function createData(data) {
    return await api.post(api.settings.host + '/data/wiki', data);
}

export async function editData(id, data) {
    return await api.put(api.settings.host + '/data/wiki/'+id, data);
}