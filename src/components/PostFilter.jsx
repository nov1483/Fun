import React from 'react'
import MySelect from './UI/select/MySelect'
import { MyInput } from './UI/input/MyInput'

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div> 
        <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='Search...'
        />
        <MySelect 
            defaultValue='Sort By'
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options={[
            {value : "title", name: 'By Name'},
            {value : "body", name: 'By Description'}
            ]}
        />
    </div>
  )
}
