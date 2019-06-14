import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout} from 'antd';
import { Icon } from 'semantic-ui-react'

import SearchContact from './components/search-contact/search-contact.component';
import AddContact from './components/new-contact/create-contact.component';
import Contact from './components/contact-list/contacts.component';
import ContactProfile from './components/contact-profile/contact-profile.component';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  function toggle () {
    setCollapsed(!collapsed);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggle} width="350px">
          <div className="logo">
            <Icon name="address book outline" size="big"/>
          </div>
          <AddContact />
        </Sider>
        <Layout>
          <Header style={{ background: 'gray', padding: 0 }} >
            <SearchContact />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Router>
                <Route path="/" component={Contact} exact={true}/>
                <Route path="/profile" component={ContactProfile} />
              </Router>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
  );
}

export default App;
