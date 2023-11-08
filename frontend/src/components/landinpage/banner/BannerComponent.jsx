// components/landinpage/banner/BannerComponents
import React from "react";
import { 
    ContainerBanner,
    ContainerInfos,
    InfosText,
    TitleInfo,
    ContextInfo,
    InfoButton,
    ContainerDecorations
} from "./Style";

// TODO: o container banner deve ser um retangulo 
// TODO: no meio da tela com efeito blur

// TODO: containerinfos tem dois elementos dentro
// TODO: um elemntro infostext para um tituo e um texto
// TODO: outro elemento para botao de chamada 

// TODO: e um containerdecorations para ter uma decoração abaixo das infos
export const BannerComponent = () => {
    
    return (
        <ContainerBanner>
            <ContainerInfos>
                <InfosText>
                    <TitleInfo></TitleInfo>
                    <ContextInfo></ContextInfo>
                </InfosText>
                <InfoButton></InfoButton>
            </ContainerInfos>
            <ContainerDecorations>

            </ContainerDecorations>
        </ContainerBanner>
    )
}