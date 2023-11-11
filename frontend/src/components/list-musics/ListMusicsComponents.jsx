import React, {useState} from "react";
// import {
//     ContainerListMusics,
//     Music
// } from "./Style";

// TODO: implementar mapeamento da lista de musicas
// 1° - criar função que busca lista de musica de acordo com a playlist passada
// 2° - mapeamento no jsx da lista de musica

export const ListMusics = ({playlist}) => {
    const [listMusics, setListMusics] = useState[[]]

    render (
        <ContainerListMusics>
            {/* mapear lista de musicas no componente abaixo*/}
            <Music>

            </Music>
        </ContainerListMusics>
    )
}