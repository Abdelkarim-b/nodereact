import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Post() {
  const [objectPost, setObjectPost] = useState({});
  let { id } = useParams();
  useEffect(() =>
    {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) =>
        {
            console.log("selected Post", response.data)
            setObjectPost(response.data)
        });
    }, []);
 
  return (
    <div>{objectPost.title}</div>
  )
}

export default Post
