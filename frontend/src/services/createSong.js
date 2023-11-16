import axios from "axios";
import { baseURL } from "../constants/Urls";


// Função para adicionar uma nova música à plataforma
export const createSong = async (token, songData) => {
    try {
      const response = await axios.post(baseURL, songData, {
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



  // exemplo de uso no componente

//   const [songData, setSongData] = useState({
//     title: 'Last Nite',
//     artist: 'The Strokes',
//     url: 'https://www.youtube.com/watch?v=TOypSnKFHrE',
//   });

//   const token = localStorage.getItem('token')
//   const handleCreateSong = async () => {
//     try {
//       const result = await createSong(token, songData);
//       console.log('Música adicionada com sucesso:', result);
//     } catch (error) {
//       console.error('Erro ao adicionar música:', error);
//     }
//   };