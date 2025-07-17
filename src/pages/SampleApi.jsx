import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function SampleApi() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
      }, []);

       const fetchPosts = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('Fetched data:', response.data);
            setPosts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    return  <>
     <h2>Sample Api Page</h2>;
     {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
   
}