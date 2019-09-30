import React, { useReducer } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

import DefaultLayout from './layout.component';
import ContactsContext from './state/contexts/contacts.context';
import Notifier from './notifier';
import { initialState, contactReducer } from './state/reducers/contacts.reducers';
import { getContacts, getContact, updateContact, clearErrors } from './state/actions/contacts.actions'

import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [state, dispatch] = useReducer(contactReducer, initialState)

  return (
    <ContactsContext.Provider
      value={{
        ...state,
        getContacts: getContacts(dispatch),
        getContact: getContact(dispatch),
        clearErrors: clearErrors(dispatch),
        updateContact: updateContact(dispatch)
      }}
     >
       <Notifier />
      <Router basename="/">
        <Route path="/" component={DefaultLayout}/>
      </Router>
    </ContactsContext.Provider>
  )
}

export default App;

// [‎19-‎Jun-‎19 9:27 AM]  Joy Ichetaonye:  
// @RequestParam(value = "pageNum", required = false, defaultValue = "1") Integer pageNum,
// @RequestParam(value = "vendorNum", required = false, defaultValue = "") String vendorNum,
// @RequestParam(value = "customerNum", required = false, defaultValue = "") String custNum,
// @RequestParam(value = "location", required = false, defaultValue = "") String location,
// @RequestParam(value = "status", required = false, defaultValue = "5") int status,
// @RequestParam(value = "pageSize", required = false, defaultValue = "10") Integer pageSize,
// @RequestParam(value = "startDate", required = false, defaultValue = "10") String startDate,
// @RequestParam(value = "endDate", required = false, defaultValue = "10") String endDate, 
 

