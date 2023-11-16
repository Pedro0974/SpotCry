import axios from "axios";
import { baseURL } from "../constants/Urls";

// Função para adicionar uma música a uma playlist específica
export const addSongToPlaylist = async (token, playlistId, songId) => {
    try {
      const url = `${baseURL}/${playlistId}/song`;
      const response = await axios.post(url, { songId }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  };


  // uso para colocar depois no componente
//   const [playlistId, setPlaylistId] = useState('');
//   const [songId, setSongId] = useState('');

//   const token = localStorage.getItem('token')
//   const handleAddSongToPlaylist = async () => {
//     try {
//       const result = await addSongToPlaylist(token, playlistId, songId);
//       console.log('Música adicionada à playlist com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao adicionar música à playlist:', error);
//     }
//   };
