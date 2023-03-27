import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../config';
import MemePage from './MemePage'
import UploadMeme from './UploadMeme'

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [user ,setUser] = useState();

    
  useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("Info")));
  }, []);
  const getallpost = async () => {
    try {
      const response = await axios.get(BASE_URL+"allposts");
      console.log("getal post sdata",response.data);
      var posts = response.data
      // console.log(posts)
      posts.reverse()
      setPosts(posts);
      setFilterPost(posts);
    } catch (error) {
      console.log(error.message);
    }
  }
  const success = ()=>{
    console.log("success is calling............")
    getallpost();
  }
  const filter = (value)=>{
    setFilterPost(posts.filter((ele)=>ele.userName.toLowerCase().includes(value)));
  }
console.log(posts);
  useEffect(() => {
    getallpost();
  }, []);

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5'>
          <UploadMeme filter={filter} success={success} />
          {/* <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://res.cloudinary.com/dujbzodhr/video/upload/v1666480928/meme-metaverse/jipmmikyd6e4nme58nu9.mp4" allowfullscreen></iframe>
          </div> */}
          {
            filterPost.map((ele) => {
              const likeArr = ele.likeArr
              {/* console.log(ele.post); */}
              return (
                <MemePage
                  name={ele.userName}
                  picture={ele.userPic}
                  post={ele?.post}
                  likeArr={likeArr}
                  commentArr={ele?.commentArr}
                  id = {ele.id}
                  user = {user}
                  posttype = {ele?.post?.substring(ele.post.length-3, ele.post.length)}
                  success = {success}
                />

              )
            })

          }
        </div>
      </div>
    </div>
  )
}

export default Home
