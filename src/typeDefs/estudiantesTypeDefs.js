const { gql } = require("apollo-server");

const estudiantesTypes = gql`
    type Estudiante {
        username: String!
        promedio: String!
        nota: Float!
    }

    extend type Query {
        estudianteByUsername(username: String!): Estudiante
    }
`;

module.exports = estudiantesTypes;
