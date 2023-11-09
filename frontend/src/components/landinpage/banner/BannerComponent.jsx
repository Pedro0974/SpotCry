// components/landinpage/banner/BannerComponents

import React from "react";
import {
    ContainerBanner,
    ContainerHeader,
    TituloHeader,
    ContextHeader,
    ContainerPricings,
    Pricing,
    TypePricing,
    PricingFlat,
    ListOptions,
    ButtonGetStarted

} from './Style'
export const BannerComponent = () => {

    const listPricing = [
        {
            type: 'Free',
            pricing: 'Free for everyone',
            listOptions: [],
            contextButton: 'Get started with free'
        },
        {
            type: 'Standard',
            pricing: '$8 per user/mounth',
            listOptions: [],
            contextButton: 'Get started with standard'
        },
        {
            type: 'Plus',
            pricing: '$14 per user/mounth',
            listOptions: [],
            contextButton: 'Get started with plus'
        }
    ]
    
    return (
        <ContainerBanner>
            <ContainerHeader>
                <TituloHeader></TituloHeader>
                <ContextHeader></ContextHeader>
            </ContainerHeader>

            <ContainerPricings>
                {/* fazer o mapeamento dos preços */}
                <Pricing>
                    <TypePricing></TypePricing>
                    <PricingFlat></PricingFlat>
                    <ul>
                        {/* mapear lista de opções */}
                        <ListOptions></ListOptions>
                    </ul>
                    <ButtonGetStarted></ButtonGetStarted>
                </Pricing>
            </ContainerPricings>
            
        </ContainerBanner>
    )
}
