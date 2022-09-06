import React from 'react';
import { MyButton } from './UI/button/MyButton';
import { useNavigate} from 'react-router-dom'

const Postitem = (props) => {
  const router = useNavigate();
  
  return (
    <div className='post'>
        <div className='post-content'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div className='post-text'>{props.post.body}</div>
            <div className='post-button'>
                <MyButton style={{marginRight: '10px'}} onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    </div>
  )
}

export default Postitem;