import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET all posts
export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// POST a new post
export const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
};

// DELETE a post by ID
export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}/${postId}`);
  return response.data;
};
