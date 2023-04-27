import React from 'react'
import "./Card.css";

const Card = () => {
    return (
        <div className="card">
            <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWboDYwwWSPhq4GXiXkOy508PfYlPYTz35g&usqp=CAU"  />
            <div className="container">
                <h2><b>Ravi Yadav</b></h2>
                <p><b>FullStack Developement Trainee At Geekster</b></p>
            </div>
            <div className='title'>
                <div>26 shot</div>
                <div>220 followers</div>
                <div>120 following</div>
            </div>
        </div>
    )
}

export default Card