// components/footer/FooterComponents
import React from "react";
import icon from '../../assets/favicon.ico';
import {
    ContainerFooter,
    Footer,
    ColFooter,
    LogoFooter,
    ItemColFooter,
    TitleColFooter,
    IconFooter,
    ContainerIconsFooter,
    ContainerItemsFooter
} from './Style';

// TODO: Criação do Footer da seguinte maneira
// TODO: Footer deve ser GRID
// TODO: Cada ColFooter é uma coluna Grid
// TODO: A primeira coluna deve ter a logo em cima e os links para redes sociais em baixo
// TODO: As outras colunas devem ter um titulo e links  

export const FooterComponente = () => {

    return (
        <ContainerFooter>

            <Footer>

                <ColFooter>
                    <LogoFooter src={icon} alt="Logo-Footer" />
                    <ContainerIconsFooter>
                        <IconFooter />
                        <IconFooter />
                        <IconFooter />
                    </ContainerIconsFooter>
                </ColFooter>

                <ColFooter>
                    <TitleColFooter />
                    <ContainerItemsFooter>
                        <ItemColFooter />
                        <ItemColFooter />
                        <ItemColFooter />
                    </ContainerItemsFooter>
                </ColFooter>

                <ColFooter>
                    <TitleColFooter />
                    <ContainerItemsFooter>
                        <ItemColFooter />
                        <ItemColFooter />
                        <ItemColFooter />
                    </ContainerItemsFooter>
                </ColFooter>

                <ColFooter>
                    <TitleColFooter />
                    <ContainerItemsFooter>
                        <ItemColFooter />
                        <ItemColFooter />
                        <ItemColFooter />
                    </ContainerItemsFooter>
                </ColFooter>

            </Footer>

        </ContainerFooter>
    )
}