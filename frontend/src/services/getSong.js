import axios from "axios";
import { baseURL } from "../constants/Urls";


// Função para obter detalhes de uma música específica
export const getSong = async (token, songId) => {
    try {
      const url = `${baseURL}/${songId}`;
      const response = await axios.get(url, {
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


  // exemplo de uso no componente
  const [songId, setSongId] = useState('');
  const [songDetails, setSongDetails] = useState(null);

  const token = localStorage.getItem('token')
  useEffect(() => {
    // Chamada à função getSong quando o componente é montado
    const fetchData = async () => {
      try {
        const result = await getSong(token, songId);
        setSongDetails(result);
      } catch (error) {
        console.error('Erro ao obter detalhes da música:', error);
      }
    };

    fetchData();
  }, [token, songId]);