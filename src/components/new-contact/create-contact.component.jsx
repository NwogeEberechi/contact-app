import React, { useEffect, useContext, } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { Spin } from 'antd';

import { useFormValidation } from "../../hooks";
import { initialState } from '../../constants';
import { contactValidator } from '../../services';
import ContactsContext from '../../state/contexts/contacts.context';
import AppLoader from '../../app-loader';

import './create-contact.css';

function AddContact ({history}) {
    const context = useContext(ContactsContext);
    const { loading, addContact, successMessage } = context;

    useEffect(()=> {
        if (successMessage) {
            setTimeout(() => history.push('/'), 5000)
        }
    }, [successMessage])

    const { 
        values, 
        handleInputChange, 
        handleSubmit, 
        handleBlur,
        errors,
    } = useFormValidation(initialState.newContact, contactValidator, addContact, 'create');

    return (
        <div className="relative add-contact-wrap">
            {/* {loading && <AppLoader /> } */}
            {loading && <Spin/>}
            <Form>
                <Form.Field
                    control={Input}
                    name="email"
                    icon="mail"
                    value={values.email || ''}
                    placeholder="Email"
                    iconPosition="left"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.email && true}
                    />
                    
                    { errors.email && <p > {errors.email} </p>}
                <Form.Field
                    control={Input}
                    name="fullname"
                    icon="pencil"
                    value={values.fullname || ''}
                    placeholder="Fullname"
                    iconPosition="left"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.fullname && true}
                    />
                { errors.fullname && <p > {errors.fullname} </p>}

                <Form.Field
                    control={Input}
                    name="phone"
                    icon="phone square"
                    value={values.phone || ''}
                    placeholder="Phone"
                    iconPosition="left"
                    onChange={handleInputChange}
                    />
                { errors.phone && <p > {errors.phone} </p>}

                <Form.Field
                    control={Input}
                    name="address"
                    icon="address card"
                    value={values.address || ''}
                    placeholder="Address"
                    iconPosition="left"
                    onChange={handleInputChange}
                    />

                <Form.Field
                    control={Input}
                    name="occupation"
                    icon="address card"
                    value={values.occupation || ''}
                    placeholder="Occupation"
                    iconPosition="left"
                    onChange={handleInputChange}
                    />

                <Button 
                    content="Add Contact"
                    basic
                    color="blue"
                    icon="add"
                    onClick={handleSubmit}
                    />
            </Form>
        </div>
    )
}

export default AddContact ;
