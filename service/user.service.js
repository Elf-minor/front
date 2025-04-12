import axios from "axios";
const API_URL = "https://g5t12tdl-8000.euw.devtunnels.ms";

class UserService {
  saveUser(user, type = "/register") {
    return axios
      .post(API_URL + type, user, {
        headers: {
          Type: "Alfatest",
        },
        withCredentials: true,
      })
      .then((res) => !!res.data.access_token);
  }
}

export default new UserService();
