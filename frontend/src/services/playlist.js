// services/playlist

import axios from "axios";
import { baseURL } from "../constants/Urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData} from "./getTokenData";

export const getPlaylistsFromUser = () => {
    const token = localStorage.getItem("token")
    const userId = getTokenData(token).id
    return axios.get(`${baseURL}playlist`, {
        headers: {
            Authorization: token
        }
    });
}