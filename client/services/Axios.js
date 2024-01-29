
import { base_URL } from "../src/utils/constants";
import axios from "axios";

const instance = axios.create({
    baseURL : base_URL
})

export default instance