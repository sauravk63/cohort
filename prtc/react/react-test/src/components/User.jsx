import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const User = () => {

    const fetchData = () => {
        return axios.get('https://dummyjson.com/users?limit=50')
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['getUsers'],
        queryFn: fetchData
    })

    console.log("DATA :: ",data);
    console.log('LOADING :: ', isLoading);
    console.log('ERROR :: ', isError);

    if(isLoading) return <h2>Loading....</h2>
    return (
        <div>
            {data.data.users.map((item, id)=>(<li key={id}>{item.firstName}</li>))}
        </div>
    )
}

export default User;
