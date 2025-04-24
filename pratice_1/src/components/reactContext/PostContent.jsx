import React,{ useContext} from 'react'
import PostContainerButton from './PostContainerButton'
import { UserContext } from '../utils/contexts/UserContext'

const PostContent = ({data}) => {
  const use = useContext(UserContext)
  return (
    <div>
        <PostContainerButton data={data} />
        <div>{use.displayname}</div>

      
    </div>
  )
}

export default PostContent
