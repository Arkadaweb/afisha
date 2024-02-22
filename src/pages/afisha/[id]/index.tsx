import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import Meta from "../../../seo/Meta";
import MainLayout from "../../../layouts/MainLayout";
import AfishaSingleContent from "../../../features/afisha/AfishaSingleContent";

const AfishaById: FC<PropsWithChildren<any>> = ({

                                              meta
                                          }) => {

    return (
        <Meta title={'Афиша'}>
            <MainLayout
                meta={meta}
            >
                <AfishaSingleContent/>
            </MainLayout>
        </Meta>
    )
}


export default AfishaById;
