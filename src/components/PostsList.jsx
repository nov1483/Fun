import React from 'react'
import Postitem from './Postitem'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const PostsList = ({posts, title, remove}) => {

  if(!posts.length) {
    return(
      <div className='noPosts'>
        <h1 style={{textAlign: 'center'}}>Posts Not Find!</h1>
      </div>
    )
  }
  return (
    <div>
        <h2 style={{textAlign:'center', marginBottom:'20px'}}>{title}</h2>
        <TransitionGroup>
          {posts.map((post, index) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames='post'
            >
               <Postitem remove={remove} number={index + 1} post={post} key={post.id}/>
            </CSSTransition>
            )}
      </TransitionGroup>
    </div>
  )
}

export default PostsList;