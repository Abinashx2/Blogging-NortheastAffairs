import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './components/Styles/Post.css'
// import post from "../../backend/models/postSchema";
const Post = () => {
const navigate=useNavigate();
  const [Data, Setdata] = useState([]); // Correct state variable
  const [Loading, Setloading] = useState(true);
  const [Error, Seterror] = useState(null);
  const[page, setPage]=useState(1);
  const[totalPages, setTotalPages]=useState(1);

  // const createNavigate=useNavigate();
  // const create=()=>{
  //   createNavigate(`/blog/create`)
  // }

  useEffect(() => {
    
    const fetchdata = async (currentPage) => {
      try {
        Setloading(true);
        const response = await axios.get(`http://localhost:5555/blog/?page=${currentPage}`);
        Setdata(response.data.data || []); // Correctly setting the state
        setTotalPages(response.data.totalPages || 1);
        Setloading(false);
      } catch (error) {
        console.log("unable to fetch", error)
        Seterror(error);
        Setloading(false);
      }
    };
    fetchdata(page);
  }, [page]);

  if (Loading) return <p>Loading...</p>;
  if (Error) return <p>Error while fetching data: {Error.message}</p>;

  return (
    <div className="post-container">
      <h1 className="post-headline">Top headlines</h1>
      {/* <button onClick={create}className="create-button">Create</button> */}
      <ul className="posts-list">
        {Data.map((item) => ( // Using correct state variable and returning JSX
          <div key={item._id}
          onClick={()=>navigate(`/blog/${item._id}`)}>
            <div className="post-border" id="title-id">
            <h2 className="posts-container__title">{item.title.slice(0, 50)}...</h2>

           


            {item.image && (
            <img
              src={item.image}
              alt="Blog"
              className="blog-image"
            />
          )}
            {/* <p>{item.image}</p> */}
            <p>{item.content.slice(0, 300)}</p>
            <h2 className="post-author">
              <strong className="">Author:</strong> {item.author}
            </h2>
            <p className="Date">:{new Date(item.createdAt).toLocaleDateString()}</p>
            
            </div>
            
          </div>
        ))}
      </ul>
      <div className="pagination-control">
        <button className="btn" onClick={()=>setPage((prev)=>Math.max(prev -1, 1))}
          disabled={page===1}
          >previous</button>
          <span>page{page}of{totalPages}</span>
          <button className="btn"
            onClick={()=>setPage((prev)=>Math.min(prev+1, totalPages))}
            disabled={page===totalPages}
          >next</button>
      </div>
    </div>
  );
};

export default Post;
