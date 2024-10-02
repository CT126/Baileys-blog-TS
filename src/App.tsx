import React, { useRef, useEffect } from 'react';
import { Layout, Menu, Button } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import BreedInformation from './pages/Breed information'; 
import './index.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const breedInfoRef = useRef<HTMLDivElement>(null); 
  const gallerySectionRef = useRef<HTMLDivElement>(null); 
  const topRef = useRef<HTMLDivElement>(null); 
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname === '/about') {
      aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.pathname === '/breed-information') {
      breedInfoRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    }
    if (location.pathname === '/gallery') {
      gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <Layout>
      <Header className="navbar">
        <div className="logo">
          <Link
            to="/"
            style={{
              color: 'black',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              padding: '2px 5px',
              borderRadius: '30px',
            }}
          >
            Bailey Blog
          </Link>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} className="navbar-menu">
          <Menu.Item key="1">
            <Link to="/" style={{ color: 'black' }}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/gallery" style={{ color: 'black' }}>Gallery</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/breed-information" style={{ color: 'black' }}>Breed Information</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about" style={{ color: 'black' }}>About Bailey</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div ref={topRef} className="top-row"> 
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
            onClick={() => window.location.href = 'https://www.paypal.com/paypalme/callumtucke'}
          >
            Buy Him a Treat
          </Button>
        </div>
        <div ref={aboutSectionRef} className="about-bailey">
     
        </div>
        <div ref={gallerySectionRef} className="gallery-section">
       
        </div>

        <Button 
          className="go-to-top" 
          onClick={scrollToTop} 
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
        >
          Go to Top
        </Button>
      </Content>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/breed-information" element={<BreedInformation ref={breedInfoRef} />} /> 
      </Routes>
    </Layout>
  );
};

export default App;
