// pages/HomeView
import React from "react";
import { BannerComponent } from '../components/landinpage/banner/BannerComponent';
import { MainComponents } from "../components/landingpage/main/MainComponents";
export const HomeView = () => {
    
    return (
        <div>
            <BannerComponent />   
            <MainComponents />
        </div>
    )
}