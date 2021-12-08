import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import DataForm from './containers/DataForm/DataForm';
import Contact from './components/Contact/Contact';
import Main from './components/Contex/Main';
import Layout from './components/Layout/Layout';


class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Main/>} />
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/dataform" element={<DataForm/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>  
          </Layout>
      </div>
    );
  }
}

export default App;


