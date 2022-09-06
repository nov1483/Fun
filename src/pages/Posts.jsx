import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";
import PostsList from "../components/PostsList";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { Modal } from "../components/UI/modal/Modal";
import { MyButton } from "../components/UI/button/MyButton";
import { usePosts } from "../components/hooks/usePosts";
import '../app.css'
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loader/Loader";
import { useFetching } from "../components/hooks/useFetching";
import { getPagesCount } from '../utils/pages';
import { Pagination } from "../components/UI/Pagination/Pagination";
import { useRef } from "react";
import { useObserver } from "../components/hooks/UseObsever";
import MySelect from "../components/UI/select/MySelect";


function Posts() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const sortAndSearchPost = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [getPosts, isPostsLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1)
    })

    useEffect(() => {
      getPosts(limit, page)
    }, [page, limit])


   const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
   }

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const changePage = (page) => {
    setPage(page);
   }

  return (
    <div className="App">
      <Counter/>
      <MyButton style={{marginRight: '20px'}} onClick={getPosts}>Get Posts!</MyButton>
      <MyButton style={{marginBottom: '30px'}} onClick={() => setModal(true)}>Create Post!</MyButton>
      <Modal visible={modal} setVisible={setModal}><PostForm create={createPost}/></Modal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Current of elements on the Page'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Show all'}
        ]}
      />
      {postError &&
        <h2>Error : {postError}</h2>
      }
      <PostsList posts={sortAndSearchPost} remove={removePost} title='JavaScript Posts'/>
      <div ref={lastElement} style={{height: '20px', background: 'red'}}/>
      {isPostsLoading &&
         <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}><Loader/></div>
        }
         
      
      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
