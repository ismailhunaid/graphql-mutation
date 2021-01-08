// step 5 = import {gql,useQuery} from '@apollo/client'
// 


import React  from 'react'

import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`

mutation createUser ($input:createUserInput){
    createUser (input: $input){
        id
        name
        age
        email
        
    }
    
}

`

const AddUsers = () => {

    const [addNewUser] = useMutation(CREATE_USER)




    const handleSubmit = (e) => {
        e.preventDefault()
        
    };
    const handleClick = () => {
        
       addNewUser({ variables: { input: { id: "30ll0", age: 25, name: "burhanuddin babu", email: "a-rgh.com" } } })
         //addNewUser({ variables: { input: { id: save.id, age: save.age, name:save.name, email:save.email } } })
        // addNewUser({ variables: { input: { id: input.id, age: save.age, name:save.name, email:save.email } } })
      

            .then(input =>
                console.log('response', input)
            ).catch(error =>
                console.log('error', error)
            )

    }
    return (
        <div>
            <h2>add users component </h2>
            <form onSubmit={handleSubmit}>
                <input name="id" id="id"  placeholder="id"  />
                <input name="name" id="name"  placeholder="name" />
                <input name="age" id="age"  placeholder="age" />
                <input name="email" id="email" placeholder="email"  />
                <button onClick={handleClick}type="submit"> ADD NEW USER </button>
            </form>
        </div>
    )
}


export default AddUsers;