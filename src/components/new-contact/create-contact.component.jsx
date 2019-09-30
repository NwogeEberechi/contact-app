import React, { useState } from 'react';
import { Form, Input, Select, Modal, Icon, Button, Message } from 'semantic-ui-react';

import { useFormValidation } from "../../hooks";
import { initialState } from '../../constants';
import { contactValidator } from '../../services';

import './create-contact.css';

function AddContact ({match, contactId}) {
    const { 
            values, 
            handleInputChange, 
            handleSubmit, 
            handleBlur,
            errors,
        } = useFormValidation(initialState.newContact, contactValidator);
    const genderOptions = [
        { text: 'Female', value: 'female' },
        { text: 'Male', value: 'male' }
    ]

    return (
        <div className="add-contact-wrap">
            {/* <Modal open={isOpen} size="small">
                <Modal.Header>

                </Modal.Header>

                <Modal.Content> */}
                    <Form>
                        <Form.Field
                            control={Input}
                            name="email"
                            icon="mail"
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
                            placeholder="Phone"
                            iconPosition="left"
                            onChange={handleInputChange}
                            />

                        <Form.Field
                            control={Input}
                            name="address"
                            icon="address card"
                            placeholder="Address"
                            iconPosition="left"
                            onChange={handleInputChange}
                            />

                        <Form.Field
                            control={Select}
                            name="gender"
                            placeholder="Gender"
                            options={genderOptions}
                            />

                        <Button 
                            content="Add Contact"
                            basic
                            color="blue"
                            icon="add"
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

export default AddContact ;