// pages/HomeView
import React from "react";
import { BannerComponent } from '../components/landinpage/banner/BannerComponent';
import { MainComponents } from "../components/landingpage/main/MainComponents";
import { InfosComponents } from "../components/landinpage/infos/InfosComponents";

export const HomeView = () => {
    
    return (
        <div>
            <BannerComponent /> 
            <InfosComponents />
            <MainComponents />
        </div>
    )
}