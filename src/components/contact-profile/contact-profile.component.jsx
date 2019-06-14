import React from 'react';
import { Segment, Button, Label } from 'semantic-ui-react';

import './contact-profile.scss';

const ContactProfile = () => {

    return (
        <Segment.Group>
            <Segment className="profile-header">
              <Button compact size='small' floated='right'>
                Clear
              </Button>
              Event Log <Label circular>80</Label>
            </Segment>
            <Segment secondary>
              <pre>jkuty</pre>
            </Segment>
          </Segment.Group>
    )
}

export default ContactProfile;