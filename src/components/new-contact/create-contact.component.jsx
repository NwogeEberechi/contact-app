import React from 'react';
import { Form, Input, Select } from 'semantic-ui-react';

import './create-contact.css';

function addContact () {

    const genderOptions = [
        { text: 'Female', value: 'female' },
        { text: 'Male', value: 'male' }
    ]

    function handleInputChange (e) {
        console.log(e);
    }

    return (
        <div className="add-contact-wrap">
            <Form>
                <Form.Field
                    control={Input}
                    name="email"
                    icon="mail"
                    placeholder="Email"
                    iconPosition="left"
                    onChange={handleInputChange}
                    />

                <Form.Field
                    control={Input}
                    name="fullname"
                    icon="pencil"
                    placeholder="Fullname"
                    iconPosition="left"
                    onChange={handleInputChange}
                    />

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

                <Form.Button 
                    content="Add Contact"
                    basic
                    color="blue"
                    icon="add"
                    style={{margin: "auto"}}
                    />
            </Form>
        </div>
    )
}

export default addContact;