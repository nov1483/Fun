import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import { Loader } from '../components/UI/loader/Loader';

export const PostIdPage = () => {
    const param = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [fetchingById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id = param.id)
        setPost(response.data)
    });

    const [fetchingComById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id = param.id)
        setComment(response.data)
    });
    
    useEffect(() => {
        fetchingById(param.id)
        fetchingComById(param.id)
    },[])
    console.log(comment)
  return (
    <div>
        {isLoading 
            ? <Loader/>
            : <h1>{post.title}</h1>
        }

        <h2>Comments</h2>
        {isComLoading
            ? <Loader/>
            :   <div style={{marginTop: '15px'}}>
                {comment.map(comm => {
                    return(
                    <div key={comm.id}>
                    <h5>{comm.name}</h5>
                    <p>{comm.email}</p>
                    <p>{comm.body}</p>
                    </div>)
                })}
            </div>
        
        }
    </div>     
  )
}
