// basic installation
// step 1 = npm install @apollo/client graphql
// step2 = import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
// step3 = make a client instance  and instance of INMemory cache
// step4 = a make a Apolloprovider  inside App function 
// step 5 = in user component 

import React from 'react'
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import Users from './users'
//import AddUsers from './AddUsers'
import DeleteUser from './deleteUser'
import AddUsers2 from './AddUser2'

//step3
const client = new ApolloClient({
  uri:'http://localhost:4000/',
  cache: new InMemoryCache()
})


 const App = () =>{
   return (
     // step 4 
     <ApolloProvider client = {client} >

   <div>
   <h1>  Apollo client practicing </h1>
   < Users />
   <br />
    {/* <AddUsers />  */}
   <br />
   <AddUsers2 /> 
   <br />
   <DeleteUser />
 </div>
 </ApolloProvider>

   )
 }

export default App;
