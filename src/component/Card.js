import React from 'react'
import { AiOutlineInstagram ,AiFillHeart} from 'react-icons/ai'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
const Card = () => {
    const avatar="https://images.unsplash.com/photo-1670518962076-7e1320ba6215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";
  return (
    <div className='card'>
        <div className='profileCard'>
        <img src={avatar} alt="" />
        <div className='userInfo'>
        <AiOutlineInstagram/>
        <h3>Juila Anna</h3>
        </div>
        <div className='socialInfo'>
            <div>
                <div className='socialDetail'>
                <AiOutlineInstagram/>
                <span>1.1M</span>
                </div>
          <span>Followers</span>
            </div>
            <div>
                <div className='socialDetail'>
                <AiFillHeart style={{color:"#82C3EC"}}/>
                <span>2M</span>
                </div>
          <span>Likes</span>
            </div>
            <div>
                <div className='socialDetail'>
                <BsFillChatLeftTextFill style={{color:"#97DECE"}}/>
                <span>1.1k</span>
                </div>
          <span>Comments</span>
            </div>
        </div>
       
        </div>
    </div>
  )
}

export default Card