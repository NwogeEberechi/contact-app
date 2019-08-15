import React from 'react';
import { Table } from 'semantic-ui-react';

import ContactItem from './contact-item.component';
import './contact-list.css';

function Contacts () {
      
  const contacts = [];
  for (let i = 0; i < 46; i++) {
    contacts.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const contactRow = contacts.map(contact => {
    return <ContactItem key={contact.key} contact={contact} />
  })


    return (
      <Table basic='very' unstackable>
        <Table.Body>
          {contactRow}
        </Table.Body>
      </Table>
    )
}

export default Contacts;