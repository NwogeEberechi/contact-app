import React from 'react';
import { Form, Input } from 'semantic-ui-react';

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
        } = useFormValidation(initialState.searchContact, searchContactValidator, null, 'search');

    return (
        <div className="search-contact-wrap">
            <Form className="search-form">       
                <Input
                className="search-input" 
                    action={{ icon: 'search', color: 'blue', onClick: handleSubmit }} 
                    name="key" placeholder='Search...' 
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    value={values.key}
                    error={errors.key && true} />
            </Form>
        </div>
    )
}

export default SearchContact;