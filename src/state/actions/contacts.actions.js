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

export const clearErrors = (dispatch) => () => {
    dispatch({type: contactConstants.CLEAR_ERRORS})
}