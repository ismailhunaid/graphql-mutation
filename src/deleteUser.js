
import React, { createRef } from 'react'

import { gql, useMutation } from '@apollo/client'

const DELETE_USER = gql`

mutation deleteUser ($data:deleteUser){
    deleteUser (data : $data){
        id
        name
        age
        email
        
    }
    
}

`



function DeleteUser() {
    const element= createRef()

    const [deleteUser] = useMutation(DELETE_USER)

    const handleSubmit = () => {
        const userDeleted = element.current.value


        // deleteUser({variables : {data: {id:"3000"}}})
        deleteUser({ variables: { data: {id:userDeleted} } })
        


            .then(data =>
                console.log('response', data)
            ).catch(error =>
                console.log('error', error)
            )

    };



    return (
        <div>
            <h2> DELETE USER COMPONENT  </h2>
            <input ref={element} placeholder="id" />

            <button type="submit" onClick={handleSubmit}> DELETE USER </button>
        </div>
    )
}


export default DeleteUser;