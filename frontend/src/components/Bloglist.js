import React, { useState, useEffect } from 'react';
// import './BlogList.css';
import './Styles/Bloglist.css'

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-07-12&to=2025-07-12&sortBy=popularity&apiKey=54eb100e110f4c49930dd5735d790996');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        setBlogs(data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="blog-loading">Loading blogs...</div>;
  }

  if (error) {
    return <div className="blog-error">Error: {error}</div>;
  }

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">External Blogs</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog._id} className="blog-card">
            <img 
              src={blog.urlTOImage || '/default-blog-image.jpg'} 
              alt={blog.title} 
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.description}</p>
              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{new Date(blog.publishedAt).toLocaleDateString()}</span>
              </div>
              <a 
                href={blog.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-read-more"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;