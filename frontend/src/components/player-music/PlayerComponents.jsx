// components/player-music/PlayerComponents

import React, {useState, useEffect} from "react";
// import {
//     ContainerListPlaylists,
//     Playlist
// } from './Style';

// TODO: criar component que da play na musica
// 1° - criar função para receber a musica e dar play 
// 2° - criar um botão de pause, stop e next music
// 3° - criar um progress bar com o tempo atual da música
// 4° - criar um volume control

export const Player = ({user}) => {

    const [playlist, setPlaylist] = useState[[]]


    return (
        <ContainerListPlaylists>
            <Playlist>

            </Playlist>
        </ContainerListPlaylists>
    )
}