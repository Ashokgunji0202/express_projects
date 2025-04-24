import React,{ useContext, useState} from 'react'
import PostContent from './PostContent'
import { UserContext } from '../utils/contexts/UserContext'

const PostContainer = () => {
    const [data,setData] = useState("Hello world")
    const use = useContext(UserContext)

    console.log(use);
  return (
    <div>
        <PostContent data={data} />
        <div>{use.email}</div>
      
    </div>
  )
}

export default PostContainer
