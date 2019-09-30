import React, { useEffect, useContext, } from 'react';
import { Form, Input, Select, Modal, Icon, Button, Message } from 'semantic-ui-react';

import { useFormValidation } from "../../hooks";
import { contactValidator } from '../../services';
import ContactsContext from '../../state/contexts/contacts.context';
import AppLoader from '../../app-loader';

function UpdateContact ({match}) {
    const context = useContext(ContactsContext);
    const { contact, getContact, updateContact, loading } = context;

    useEffect(()=> {
        getContact(match.params.id)
    }, [])

    const { 
        values, 
        handleInputChange, 
        handleSubmit, 
        handleBlur,
        errors,
    } = useFormValidation(contact, contactValidator, updateContact, 'update');
    console.log(loading)

    return (
        <div className="relative add-contact-wrap">
            {/* <Modal open={isOpen} size="small">
                <Modal.Header>

                </Modal.Header>

                <Modal.Content> */}
                    {loading && <AppLoader /> }
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
                            content="Update Contact"
                            basic
                            color="blue"
                            icon="user"
                            onClick={handleSubmit}
                            />
                    </Form>

                    { errors.email && <Message error header={errors.email} />}
                {/* </Modal.Content>
                <Modal.Actions>
                    <Button 
                        content="Add Contact"
                        basic
                        color="blue"
                        icon="add"
                        />
                    <Button 
                        content="Cancel"
                        basic
                        color="red"
                        onClick={()=>openModal(false)}
                        />
                </Modal.Actions> */}
            {/* </Modal> */}
        </div>
    )
}

export default UpdateContact ;
