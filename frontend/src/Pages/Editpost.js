import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Style1/Editpost.css'
import api from '../Utils/api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch the post to edit
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/blog/${id}`);
        setPost(response.data);
      } catch (err) {
        setError('Failed to fetch post');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/blog/${id}`, post);
      navigate('/admin/dashboard', { state: { message: 'Post updated successfully!' } });
    } catch (err) {
      setError('Failed to update post');
      console.error('Update error:', err);
    }
  };

  if (loading) return <div>Loading post...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 edit-post-container">
      <div className="max-w-3xl mx-auto edit-post-wrapper">
        <h1 className="text-2xl font-bold mb-6 edit-post-title">Edit Post</h1>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6  error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 edit-post-form">
          <div className="mb-4 form-group">
            <label className="block text-gray-700 mb-2 form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded form-input"
              required
            />
          </div>

          <div className="mb-4 form-group">
            <label className="block text-gray-700 mb-2 form-label" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded h-40 form-input form-textarea"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 form-group" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={post.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded form-input"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 button-group">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 button button-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 button button-submit"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;