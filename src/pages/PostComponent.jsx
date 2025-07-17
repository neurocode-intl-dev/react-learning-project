import React, { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost } from '../services/apiService';

export default function PostsComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Fetch posts on mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data.slice(0, 5)); // Limit to 5 posts for demo
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async () => {
    if (!title || !body) return alert('Title and Body required');

    const newPost = { title, body, userId: 1 };
    try {
      const created = await createPost(newPost);
      console.log('Post created:', created);
      setPosts([created, ...posts]);
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((p) => p.id !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading ? <p>Loading...</p> : (
        <>
          <div>
            <h3>Create New Post</h3>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /><br/>
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea><br/>
            <button onClick={handleCreatePost}>Create Post</button>
          </div>

          <h3>Posts List</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong> <br />
                <small>{post.body}</small><br/>
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
