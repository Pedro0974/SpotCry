import axios from "axios";
import { baseURL } from "../constants/Urls";
// Função para excluir uma playlist específica
export const deletePlaylist = async (token, playlistId) => {
    try {
      const url = `${baseURL}/${playlistId}`;
      const response = await axios.delete(url, {
        headers: {
          Authorization: token,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  };


  // exemplo de uso
//   const [playlistId, setPlaylistId] = useState('f5329daf-0e46-4c00-91ff-3d52472b7601');

//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxZTg2NzhlLWUyN2YtNDA0Zi1iM2FiLWI5YzJhYjk4ZWUzYiIsImlhdCI6MTY5NjI2ODI5NSwiZXhwIjoxNjk2MjY5NzM1fQ.CbSDZAmbNcRTjjXRuYlpBYXL5ujJ1fZogRp1EttzuXU';

//   const handleDeletePlaylist = async () => {
//     try {
//       const result = await deletePlaylist(token, playlistId);
//       console.log('Playlist excluída com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao excluir playlist:', error);
//     }
//   };