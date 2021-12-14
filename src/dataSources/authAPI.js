const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AuthApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.auth_api_url;
  }

  /*async getUserByEmail(email) {
    const response = await this.get(`/user?email=${email}`);
    return response;
  }*/

  async getUserById(userId) {
    const response = await this.get(`/user/${userId}/`);
    return response;
  }

  /*async getUserByToken(token) {
    const response = await this.get(`/user?token=${token}`);
    return response;
  }*/

  async createUser(user) {
    const response = await this.post("/user", user);
    return response;
  }

  async authRequest(user) {
    credentials = new Object(JSON.parse(JSON.stringify(credentials)));
    return await this.post("/login", credentials);
  }

  /*async updateUser(user) {
    const response = await this.put(`/user?id=${user.id}`, user);
    return response;
  }*/
}
module.exports = AuthApi;
