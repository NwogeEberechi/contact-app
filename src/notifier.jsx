import React, { useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ContactsContext from './state/contexts/contacts.context';
import 'react-toastify/dist/ReactToastify.css';
 
function Notifier() {
    const context = useContext(ContactsContext)
    const { errorMessage, successMessage, clearErrors } = context;

    useEffect(()=> {
        const notify = (message, tag) => toast[tag](message, {
            onClose: () => clearErrors()
          });

        if (errorMessage) {
            notify(errorMessage, 'error');
        }
        
        if (successMessage) {
            notify(successMessage, 'success')
        }
    }, [errorMessage, successMessage])

    return (
        <div>
            <ToastContainer />
        </div>
    );
}

  export default Notifier;