const SERVER = '188.166.179.84/';
// const PORT = '8000/';
const API_ENDPOINT = 'api/v1/';

module.exports = {
    INSUREEPOLICIES: `http://${SERVER}${API_ENDPOINT}insureepolicy`,
    POLICYINFODATA: `http://${SERVER}${API_ENDPOINT}policy`,
    PAYMENT: `http://${SERVER}${API_ENDPOINT}payment`,
    TEMPLATE_IDS: `http://${SERVER}${API_ENDPOINT}kyc/template_ids`,
    VERIFY_ID: `http://${SERVER}${API_ENDPOINT}kyc/verify`,
    TRANSAC_HIST: `http://${SERVER}${API_ENDPOINT}insuree`,
};


