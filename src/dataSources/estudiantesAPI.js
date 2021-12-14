const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class EstudiantesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.notas_api_url;
  }

  async createEstudiantes(registros) {
    return await this.post("/regsitros", registros);
  }

  async estudiantesByUsername(username){
    return await this.get(`/registros/${username}`);
  }

  async registrosBynombreMateria(nombreMateria){
    return await this.get(`/registros/${nombreMateria}`);
  } 
  
}

module.exports = EstudiantesApi;
