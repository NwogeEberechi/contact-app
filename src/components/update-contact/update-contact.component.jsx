import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

const UpdateContact = () => {

    return (
        <NavLink to="/edit-contact/2">
            <Dropdown.Item text='Edit' icon="edit" />
        </NavLink>
    )
};

export default UpdateContact;