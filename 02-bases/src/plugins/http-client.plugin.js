const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const response = await axios.get(url);
        return await response.data;
    },
    post: async (url, body) => {
        const response = await axios.post(url, body);
        return await response.data;
    },
    put: async (url, body) => {
        const response = await axios.put(url, body);
        return await response.data;
    },
    delete: async (url) => {
        const response = await axios.delete(url);
        return await response.data;
    },
};

module.exports = {
    http: httpClientPlugin
};