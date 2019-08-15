export const FETCH_COMPANY_START = 'FETCH_COMPANY_START';
export const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
export const FETCH_COMPANY_ERROR = 'FETCH_COMPANY_ERROR';

export function fetchCompanyStart() {
    return {
        type: FETCH_COMPANY_START
    }
};

export function fetchCompanySuccess(features) {
    return {
        type: FETCH_COMPANY_SUCCESS,
        features: features
    }
};

export function fetchCompanyError(error) {
    return {
        type: FETCH_COMPANY_ERROR,
        error: error
    }
};

