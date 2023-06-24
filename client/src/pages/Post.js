import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {

  const [postObject, setPostObject] = useState({});
  const [newComment, setNewComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  let { id } = useParams();

  const handleNewComment = (event)=>{
      console.log('typing ...', event.target.value);
      setNewComment(event.target.value);
  };
  
  const addComment = ()=>{
    axios
    .post("http://localhost:3001/comments", {commentBody: newComment, PostId:id})
    .then((response)=>{
      console.log("comment added ", response.data);
      setCommentsList([...commentsList, response.data]);
      setNewComment("");
    })
  };
  
  useEffect(() =>
    {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) =>
        {
            console.log("selected Post", response.data)
            setPostObject(response.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) =>
        {
            console.log("list of comments => postid :", id, response.data)
            setCommentsList(response.data)
        });
    }, []);
 
    return (
      <div className="postPage">
        <div className="leftSide">
          <div className="post" id="individual">
            <div className="title"> {postObject.title} </div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
          </div>
        </div>
        <div className="rightSide">
          <div className='addCommentContainer'>
            <input 
              type='text' 
              placeholder='comment ...'
              value={newComment} 
              autoComplete='off' 
              onChange={handleNewComment}
              />
            <button onClick={addComment}>Add comment</button>
          </div>
          <div className='listOfComments'>
            {
            commentsList.map((comment, key)=>{
              return <div key={key} className='comment'>{comment.commentBody}</div>
            })
            }
          </div>
        </div>
      </div>
    );
}

export default Post
