const estudiantesResolver = {
    Query:{
        estudianteByUsername: async (_,{username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUserById(userIdToken)).username;
            if(usernameToken === username)
                return await dataSources.estudiantesAPI.estudiantesByUsername(username);
            else
                return null;
        }
    },
    Mutation:{
        
    }
}

module.exports = estudiantesResolver;