import { contactConstants } from '../constants/contacts.constants';
import axiosInstance from '../../axios';
import _ from 'lodash';

export const getContacts = (dispatch) => async () => {
    dispatch({type: contactConstants.GET_CONTACTS_REQUEST});
    try {
        const response = await  axiosInstance.get('/contacts')
        dispatch({type: contactConstants.GET_CONTACTS_SUCCESS, payload: response.data})
    }
    catch(error) {
        dispatch({type: contactConstants.GET_CONTACTS_FAILURE, error})
        console.log('error: ', error)
    }
}

export const getContact = (dispatch) => async (id) => {
    dispatch({type: contactConstants.GET_CONTACT_REQUEST})
    try {
        const response = await axiosInstance.get(`/contacts/${id}`)
        dispatch({type: contactConstants.GET_CONTACT_SUCCESS, payload: response.data})
    }
    catch(error) {
        console.log(error)
    }
}

export const updateContact = (dispatch) => async (contact) => {
    dispatch({type: contactConstants.UPDATE_CONTACT_REQUEST})
    try {
        const response = await axiosInstance.patch(`/contacts/${contact._id}`, {
            ..._.omit(contact, ['_id'])
        })
        dispatch({type: contactConstants.UPDATE_CONTACT_SUCCESS, payload: response.data})
    }
    catch(error) {
        dispatch({type: contactConstants.UPDATE_CONTACT_FAILURE, error})
        console.log(error)
    }
}

export const addContact = (dispatch) => async (contact) => {
    dispatch({type: contactConstants.ADD_CONTACT_REQUEST})
    try {
        var response = await axiosInstance.post('/contacts', {
            ...contact
        })
        if (response.status === 'error') {
            dispatch({type: contactConstants.ADD_CONTACT_FAILURE, error: response.errors})
        } else {
            dispatch({type: contactConstants.ADD_CONTACT_SUCCESS, payload: response.data})
        }    
    }
    catch(error) {
        dispatch({type: contactConstants.ADD_CONTACT_FAILURE, error})
    }
}

export const deleteContact = (dispatch) => async (id) => {
    dispatch({type: contactConstants.DELETE_CONTACT_REQUEST})
    try {
        const response = await axiosInstance.delete(`/contacts/${id}`)
        dispatch({type: contactConstants.DELETE_CONTACT_SUCCESS, payload: response.data})
    }
    catch(error) {
        dispatch({type: contactConstants.DELETE_CONTACT_FAILURE, error})
        console.log(error)
    }
}

export const clearErrors = (dispatch) => () => {
    dispatch({type: contactConstants.CLEAR_ERRORS})
}