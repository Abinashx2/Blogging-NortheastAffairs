import React, { useState } from 'react';
import axios from 'axios';
import './Styles/Create.css';

const CreateBlogPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!postData.title || !postData.content || !postData.author) {
      setError('Please fill in all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('author', postData.author);
    if (image) {
      formData.append('image', image);
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5555/blog/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Post uploaded successfully');
      console.log('Created post:', response.data);
      setPostData({ title: '', content: '', author: '' });
      setImage(null);
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.response?.data?.message || 'Failed to create blog post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Post Latest News</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleInputChange}
            required
            rows="5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={postData.author}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
