import axios from "axios";
import { baseURL } from "../constants/Urls";


// Função para excluir uma música da plataforma
export const deleteSong = async (token, songId) => {
    try {
      const url = `${baseURL}/${songId}`;
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

//   const [songId, setSongId] = useState('');

//   const token = localStorage.getItem('token')
//   const handleDeleteSong = async () => {
//     try {
//       const result = await deleteSong(token, songId);
//       console.log('Música excluída com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao excluir música:', error);
//     }
//   };