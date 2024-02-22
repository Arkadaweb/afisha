import React, {FC, PropsWithChildren} from 'react';
import Image from "next/dist/client/legacy/image";
import afishaMainInfo from "../../../public/afisha-main-info.png";
import GoldButton from "./GoldButton";
import {useRouter} from "next/router";

const WeBanner: FC<PropsWithChildren<any>> = () => {

    const router = useRouter()

    return (
        <div className="we-banner-info">
            <div className="we-banner-info-img">
                <Image
                    src={afishaMainInfo}
                    objectFit={'contain'}
                    layout="responsive"
                />
            </div>
            <div className="we-banner-info-data">
                <h2>
                    Мы ежегодно организуем более 60 мероприятий
                </h2>
                <p>
                    Концерты Юлии Савичевой, Нодара Ревия, Юлии Славянской, Варвары, MILANA STAR, выступления Ольги
                    Сычевой, группы «Белый орёл», Московского музыкального театра «Экспериментъ», оперетта «Сильва»
                    и другие
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
