// step 5 = import {gql,useQuery} from '@apollo/client'
// 


import React, { useState } from 'react'

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

    const [input, setInput] = useState({
        id:" ",
        name: " ",
        age:"",
        email:""
    });


    const [addNewUser] = useMutation(CREATE_USER)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => {
            return { ...prevState, [name]: value }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    };
    const handleClick = () => {
        const save = input
        console.log(save)
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
                <input name="id" id="id" value={input.id} placeholder="id" onChange={handleChange} />
                <input name="name" id="name" value={input.name} placeholder="name" onChange={handleChange} />
                <input name="age" id="age" value={input.age} placeholder="age" onChange={handleChange} />
                <input name="email" id="email" value={input.email} placeholder="email" onChange={handleChange} />
                <button onClick={handleClick}type="submit"> ADD NEW USER </button>
            </form>
        </div>
    )
}


export default AddUsers;