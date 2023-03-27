import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';

const UploadMeme = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [image, setImage] = useState();
  const [category, setCategory] = useState("tranding");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Info")));;
  }, []);
  console.log(category)
 

  const submitHandler = async()=>{
    try {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "ph3rhj89")
      data.append("cloud_name","dujbzodhr")
      const res = await axios.post("https://api.cloudinary.com/v1_1/dujbzodhr/auto/upload", data);
      // console.log("imgres", res.data.url);
      const body = {
        user : user._id,
        post : res.data.url,
      }
      console.log(body);
      const postRes = await axios.post(BASE_URL+"upload/post",body);
      // console.log("response-->",postRes);
      navigate("/")
      props.success();
     
    } catch (error) {
      console.log(error.message);
    }
    
  }
  const handleChange =(e)=>{
    // console.log(e.target.value);
    setCategory(e.target.value)
  }
  return (
    <div className='container mt-2'>
        <div className="card mb-3">
        <nav className="navbar navbar-light border rounded text-center bg-light ">
                        {/* <button type="button " className=" btn btn-primary m-2">Upload MEME</button> */}
                        <button type="button" class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Upload MEME
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Your MEME</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="mb-3">
                                  <label for="formFile" class="form-label">select file <span style={{color: "red"}}>*(less then 5 MB)</span></label>
                                  <input class="form-control" type="file" id="formFile" onChange={(e)=>{setImage(e.target.files[0])}} />
                                </div>
                                <div class="mb-3">
                                  <label for="formFile" class="form-label">Select Category</label>
                                  <select class="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)}>
                                    <option selected>categories</option>
                                    <option value="tranding">Tranding</option>
                                    <option value="youtube">Youtube</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="boliwood">Bolliwood Movies</option>
                                    <option value="holiwood">Holiwood Movies</option>
                                    <option value="webseries">Wed Series</option>
                                    <option value="standupcomedy">StandUp Comedy</option>
                                    <option value="tvserial">TV Serial</option>
                                  </select>
                                </div>
                              
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={submitHandler} data-bs-dismiss="modal">
                                 Upload
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <form className="d-flex m-2">
                        <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" onChange={(e)=>{props.filter(e.target.value)}} />
                        {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
                        </form>
                </nav>
        </div>
      
        
    </div>
  )
}

export default UploadMeme
