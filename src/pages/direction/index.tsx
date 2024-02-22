import React from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import DirectionContent from "../../features/direction/DirectionContent";

const Direction = () => {

    return (
        <Meta title={'Направления деятельности'}>
            <MainLayout>
               <DirectionContent/>
            </MainLayout>
        </Meta>
    );
};

export default Direction;
