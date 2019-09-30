import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Confirm } from 'semantic-ui-react';

import ContactsContext from '../../state/contexts/contacts.context';

const DeleteContact = ({id}) => {
    const context = useContext(ContactsContext);
    const { getContacts, deleteContact, deleteSuccess } = context;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (deleteSuccess) {
            setTimeout(() => getContacts(), 5000);
        }
    }, [deleteSuccess])

    return (
        <React.Fragment>
            <Dropdown.Item text='Delete' icon="user delete" style={{color: 'red'}} onClick={() => setOpen(true)} />
            <Confirm
                open={open}
                header="Confirm Delete"
                content="Are you sure you want to delete this contact?"
                onCancel={() => setOpen(false)}
                onConfirm={() => {setOpen(false); deleteContact(id)}}/>
        </React.Fragment>
    )
};

export default DeleteContact;