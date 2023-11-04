// components/nav-bar/NavBarComponent
import React from "react";
import icon from '../../assets/favicon.ico';
import {
    ContainerNavBar,
    NavBar,
    LogoNavBar,
    ContainerLinksNavBar,
    ButtonLinkNavBar
} from './Style'

// TODO: Criar NavBar da Seguinte forma
// TODO: Componente Navbar deve ser between
// TODO: ContainerLinksNavBar vai ter botões de navegação da pagina um ao lado do outro
// TODO: Adicionar uma linha no botton do ContainerNavBar junto com um padding no eixo x

        
export const NavBarComponent = () => {

    return (
        
        <ContainerNavBar>
            <NavBar>
                <LogoNavBar src={icon} alt="Logo-nav-bar" />

                <ContainerLinksNavBar>
                    <ButtonLinkNavBar></ButtonLinkNavBar>
                    <ButtonLinkNavBar></ButtonLinkNavBar>
                    <ButtonLinkNavBar></ButtonLinkNavBar>
                </ContainerLinksNavBar>

            </NavBar>
        </ContainerNavBar>
    )
}