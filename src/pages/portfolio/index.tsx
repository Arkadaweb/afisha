import React from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import PortfolioContent from "../../features/portfolio/PortfolioContent";

const Portfolio = () => {

    return (
        <Meta title={'Портфолио'}>
            <MainLayout>
                <PortfolioContent/>
            </MainLayout>
        </Meta>
    );
};

export default Portfolio;
