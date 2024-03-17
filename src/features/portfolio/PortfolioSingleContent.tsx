import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import directionImg from "../../../public/direction-img.png";
import {Modal} from "antd";
import GoldButton from "../../components/common/GoldButton";
import PartnerItem from "../../components/common/PartnerItem";
import partnerImg from "../../../public/partner-img.png";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import("dayjs/locale/ru");


const PortfolioSingleContent: FC<PropsWithChildren<any>> = ({
                                    pageData
                                }) => {

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: 'portfolio',
            title: 'Портфолио'
        },
        {
            id: 3,
            path: '',
            title: pageData?.title?.rendered
        },
    ]

    useEffect(() => {
        dayjs.extend(utc);
        dayjs.extend(timezone);
        dayjs.tz.setDefault('Europe/Moscow');
        dayjs.locale('ru');
    }, [])

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

            <div className="portfolio-single">
                <h1>
                    {pageData?.title?.rendered}
                </h1>
                <p>
                    {dayjs(pageData?.date_gmt).format("DD MMMM, HH:mm")} {' '}
                    {pageData?.event_location}
                </p>
                <div className="portfolio-single-desc">
                    <p>
                        {pageData?.description_column_1}
                    </p>
                    <p>
                        {pageData?.description_column_2}
                    </p>
                </div>
                <h2>
                    Фото и видео
                </h2>
                <div className="portfolio-single-items">
                    <div className="portfolio-single-items-img" onClick={() => openModal(directionImg)}>
                        <Image
                            src={directionImg}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="portfolio-single-items-img" onClick={() => openModal(directionImg)}>
                        <Image
                            src={directionImg}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="portfolio-single-items-img" onClick={() => openModal(directionImg)}>
                        <Image
                            src={directionImg}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="portfolio-single-items-img" onClick={() => openModal(directionImg)}>
                        <Image
                            src={directionImg}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                </div>

                <div className="portfolio-single-show-more">
                    <GoldButton
                        title={'Показать ещё'}
                        padding={'18px 40px'}
                    />
                </div>

                <div className="portfolio-single-partner">
                    <h2>
                        Информационные партнеры
                    </h2>
                    <div className="portfolio-single-partner-items">
                        {
                            pageData?.partners?.map((item: any) =>
                              <PartnerItem img={item?.image_link}/>
                            )
                        }
                    </div>
                </div>
            </div>

            <Modal
                visible={modalVisible}
                onCancel={closeModal}
                footer={null}
                bodyStyle={{padding: 0}}
                centered
            >
                <div className="modal-wrap-img">
                    {currentImage &&
                    <Image
                        src={currentImage}
                        alt="Full-size"
                        objectFit={'fill'}
                    />
                    }
                </div>

            </Modal>

        </MaxWithLayout>
    );
};

export default PortfolioSingleContent;
