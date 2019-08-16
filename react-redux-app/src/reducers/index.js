import {FETCH_COMPANY_START, FETCH_COMPANY_SUCCESS, FETCH_COMPANY_ERROR} from "../actions/index";

const initialState = {
    pending: false,
    features: [],
    error: null
}

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COMPANY_START: 
            return {
                ...state,
                pending: true
            }
        case FETCH_COMPANY_SUCCESS:
            return {
                ...state,
                pending: false,
                features: action.payload
            }
        case FETCH_COMPANY_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getCompany = state => state.features;
export const getCompanyPending = state => state.pending;
export const getCompanyError = state => state.error;