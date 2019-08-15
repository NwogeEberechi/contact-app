import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout} from 'antd';
import { Icon, Button } from 'semantic-ui-react'

import SearchContact from './components/search-contact/search-contact.component';
import AddContact from './components/new-contact/create-contact.component';
import Contact from './components/contact-list/contacts.component';
import ContactProfile from './components/contact-profile/contact-profile.component';
import 'semantic-ui-css/semantic.min.css';

const { Header, Sider, Content, Footer } = Layout;

function DefaultLayout ({match}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate);

    return () => window.removeEventListener("resize", updatePredicate);
  })

  function toggle () {
    setCollapsed(!collapsed);
  }

  function updatePredicate () {
    setIsMobile(window.innerWidth <= 576 );
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          collapsible 
          collapsed={collapsed} 
          onCollapse={toggle} 
          theme="light" 
          width="235px" 
          breakpoint="md" 
          collapsedWidth={isMobile ? 0 : 80}>
          <div className="app-brand">
            <div className="app-brand__logo">
              <Icon name="address book outline" size="big"/>
            </div>
            <div className="app-brand__title">
              <h3>&nbsp; &nbsp; Contacts</h3>
            </div>
          </div>

          <div className="app-link ">
            <Link to="/new-contact">
                <div className="app-link__item margin-bottom">
                <span className="app-link__item-icon"><Icon name="add" color="blue"/></span> &nbsp; &nbsp;
                <span className="app-link__item-description"><Button className="new-contact__btn" content="New Contact" /></span>
                </div>
            </Link>

            <Link to="/">
            <div className="app-link__item">
              <span className="app-link__item-icon"><Icon name="list" /></span> &nbsp; &nbsp;
              <span className="app-link__item-description">All contacts</span>
            </div>
            </Link>

            <div className="app-link__item">
              <span className="app-link__item-icon"><Icon name="undo alternate" /></span> &nbsp; &nbsp;
              <span className="app-link__item-description">Frequently contacted</span>
            </div>
            <div className="app-link__item">
              <span className="app-link__item-icon"><Icon name="star" /></span> &nbsp; &nbsp;
              <span className="app-link__item-description">Starred contacts</span>
            </div>
          </div>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, backgroundColor: '#ffffff', borderBottom: '1px solid #edeeee' }} theme="light">
            <SearchContact />
          </Header>
          <Content>
            <div style={{ background: '#fff', minHeight: 360 }}>
                <Switch>
                    <Route path="/" component={Contact} exact/>
                    <Route path="/profile" component={ContactProfile}/>
                    <Route path="/new-contact" render={(props) => <AddContact {...props} contactId="meeeee"/>}/>
                    <Route path="/edit-contact/:id" component={AddContact} />
                </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
}

export default DefaultLayout;
