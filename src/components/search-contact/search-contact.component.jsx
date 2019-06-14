import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import './search-contact.css';

function searchContact () {

    return (
        <div className="search-contact-wrap">
            <Form>
                <Form.Group inline>
                    <Form.Field
                    control={Input}
                    icon="search"
                    placeholder="Search..."
                    />
                    <Form.Button content="Search" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default searchContact;