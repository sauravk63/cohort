import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ApiRequest = () => {
    const postData = ()=>{
        return axios.post("https://jsonplaceholder.typicode.com/posts", 
            {
                title : 'Mutation'
            }
        )
    }

    const mutation = useMutation({
        mutationFn : postData,
        mutationKey : ['postQuery'],
        onSuccess : (data)=>{
            console.log('Post successsfully', data)
        }
    })
  return (
    <div>
      <button
      onClick={()=>mutation.mutate()}
      >MUTATION</button>
    </div>
  )
}

export default ApiRequest
