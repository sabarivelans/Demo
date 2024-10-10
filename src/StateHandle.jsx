import React, { useState } from 'react'
//import './Body.css'
import Image from './STARCCOP.jpg'
import Image1 from './car.jpeg'
const StateHandle = () => {
        const [like,setLike]=useState(0)
        const [Name,setName]=useState("Welcome To My Website")
        const [Img,setImg]=useState(Image)
        function increment()
        {
            setLike(like+1)
        }
        function decrement()
        {
            if(like>0)
                setLike(like-1)
        }
    return (
        <div>
            <span onMouseOver={()=> {setName('SabariVelan')}} onMouseLeave={()=>{setName("Welcome To My Website")}}>

            <h>{Name}</h>
            </span>
            <div>
                <span onMouseOver={()=> {setImg(Image1)}} onMouseLeave={()=>{setImg(Image)}}>
                    <img src={Img} alt="" height="300px"/>
                </span>
                <p>
                    {like}
                </p>
                <button onClick={increment}>Like</button>
                <button onClick={decrement}>Dislike</button>
            </div>
        </div>
)
}

export default StateHandle