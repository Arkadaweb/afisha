import React from 'react';
import Meta from "../../../seo/Meta";
import MainLayout from "../../../layouts/MainLayout";
import PortfolioSingleContent from "../../../features/portfolio/PortfolioSingleContent";

const PortfolioSingle = () => {

    return (
        <Meta title={'Портфолио'}>
            <MainLayout>
                <PortfolioSingleContent/>
            </MainLayout>
        </Meta>
    );
};

export default PortfolioSingle;
