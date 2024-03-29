import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
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
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Modal } from "antd";
import DirectionItem from "../direction/components/DirectionItem";

import("dayjs/locale/ru");

const AfishaSingleContent: FC<PropsWithChildren<any>>  = ({
                                 pageData
                             }) => {

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
        dayjs.extend(utc);
        dayjs.extend(timezone);
        dayjs.tz.setDefault('Europe/Moscow');
        dayjs.locale('ru');
    }, [])

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
            path: '/afisha',
            title: 'Афиша'
        },
        {
            id: 3,
            path: '',
            title: pageData?.title?.rendered
        },
    ]

    const [modalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (imageSrc: any) => {
        setCurrentImage(imageSrc);
        setModalVisible(true);
    };

    const closeModal = () => {
        setCurrentImage(null);
        setModalVisible(false);
    };

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="afisha-single-main">
                <div className="afisha-single-main-img">
                    <Image
                      onClick={() => openModal(pageData?.event_preview_image)}
                      src={pageData?.event_preview_image}
                      objectFit={'contain'}
                      layout="responsive"
                      width={100}
                      height={145}
                    />
                </div>
                <div className="afisha-single-main-data">
                    <h1>
                        {pageData?.title?.rendered}
                    </h1>
                    <div className="afisha-single-main-data-info">
                        <div className="afisha-single-main-data-info-block">
                            <TimeIcon/>
                            {dayjs(pageData?.event_date_time).format("DD MMMM, HH:mm")} {' '}
                        </div>
                        <div className="afisha-single-main-data-info-block">
                            <CalendarIcon/>
                            {pageData?.event_location}
                        </div>
                    </div>
                    <div className="afisha-single-main-data-price">
                        от {pageData?.btickets_min_price} р.
                    </div>
                    <GoldButton
                      onClick={() => onOpenAfisha({id: pageData?.btickets_id})}
                      title={'Купить билет'}
                      padding={'22px 80px'}
                    />
                    <p>
                        {pageData?.description_column_1}
                    </p>
                    <p>
                        {pageData?.description_column_2}
                    </p>

                </div>
            </div>

            {
                pageData?.partners?.length !== 0 &&
                <div className="afisha-single-partner">
                    <h2>
                        Партнеры мероприятия
                    </h2>
                    <div className="afisha-content-partners-items">
                        {
                            pageData?.partners?.map((item: any) =>
                              <PartnerItem img={item?.image_link} href={item?.partner_link}/>
                            )
                        }
                    </div>
                </div>
            }


            <div className="afisha-single-video">
                <h2>
                    Видеоматериал
                </h2>
                <div className="afisha-single-video-wrap">
                    <ReactPlayer
                        ref={playerRef}
                        url={pageData?.video_link}
                        width="100%"
                        height="100%"
                        controls
                    />
                </div>
            </div>

            <div className="afisha-single-info">
                <p dangerouslySetInnerHTML={{__html: pageData?.event_organizer_text || ''}}/>

            </div>

            <Modal
              visible={modalVisible}
              onCancel={closeModal}
              footer={null}
              bodyStyle={{ padding: 0 }}
              centered
              width={'100%'}
              style={{
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'rgba(0,0,0,0.7)'
              }}

            >
                <div className="modal-wrap-img">
                    {currentImage &&
                    <img
                      src={currentImage}
                    />
                    }
                </div>

            </Modal>
        </MaxWithLayout>
    );
};

export default AfishaSingleContent;
