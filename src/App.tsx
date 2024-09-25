import React from 'react';
import { Layout, Menu, Button } from 'antd';
import './index.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header className="navbar">
        <div className="logo">
        <a
  href="about me.php"
  style={{
    color: 'black',
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    textDecoration: 'none', 
    padding: '2px 5px', 
    borderRadius: '30px', 
    backgroundColor: '#FFC371',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', 
    transition: 'background-color 0.3s ease, transform 0.3s ease', 
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#FF5F6D'; 
    e.currentTarget.style.transform = 'scale(1.05)'; 
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#FFC371'; 
    e.currentTarget.style.transform = 'scale(1)'; 
  }}
>
  Bailey Blog
</a>

        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} className="navbar-menu">
          <Menu.Item key="1">
            <a href="index.html" style={{ color: 'black' }}>Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="Gallery.html" style={{ color: 'black' }}>Gallery</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="Breed Information.html" style={{ color: 'black' }}>Breed Information</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="about.html" style={{ color: 'black' }}>About Bailey</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="top-row">
          <div className="bg-left"></div>
          <div className="bg-center-left"></div>
          <div className="bg-center-right"></div>
          <div className="bg-right"></div>
        </div>
        <div className="bottom-row">
          <div className="bg-left"></div>
          <div className="bg-center-left"></div>
          <div className="bg-center-right"></div>
          <div className="bg-right"></div>
        </div>
        <div className="treat-container">
          <Button
            className="btn-treat"
            onClick={() => window.location.href='https://www.paypal.com/paypalme/callumtucke'}
          >
            Buy Him a Treat
          </Button>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
