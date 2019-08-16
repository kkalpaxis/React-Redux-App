import {fetchCompanyStart, fetchCompanySuccess, fetchCompanyError} from "../actions";

function fetchCompany() {
    return dispatch => {
        dispatch(fetchCompanyStart());
        fetch(`https://financialmodelingprep.com/api/v3/company/profile/AAPL`)
        .then(res => res.json())
        .then (res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCompanySuccess);
            return res.features;
        })
        .catch(error => {
            dispatch(fetchCompanyError(error))
        })
    }
};

export default fetchCompany;