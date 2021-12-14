const {ApolloServer} = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');
const AuthAPI = require('./datasources/authAPI');
const EstudiantesAPI = require('./datasources/estudiantesAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI: new AuthAPI(),
        estudiantesAPI: new EstudiantesAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen( process.env.PORT || 4000).then(({url}) => {
    console.log(`Server ready at ${url}`);
});
