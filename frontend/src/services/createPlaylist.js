import axios from "axios";
import { baseURL } from "../constants/Urls";

// Função para criar uma nova playlist
export const createPlaylist = async (token, playlistData) => {
  try {
    const response = await axios.post(baseURL, playlistData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};
