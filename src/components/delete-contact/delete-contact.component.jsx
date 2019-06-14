import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DeleteContact = () => {

    return (
        <Dropdown.Item text='Delete' icon="user delete" style={{color: 'red'}} />
    )
};

export default DeleteContact;