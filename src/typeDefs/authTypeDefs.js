const {gql} = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Acces {
        access: String!
    }

    type CredentialsInput{
        username: String!
        password: String!
    }

    type SignupInput{
        username: String!
        password: String!
        name: String! 
        email: String!
        promedio: Float!
        nota: Float!        
    }

    type UserDetail{
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type Query{
        userDetailById(userId: Int!): UserDetail!
    }

    type Mutation{
        signUpUser(userInput: $SignupInput): Tokens!
        logIn(credentials: $CredentialsInput): Tokens!
        refreshToken(token: String!): Acces!
    }

`;
module.exports = authTypes;