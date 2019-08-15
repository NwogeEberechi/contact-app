import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import { useFormValidation } from "../../hooks";
import { initialState } from '../../constants';
import { searchContactValidator } from '../../services';
import './search-contact.css';

function SearchContact () {
    const { 
            values, 
            handleInputChange, 
            handleSubmit,
            handleBlur,
            errors
        } = useFormValidation(initialState.searchContact, searchContactValidator);

    return (
        <div className="search-contact-wrap">
            <Form>       
                <Input 
                    action={{ icon: 'search', color: 'blue', onClick: handleSubmit }} 
                    name="key" placeholder='Search...' 
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={errors.key && true} />
                {values.key !== "" && <Button content="Clear" style={{ marginLeft: '8px'  }} />}
            </Form>
        </div>
    )
}

export default SearchContact;