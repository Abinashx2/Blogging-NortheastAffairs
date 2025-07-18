import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Styles/Bpost.css';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Bpost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(-1);
  }

  // Function to generate share URLs
  const getShareUrls = () => {
    if (!post) return {};
    
    const encodedUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(post.title);
    const encodedContent = encodeURIComponent(`${post.title} - ${post.content.substring(0, 100)}...`);
    
    return {
      whatsapp: `https://wa.me/?text=${encodedContent} ${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      // Instagram doesn't have direct sharing, so we'll open the app
      instagram: `https://www.instagram.com/?url=${encodedUrl}`, 
    };
  };

  const handleShare = (platform) => {
    const urls = getShareUrls();
    const width = 600, height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    switch(platform) {
      case 'whatsapp':
        window.open(urls.whatsapp, '_blank');
        break;
      case 'facebook':
        window.open(urls.facebook, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
        break;
      case 'twitter':
        window.open(urls.twitter, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing, so we'll just open the app
        window.open(urls.instagram, '_blank');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/blog/${id}`);
        setPost(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <button onClick={handleClick} >Back</button>
      <div className='post-title'>
      <h1 className='post-title1'>{post.title}</h1>
      </div>
      
      {post.image && (
            <img
              src={post.image}
              alt="Blog"
              className="blog-image"
            />
          )}
      <div className="post-content">{post.content}</div>
      <p className="post-author">By: {post.author}</p>
      <p>Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
      
      {/* Social Sharing Buttons */}
      <div className="share-buttons">
        <h3>Share this post:</h3>
        <div className="share-icons">
          <button onClick={() => handleShare('whatsapp')} aria-label="Share on WhatsApp">
            <FaWhatsapp className="whatsapp-icon" />
          </button>
          <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
            <FaFacebook className="facebook-icon" />
          </button>
          <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
            <FaTwitter className="twitter-icon" />
          </button>
          <button onClick={() => handleShare('instagram')} aria-label="Share on Instagram">
            <FaInstagram className="instagram-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bpost;