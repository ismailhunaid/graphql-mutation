const {gql} = require ('apollo-server')

const typeDefs = gql `
type Query {
    users:[Users]!
    books: [Books]!
}

type Users {
    id:ID
    name:String
    age:Int
    email:String
}
type Books{
    id:ID
    title:String!
    author:String!
}

type Mutation {
    createUser (input: createUserInput):Users
    deleteUser (data:deleteUser) : Users
} 

input createUserInput {
    id:ID
    name:String
    age:Int
    email:String

}

input deleteUser {
    id:ID
}






`


module.exports ={
    typeDefs
}