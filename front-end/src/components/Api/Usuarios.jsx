import axios from "axios";
import moment from "moment"

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export default {

  async getUsers() {
    const response = await api.get("/pessoas?_sort=id&_order=desc");
    //return response.data
    return response.data.map(user => ({...user, data_nasc: moment(user.data_nasc)}));
  },

  async saveUser(user) {
    const method = user.id ? "put" : "post";
    const url = user.id ? `/pessoas/${user.id}` : "/pessoas";
    const response = await api[method](url, user);
    return response.data;
  },

  async removeUser({ id }) {
    const response = await api.delete(`/pessoas/${id}`);
    return response.data;
  }
};
