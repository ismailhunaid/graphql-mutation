const {ApolloServer} = require('apollo-server')
const {v4: uuidv4} = require ('uuid')

const {typeDefs} = require('./schema')
const {users,books} = require ('./db')

const resolvers = {
    Query : {   
        users: ()=> {
            return users
        },
        books :()=>{
            return books
        }
    },
    Mutation : {
        createUser : (parent, args,ctx,info)=>{
            //console.log(args.input)
            
             const checkEmail = users.some((user)=> user.email === args.input.email )
             if (checkEmail) {
                 throw new Error ("email is already taken")
             }

            let newUser = {
                id:uuidv4(),
                ...args.input
            }
            users.push(newUser)
            console.log(users)
                return newUser
                
        },
        deleteUser:(parent,args,ctx,info) => {
            const findUserIndexByID = users.findIndex((user)=> user.id === args.data.id)
            console.log(args.data.id,findUserIndexByID)
            if ( findUserIndexByID ===-1 ){
                throw new Error ('user not found')

            }
            const deletedUser = users.splice(findUserIndexByID , 1)
            return deletedUser[0]
            

        },

        
    }
}




const server = new ApolloServer({
    typeDefs,
    resolvers
    
})

server.listen().then(({url})=>{
    console.log(`server is running on port ${url}`)
})