import {contactConstants } from '../constants/contacts.constants'

export const initialState = {
    contacts: [],
    contact: { nothing: 'for you'},
    loading: false,
    errorMessage: null,
    successMessage: null,
    deleteSuccess: false
}

export const contactReducer = (state=initialState, action) => {
    switch(action.type) {
        case contactConstants.GET_CONTACTS_REQUEST:
            return {
                ...state,
               loading: true
            }
        case contactConstants.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload.data,
                loading: false
            }

        case contactConstants.GET_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.error.message
            }
        
        case contactConstants.GET_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case contactConstants.GET_CONTACT_SUCCESS:
            return {
                ...state,
                contact: action.payload.data,
                loading: false
            }

        case contactConstants.UPDATE_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case contactConstants.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                contact: action.payload.data,
                successMessage: action.payload.message,
                loading: false
            }

        case contactConstants.UPDATE_CONTACT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload.message,
                loading: false
            }

        case contactConstants.ADD_CONTACT_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case contactConstants.ADD_CONTACT_SUCCESS:
            return {
                ...state,
                successMessage: action.payload.message,
                loading: false
            }

        case contactConstants.ADD_CONTACT_FAILURE:
            return {
                ...state,
                errorMessage: action.error.message,
                loading: false
            }

            case contactConstants.DELETE_CONTACT_REQUEST:
                    return {
                        ...state,
                        loading: true
                    }
                
            case contactConstants.DELETE_CONTACT_SUCCESS:
                return {
                    ...state,
                    successMessage: action.payload.message,
                    deleteSuccess: true,
                    loading: false
                }
    
            case contactConstants.DELETE_CONTACT_FAILURE:
                return {
                    ...state,
                    errorMessage: action.error.message,
                    loading: false
                }

        case contactConstants.CLEAR_ERRORS:
            return {
                ...state,
                errorMessage: null,
                successMessage: null,
            }
        default:
            return state;
    }
}