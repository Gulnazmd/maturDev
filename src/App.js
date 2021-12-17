import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BlogBuilder from './containers/BlogBuilder/BlogBuilder';
import DataForm from './containers/DataForm/DataForm';
import Contact from './components/Contact/Contact';
import Main from './components/Contex/Main';
import Layout from './components/Layout/Layout';
import Resume from './containers/Resume/Resume';
import PortfolioBuilder from './containers/PortfolioBuilder/PortfolioBuilder';


class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Main/>} />
              <Route path='/portfolio' element={<PortfolioBuilder/>}/>
              <Route path="/about" element={<Resume/>} />
              <Route path="/blog" element={<BlogBuilder/>}/>
              <Route path="/dataform" element={<DataForm/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>  
          </Layout>
      </div>
    );
  }
}

export default App;


