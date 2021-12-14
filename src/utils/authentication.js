const {ApolloError} = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const aunthentication = async ({req}) => {
    const token = req.headers.authorization || '';

    if (token == '') {
        return {userIdToken : null} 
    }
    else {
        try{    
        let requestOptions = {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({token}),
            redirect : 'follow'
        };

        let response = await fetch(`${serverConfig.auth_api_url}verifyToken`,
            requestOptions
        )
        if(response.status != 200) {
            console.log(response);
            throw new ApolloError(`Sesion fallida o invalidad - ${401}` + response.status, 401);
        }
        return {userIdToken : (await response.json()).userId};
        }
        catch(error) {
            console.log(error);
            throw new ApolloError(`Error validando el token - ${500}: ${error}`, 500);
        }

    }
}

module.exports = aunthentication;