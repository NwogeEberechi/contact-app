import React, { useContext, useEffect } from 'react';
import { Table } from 'semantic-ui-react';

import ContactItem from './contact-item.component';
import ContactsContext from '../../state/contexts/contacts.context';
import AppLoader from '../../app-loader';
import './contact-list.css';

function Contacts () {
  const context = useContext(ContactsContext);
  const { contacts, getContacts, loading } = context;

  useEffect(() => {
    getContacts();
  },[])

  const contactRow = contacts && contacts.map(contact => {
    return <ContactItem key={contact._id} contact={contact} />
  })


    return (
      <div className="relative">
        {loading &&<AppLoader /> }
      <Table basic='very' unstackable>
        <Table.Body>
          {contactRow}
        </Table.Body>
      </Table>
      </div>
    )
}

export default Contacts;