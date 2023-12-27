import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import Meta from "../seo/Meta";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../features/main/MainContent";

const Home: FC<PropsWithChildren<any>> = ({

                                              meta
                                          }) => {



    return (
        <Meta title={'Главная'}>
            <MainLayout
                meta={meta}

            >
                <MainContent/>
            </MainLayout>
        </Meta>
    )
}

export async function getStaticProps(context: any) {

    try {

        return {
            props: {},
            revalidate: 60,
        }
    } catch (e: any) {
        return {
            props: {},
            revalidate: 60,
        }
    }
}

export default Home;
