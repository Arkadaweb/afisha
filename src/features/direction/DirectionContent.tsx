import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import DirectionItem from "./components/DirectionItem";
import WeBanner from "../../components/common/WeBanner";
import PartnerSlider from "../../components/common/PartnerSlider";

const DirectionContent: FC<PropsWithChildren<any>> = () => {

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/',
            title: 'Направления деятельности'
        },
    ]

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="direction-content">
                <h1>
                    Направления деятельности
                </h1>

                <div className="direction-content-items">
                    <DirectionItem/>
                    <DirectionItem/>
                    <DirectionItem/>
                    <DirectionItem/>
                </div>

                <div className="direction-content-we">
                    <WeBanner/>
                </div>

                <div className="direction-content-slider">
                    <PartnerSlider/>
                </div>

            </div>

        </MaxWithLayout>
    );
};

export default DirectionContent;
