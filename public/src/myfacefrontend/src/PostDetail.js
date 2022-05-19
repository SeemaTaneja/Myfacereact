import './App.scss';
import React , {useState , useEffect} from 'react';

function PostDetail() {
    const [posts , setPosts] = useState(null);
    useEffect(()=>{
      fetch("http://localhost:3001/posts").then(response => response.json()).then(data => setPosts(data.results));
    }, [])
    if(!posts) {
      return <div>Waiting for postdata!</div>
    }
    return (
      <div className="container">
          {posts.map(post => <div className ="post-message"> 
        {post.message}
        {<img className="post-image"src={post.imageUrl}/>}
      </div>)}
    </div>
  );
}

export default PostDetail;