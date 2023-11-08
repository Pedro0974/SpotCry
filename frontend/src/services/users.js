// services/users

import axios from "axios";
import { baseURL } from "../constants/Urls";
import { goToFeed } from "../routes/Coordinator";

export const login = ( body, navigate ) => {
    // console.log(body);
    axios.post(`${baseURL}user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate)
    })
    .catch((err) => {
        console.log(err);
        alert(err.response.data.error)
    });
}