import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";
import afishaMainInfo from "../../../public/afisha-main-info.png";
import GoldButton from "./GoldButton";
import { useRouter } from "next/router";

const WeBanner: FC<PropsWithChildren<any>> = ({
                                                bannerData,
                                                onClick
                                              }) => {

  const router = useRouter()

  return (
    <div className="we-banner-info">
      <div className="we-banner-info-img">
        <img
          onClick={onClick}
          src={bannerData?.image_link}
          loading={'lazy'}
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
