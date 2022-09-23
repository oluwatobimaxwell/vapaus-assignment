import axios from "axios";
import { Login, Signup } from "../types";

axios.defaults.baseURL = "https://reqres.in/api";

class ApiClient {
	login = async (data: Login) => await axios.post("/login", data);

	signup = async (data: Signup) => await axios.post("/register", data);
}

export default new ApiClient();
