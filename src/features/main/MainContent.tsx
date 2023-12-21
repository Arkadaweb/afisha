import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import Image from "next/dist/client/legacy/image";
import mainLogo from '../../../public/main-logo.png'
import SliderCustom from "./components/SliderCustom";
import Afisha from "./components/Afisha";

const MainContent: FC<PropsWithChildren<any>> = ({}) => {

    return (
        <MaxWithLayout>
            <div className="main-content">
                <div className="main-content-img">
                    <Image
                        // layout={'fill'}
                        src={mainLogo}
                        width={933}
                        height={undefined}
                        objectFit="contain"
                    />
                </div>
                <div className="main-content-slider">
                    <SliderCustom/>
                </div>
                <div className="main-content-afisha">
                    <Afisha/>
                </div>
            </div>
        </MaxWithLayout>
    );
};

export default MainContent;
