import React, { useState, useEffect } from 'react';

export function useFormValidation (initialState, validate, submitHandler, context) {
    let [values, setValues] = useState({...initialState});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {setValues({...initialState})}, [initialState])

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0 ) {
                submitHandler(values);
                console.log('values', values)
                console.log('valid')
                setSubmitting(false);
            }
            else {
                console.log('invalid')
                setSubmitting(false);
            }
        }
        
    }, [errors])

    function handleInputChange (event) {
        setValues({
            ...values, 
            [event.target.name]: event.target.value
        })
    }

    function validateInputs () {
        const validationErrors = validate(values);
        setErrors(validationErrors)
    }

    function handleBlur () {
        validateInputs();
    }

    function handleSubmit () {
        validateInputs();
        setSubmitting(true);
    }

    return { values, handleInputChange, handleSubmit, handleBlur, errors }
}