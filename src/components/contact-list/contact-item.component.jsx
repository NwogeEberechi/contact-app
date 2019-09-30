import React from 'react';
import { Table, Checkbox, Icon, Menu, Dropdown } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
// import userIcon from '../../assets/images/user.jpg'

import DeleteContact from '../delete-contact/delete-contact.component';

const ContactItem = ({contact}) => {

    const dropDownTrigger = <Icon name="ellipsis vertical" />
    const style= {
        width: '40px',
        height: '40px',
        backgroundColor: '#c1c1c1',
        borderRadius: '50%',
        color: '#ffffff !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

      // address: "No 3 Onikpa Road, Lagos"
  // createdAt: "2019-07-18T20:49:14.465Z"
  // email: "odogwu@gmail.com"
  // facebook: "https://www.facebook.com/nzediegwu1"
  // fullname: "Odogwu nsoffor"
  // occupation: "Software Engineer"
  // phone: "2347048923983"
  // updatedAt: "2019-07-18T20:49:14.465Z"
  // __v: 0
  // _id: "5d30db4aa1f1f50017f2279e"

    return (
        <Table.Row>
            <Table.Cell><Checkbox /></Table.Cell>
            <Table.Cell><div className="user-icon" style={style}><Icon name="user" size="big" /></div></Table.Cell>
            {/* <Table.Cell><span className="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-image"><img src={userIcon} alt="user" /></span></Table.Cell> */}
            <Table.Cell><Link to="/profile">{contact.fullname}</Link></Table.Cell>
            <Table.Cell>{contact.email}</Table.Cell>
            <Table.Cell>{contact.phone}</Table.Cell>
            <Table.Cell>{contact.address}</Table.Cell>
            <Table.Cell>
                <Menu.Menu position='right'>
                    <Dropdown item pointing='top right' trigger={dropDownTrigger} icon={null}>
                        <Dropdown.Menu>                                   
                                <NavLink to={`/edit-contact/${contact._id}`}>
                            <Dropdown.Item text='Edit' icon="edit" />
                            </NavLink>
                            <DeleteContact />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Table.Cell>
        </Table.Row>
    )
}

export default ContactItem;