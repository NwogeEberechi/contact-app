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

    return (
        <Table.Row>
            <Table.Cell><Checkbox /></Table.Cell>
            <Table.Cell><div className="user-icon" style={style}><Icon name="user" size="big" /></div></Table.Cell>
            {/* <Table.Cell><span className="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-image"><img src={userIcon} alt="user" /></span></Table.Cell> */}
            <Table.Cell><Link to={`/profile/${contact._id}`}>{contact.fullname}</Link></Table.Cell>
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
                            <DeleteContact id={contact._id}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Table.Cell>
        </Table.Row>
    )
}

export default ContactItem;