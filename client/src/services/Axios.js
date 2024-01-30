
import { base_URL } from "../utils/constants";
import axios from "axios";

const instance = axios.create({
    baseURL : base_URL
})

export default instance