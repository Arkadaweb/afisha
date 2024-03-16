import React, {FC, PropsWithChildren} from 'react';
import Image from "next/dist/client/legacy/image";
import afishaMainInfo from "../../../public/afisha-main-info.png";
import GoldButton from "./GoldButton";
import {useRouter} from "next/router";

const WeBanner: FC<PropsWithChildren<any>> = ({
                                                bannerData
                                              }) => {

    const router = useRouter()

    return (
        <div className="we-banner-info">
            <div className="we-banner-info-img">
                <Image
                    src={bannerData?.image_link}
                    objectFit={'contain'}
                    layout="responsive"
                    width={100}
                    height={60}
                />
            </div>
            <div className="we-banner-info-data">
                <h2>
                  {bannerData?.tittle}
                </h2>
                <p>
                  {bannerData?.description}
                </p>
                <GoldButton
                    onClick={() => router.push('about')}
                    padding={'16px 30px'}
                    title={'Больше о нас'}
                />
            </div>
        </div>
    );
};

export default WeBanner;
