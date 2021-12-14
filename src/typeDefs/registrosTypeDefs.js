const {gql} = require('apollo-server');

const registrosTypes = gql`
    type Registros {
        id: String!
        estudianteUserName: String!
        nombreMateria: String!
        calificacion: Float!
    }

    extend type Query {
        registrosByUsername(username: String!): [Registros],
        registrosBynombreMateria(nombreMateria: String!): [Registros]    
    }    
`;
module.exports = registrosTypes;