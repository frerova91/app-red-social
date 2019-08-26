const { gql } = require("apollo-server-express");

const typeDefs = gql`

    
    type User{
        id: ID!
        firstname: String!
        lastname: String!
        nickname: String!
        password: String!
        email: String!
        image: String
        control_active: Boolean
        createdAT: String
        updateAT: String
    }
    

    
    input inputUser{
        firstname: String!
        lastname: String!
        nickname: String!
        password: String!
        email: String!
        image: String
    }
    
    
    
    type Mutation {
        addUser(addUser_input:inputUser): User!
    }
    

   
    type Query {
        allUsers:[User]
    }
    
`;

module.exports = typeDefs;
