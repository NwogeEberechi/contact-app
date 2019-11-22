import React, { useContext, useEffect } from 'react';
import { Segment, Button, Label } from 'semantic-ui-react';

import ContactsContext from '../../state/contexts/contacts.context';
import './contact-profile.scss';

const ContactProfile = ({match}) => {
  const context = useContext(ContactsContext);
  const { loading, getContact, contact } = context;

  useEffect(() => {
    getContact(match.params.id)
  }, [match.params.id])

    return (
        <Segment className="contact-profile" loading={loading}>
          <div className="profile-header">
            <div className="profile-pic">

            </div>
            <div className="profile-name">{contact.fullname}</div>
            <div className="profile-address">{contact.address}</div>
          </div>
        </Segment>
    )
}

export default ContactProfile;