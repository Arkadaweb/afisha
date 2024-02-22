import React, {FC, PropsWithChildren} from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import AboutContent from "../../features/about/AboutContent";

const About: FC<PropsWithChildren<any>> = () => {

    return (
        <Meta title={'О компании'}>
            <MainLayout>
                <AboutContent/>
            </MainLayout>
        </Meta>
    );
};

export default About;
