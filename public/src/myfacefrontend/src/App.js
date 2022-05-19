import logo from './logo.svg';
import './App.scss';
import React , {useState , useEffect} from 'react';
import UserDetail from './UserDetail';
import PostDetail from './PostDetail';
import {BrowserRouter , Routes , Route, Link} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='' element={
          <nav>
            <Link to='/users'>users</Link> | {' '}
            <Link to='/posts'>posts</Link>
          </nav>
        }>
        </Route>
        <Route path='/users' element={<UserDetail/>}/>
        <Route path='/posts' element={<PostDetail/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
