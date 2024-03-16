import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import DirectionItem from "./components/DirectionItem";
import WeBanner from "../../components/common/WeBanner";
import PartnerSlider from "../../components/common/PartnerSlider";

const DirectionContent: FC<PropsWithChildren<any>> = ({
                                                          title
                                                      }) => {

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/',
            title: title
        },
    ]

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="direction-content">
                <h1>
                    {title}
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
