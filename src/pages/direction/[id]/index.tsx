import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import Meta from "../../../seo/Meta";
import MainLayout from "../../../layouts/MainLayout";
import AfishaSingleContent from "../../../features/afisha/AfishaSingleContent";
import DirectionSingeContent from "../../../features/direction/DirectionSingeContent";

const DirectionById: FC<PropsWithChildren<any>> = ({

                                              meta
                                          }) => {

    return (
        <Meta title={'Афиша'}>
            <MainLayout
                meta={meta}
            >
                <DirectionSingeContent/>
            </MainLayout>
        </Meta>
    )
}


export default DirectionById;
