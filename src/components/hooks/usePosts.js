import React, {useMemo} from 'react'

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        console.log('WORK SORT POSTS')
        if(sort) {
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts]);
  return sortedPosts
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)
    const sortAndSearchPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, sortedPosts])

    return sortAndSearchPost;
}
