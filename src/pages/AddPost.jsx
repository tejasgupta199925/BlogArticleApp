import React from 'react'
import { Container, PostForm } from '../components'
import { useSelector } from 'react-redux'

function AddPost() {

  const user = useSelector(state => state.auth.userData)

  return (
    // user ? 
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
    // : null
  )
}

export default AddPost
