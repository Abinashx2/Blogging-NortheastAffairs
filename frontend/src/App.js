import React from 'react';
import Post from './Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Create from './components/Create';
import Login from './Pages/Login'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Bpost from './components/Bpost.js';
// import Bpost from '../components/Bpost';
import Bpost from './components/Bpost';
// import AdminDashboard from './Pages/Dashboard';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Pages/Protected';
import EditPost from './Pages/Editpost';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
// import BlogList from './components/Bloglist';
import Bloglist from './components/Bloglist';


const App = () => {
  return (
    <>
    <div className='container'>
      {/* <h1 className='header'>Bodoland Times</h1> */}
      <Header></Header>
      
      <Router>
      <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
        
          
          <Route path="/" element={<Post></Post>}></Route>
          <Route path='/blog/:id' element={<Bpost></Bpost>}></Route>
          
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/others" element={<Bloglist></Bloglist>} />
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path='/admin/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/blog/create' element={<Create></Create>}></Route>
            <Route path="/blog/:id/edit" element={<EditPost />} />
            
          </Route>
        </Routes>
        </main>
      </Router>
      {/* <Post></Post> */}
      {/* <Bpost id={1}></Bpost> */}
      
      
      <Footer></Footer>
      
    </div>
    </>
  )
}

export default App
