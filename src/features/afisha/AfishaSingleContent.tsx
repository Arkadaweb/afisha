import React, {useEffect, useRef, useState} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import afishaSingle from '../../../public/afisha-single.png'
import GoldButton from "../../components/common/GoldButton";
import TimeIcon from "../../assets/icons/afisha/TimeIcon";
import CalendarIcon from "../../assets/icons/afisha/CalendarIcon";
import PartnerItem from "../../components/common/PartnerItem";
import partnerImg from "../../../public/partner-img.png";
import ReactPlayer from "react-player";
import {useOrderTicket} from "../../components/modals/OrderTicketController";

const AfishaSingleContent = () => {

    const playerRef = useRef(null);

    const uOrderTicket = useOrderTicket()
    const [isIos, setIsIos] = useState('')

    const onOpenAfisha = (item: any) => {
        if (isIos === 'IOS') {
            window.open(`https://btickets.ru/widget/${item.id}/scheme`, '_blank');
        } else {
            uOrderTicket({
                isOpen: true,
                id: item?.id
            })
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.navigator) {
            const userAgent = window.navigator.userAgent;
            const isiPhone = /iPhone/i.test(userAgent);

            if (isiPhone) {
                setIsIos('IOS')
            } else {
                setIsIos(userAgent)
            }
        }
    }, []);


    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/',
            title: 'Афиша'
        },
        {
            id: 2,
            path: '/afisha',
            title: 'Название мероприятия'
        },
    ]

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="afisha-single-main">
                <div className="afisha-single-main-img">
                    <Image
                        src={afishaSingle}
                        // layout={'fill'}
                        // objectFit={'cover'}
                        // objectFit={'fill'}
                        objectFit={'contain'}
                        layout="responsive"
                    />
                </div>
                <div className="afisha-single-main-data">
                    <h1>
                        MINECRAFT ШОУ
                    </h1>
                    <div className="afisha-single-main-data-info">
                        <div className="afisha-single-main-data-info-block">
                            <TimeIcon/>
                            17 февраля, 12:00
                        </div>
                        <div className="afisha-single-main-data-info-block">
                            <CalendarIcon/>
                            ДК Железнодорожников
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <div className="afisha-single-main-data-price">
                        от 800 руб.
                    </div>
                    <GoldButton
                        onClick={() => onOpenAfisha({id: 1})}
                        title={'Купить билет'}
                        padding={'22px 80px'}
                    />
                </div>
            </div>

            <div className="afisha-single-partner">
                <h2>
                    Партнеры мероприятия
                </h2>
                <div className="afisha-content-partners-items">
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                    <PartnerItem img={partnerImg}/>
                </div>
            </div>

            <div className="afisha-single-video">
                <h2>
                    Видеоматериал
                </h2>
                <div className="afisha-single-video-wrap">
                    <ReactPlayer
                        ref={playerRef}
                        url={'https://www.youtube.com/watch?v=HghHApc6uRY'}
                        width="100%"
                        height="100%"
                        controls
                    />
                </div>
            </div>

            <div className="afisha-single-info">
                <p>
                    Организатор: ООО "Компас"
                </p>
                <p>
                    Адрес: 000000, г. Тюмень, ул. _____________
                </p>
                <p>
                    ИНН: 0000000000 ОГРН: 000000000000
                </p>
            </div>


        </MaxWithLayout>
    );
};

export default AfishaSingleContent;
