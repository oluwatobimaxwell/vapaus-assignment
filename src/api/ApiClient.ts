// import Axios from "axios";
import { Login, Signup } from "../types";

class ApiClient {

    token: string;

    constructor(){
        // Resolve the token
        this.token = "";
    }

    login = async (data: Login) => {

    }

    signup = async (data: Signup) => {
        
    }

}

export default ApiClient;