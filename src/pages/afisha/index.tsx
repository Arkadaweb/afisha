import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import AfishaContent from "../../features/afisha/AfishaContent";
import Meta from "../../seo/Meta";

const Home: FC<PropsWithChildren<any>> = ({

                                              meta
                                          }) => {

    return (
        <Meta title={'Афиша'}>
            <MainLayout
                meta={meta}
            >
                <AfishaContent/>
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
