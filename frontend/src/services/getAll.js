import axios from "axios";
import { baseURL } from "../constants/Urls";


// Função para obter todas as músicas disponíveis
export const getAllSongs = async (token) => {
    try {
      const response = await axios.get(baseURL, {
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

//   const [songs, setSongs] = useState([]);

//   const token = localStorage.getItem('token')
//   useEffect(() => {
//     // Chamada à função getAllSongs quando o componente é montado
//     const fetchData = async () => {
//       try {
//         const result = await getAllSongs(token);
//         setSongs(result);
//       } catch (error) {
//         console.error('Erro ao obter todas as músicas:', error);
//       }
//     };

//     fetchData();
//   }, [token]);