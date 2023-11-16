import axios from "axios";
import { baseURL } from "../constants/Urls";

// Função para editar os detalhes de uma música existente
export const editSong = async (token, songId, updatedDetails) => {
    try {
      const url = `${baseURL}/${songId}`;
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


  //exemplo de uso para componente
//   const [songId, setSongId] = useState('a9ba8999-c2cd-44cb-a79e-d632678a422c');
//   const [updatedDetails, setUpdatedDetails] = useState({
//     title: 'Last Nite',
//     artist: 'Strokes',
//   });

//   const token = localStorage.getItem('token')
//   const handleEditSong = async () => {
//     try {
//       const result = await editSong(token, songId, updatedDetails);
//     } catch (error) {
//       console.error('Erro ao editar música:', error);
//     }
//   };