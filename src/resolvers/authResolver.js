const userResolver = {
    Query:{
        userDetailById:(_, {userId}, {dataSources, userIdToken}) =>{
            if(userId === userIdToken)
                return dataSources.authApi.getUserById(userId);
            else
                return new Error("Unauthorized");            
        }

    },
    Mutation:{
        signUpUser: async (_, {userInput}, {dataSources}) => {

            const estudiantesInput = {
                username: userInput.username,
                promedio: userInput.promedio,
                nota: userInput.nota,
            }
            await dataSources.estudiantesApi.createEstudiantes(estudiantesInput);

            const authInput ={
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email
            }
            return await dataSources.authApi.createUser(authInput);
        },
        logIn : async (_, {credentials}, {dataSources}) => {
            return await dataSources.authApi.authRequest(credentials);

        },
        refreshToken :(_,{ token }, {dataSources}) =>  
            dataSources.authApi.refreshToken(token)
    }
};

module.exports = userResolver;