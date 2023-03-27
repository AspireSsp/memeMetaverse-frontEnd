import React from 'react'
import { Link } from 'react-router-dom'


const Category = () => {
    return (
        <div className='container w-100'>
            <div className='d-flex w-100'>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2" >
                        <img class="card-img" style={{ width: "100%" }} src="https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Tranding...</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 5 mins ago</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2" >
                        <img class="card-img" src="https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Youtube</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 5 mins ago</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='d-flex w-100'>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2">
                        <img class="card-img" src="https://images.pexels.com/photos/8886104/pexels-photo-8886104.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Instagram</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2">
                        <img class="card-img" src="https://images.pexels.com/photos/9811663/pexels-photo-9811663.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Bolliwood Movies</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 12 mins ago</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='d-flex w-100'>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2">
                        <img class="card-img" src="https://images.pexels.com/photos/6899774/pexels-photo-6899774.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">HoliWood Movies</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 9 mins ago</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2" >
                        <img class="card-img" src="https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">WebSeries</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 27 mins ago</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='d-flex w-100'>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2" >
                        <img class="card-img" src="https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">StansUp Comedy</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 1 mins ago</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/'} style={{ width: "48%" }}>
                    <div class="card bg-dark text-white m-2" >
                        <img class="card-img" src="https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">TV Serial </h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 1 mins ago</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category
