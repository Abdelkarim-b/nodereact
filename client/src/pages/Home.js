import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home()
{
    const [listOfPosts, setListOfPosts] = useState([]);
    //react-dom-router version 6 or higer 
    //use useNavigate hook instead of useHistory hook
    const navigate = useNavigate();

    useEffect(() =>
    {
        axios.get("http://localhost:3001/posts").then((response) =>
        {
            console.log("response : ", response.data);
            setListOfPosts(response.data);
        });
    }, []);

  return (
    <div>
          {listOfPosts.map((value, key) =>
          {
              return (
                  <div 
                    key={key}
                    className='post' 
                    onClick={()=> {
                       navigate(`/post/${value.id}`)  
                    }}>
                      <div className='title'>{value.title}</div>
                      <div className='body'>{value.postText}</div>
                      <div className='footer'>{value.username}</div>
                  </div>

              );
          })
          }      
    </div>
  )
}

export default Home
