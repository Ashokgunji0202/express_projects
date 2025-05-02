import React,{ useContext} from 'react'
import { UserContext } from '../utils/contexts/UserContext'

const PostContainerButton = ({data}) => {

  const use = useContext(UserContext)
  return (
    <div>
        {use.id}
    </div>
  )
}

export default PostContainerButton
