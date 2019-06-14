import React from 'react';
import { Table, Checkbox, Icon, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import userIcon from '../../assets/images/user.jpg'

import UpdateContact from '../update-contact/update-contact.component';
import DeleteContact from '../delete-contact/delete-contact.component';

const ContactItem = ({contact}) => {

    const dropDownTrigger = <Icon name="ellipsis vertical" />
    const style= {
        width: '50px',
        height: '50px',
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
            <Table.Cell><Link to="/profile">{contact.name}</Link></Table.Cell>
            <Table.Cell>{contact.address}</Table.Cell>
            <Table.Cell>
                <Menu.Menu position='right'>
                    <Dropdown item pointing='top right' trigger={dropDownTrigger} icon={null}>
                        <Dropdown.Menu>                                   
                            <UpdateContact />
                            <DeleteContact />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Table.Cell>
        </Table.Row>
    )
}

export default ContactItem;