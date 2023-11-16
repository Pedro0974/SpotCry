import axios from "axios";
import { baseURL } from "../constants/Urls";


// Função para editar os detalhes de uma playlist
export const editPlaylist = async (token, playlistId, updatedDetails) => {
    try {
      const url = `${baseURL}/${playlistId}`;
      const response = await axios.patch(url, updatedDetails, {
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


  // exemplo de uso

//   const [playlistId, setPlaylistId] = useState('');
//   const [updatedDetails, setUpdatedDetails] = useState({
//     name: '',
//   });

//   const token = localStorage.getItem('token')
//   const handleEditPlaylist = async () => {
//     try {
//       const result = await editPlaylist(token, playlistId, updatedDetails);
//       console.log('Detalhes da playlist atualizados com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao editar playlist:', error);
//     }
//   };