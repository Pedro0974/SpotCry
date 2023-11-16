// components/playlist/PlaylistComponents
import React from "react";
// import {

// } from './Style';

// TODO: Criar Crud da Playlist
// 1° - Criar função para buscar playlists do usuario logado
// 2° - Criar tabela com as informações das playlists
// 3° - Criar botão de adicionar playlist
// 4° - Criar modal de criar playlist
// 5° - Criar botões de editar e deletar na tabela

export const Playlist = (user) => {

    // funções para criar a playlist 
    const [playlistData, setPlaylistData] = useState({});
    
      const token = localStorage.getItem('token');
    
      const handleCreatePlaylist = async () => {
        setPlaylistData = {
            userId: user,
            songs: [],
            description: '',
            name: ''
        }
        try {
          const result = await createPlaylist(token, playlistData);
          console.log('Playlist criada com sucesso:', result);
        } catch (error) {
          console.error('Erro ao criar a playlist:', error);
        }
      };

    return (
        <>
        </>
    )
}