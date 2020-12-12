const SERVER = 'localhost:8080/';
// const PORT = '8000/';
const API_ENDPOINT = 'api-docs/';

module.exports = {
    CREATE_FARMER: `http://${SERVER}${API_ENDPOINT}api/user/add`,
    GOODS: `http://${SERVER}${API_ENDPOINT}api/goods`,
    TRANSACTIONS: `http://${SERVER}${API_ENDPOINT}api/transactions`,
    REVIEWS: `http://${SERVER}${API_ENDPOINT}api/reviews`,
};


