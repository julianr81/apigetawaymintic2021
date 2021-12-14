const registrosResolver = {
    Query:{
        registrosByMateria: async (_, {nombreMateria}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUserById(userIdToken)).username;
            const nombreMateriaregistros = await dataSources.estudiantesAPI.registrosBynombreMateria(nombreMateria)
            return nombreMateriaregistros;
        }

    },
    Mutation:{
        
    }
}

module.exports = registrosResolver;