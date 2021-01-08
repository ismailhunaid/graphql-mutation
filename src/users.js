// step 5 = import {gql,useQuery} from '@apollo/client'
import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_DATA = gql`
 query {
    users {
        name
        age
        id
        email
        
    }
    books{
        title
        author
    }
    
}



`


const Users = () => {

 let {loading,error,data} = useQuery(GET_DATA)
if (loading) return  <div> loading ....</div>
if (error) return <div> Error ...</div>

const newData = data.users.map((user)=>{
    return <div key={user.id}>
        <li> {user.name}</li>
        <li> {user.age}</li>
        <li> {user.id}</li>
        <li> {user.email}</li>

    </div>
})
const newBooks = data.books.map((book)=>{
    return <div key={book.id}>
        <li> {book.title}</li>
        <li> {book.author}</li>


    </div>
})
    return (
        <div>
            
            <h1> user component </h1>

            <h2> {newData}</h2>
            <h2>
                {newBooks}
            </h2>

            {/* <h3> {JSON.stringify(data)}</h3> */}

        </div>
    )
}

export default Users;