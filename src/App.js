import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DataForm from './containers/DataForm/DataForm';
import Contact from './components/Contact/Contact';
import Main from './components/Contex/Main';
import Layout from './components/Layout/Layout';
import Resume from './containers/Resume/Resume';
import PortfolioBuilder from './containers/PortfolioBuilder/PortfolioBuilder';
import NewPost from './components/CreatePost/NewPost';
import Blog from './containers/Blog/Blog';
import PostDetails from './components/Post/PostDetails/PostDetails';
import NotFound from './NotFound/NotFound';


class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Main/>} />
              <Route path='/portfolio' element={<PortfolioBuilder/>}/>
              <Route path="/about" element={<Resume/>} />
              <Route path="/blogs" element={<Blog/>}/>
              <Route path="/dataform" element={<DataForm/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blogs/:id" element={<PostDetails/>}/>
              <Route path="/new-post" element={<NewPost/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>  
          </Layout>
      </div>
    );
  }
}

export default App;


