import axios from "axios";
import { baseURL } from "../constants/Urls";

// Função para remover uma música específica de uma playlist
export const removeTrackFromPlaylist = async (token, playlistId, songId) => {
    try {
      const url = `${baseURL}/${playlistId}/song/${songId}`;
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



  // exemplo de uso:
//   const [playlistId, setPlaylistId] = useState('dfa98354-97f9-43b9-95c7-fa859d40a787');
//   const [songId, setSongId] = useState('a');

//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgxZTg2NzhlLWUyN2YtNDA0Zi1iM2FiLWI5YzJhYjk4ZWUzYiIsImlhdCI6MTY5NjI2ODI5NSwiZXhwIjoxNjk2MjY5NzM1fQ.CbSDZAmbNcRTjjXRuYlpBYXL5ujJ1fZogRp1EttzuXU';

//   const handleRemoveTrack = async () => {
//     try {
//       const result = await removeTrackFromPlaylist(token, playlistId, songId);
//       console.log('Música removida da playlist com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao remover música da playlist:', error);
//     }
//   };