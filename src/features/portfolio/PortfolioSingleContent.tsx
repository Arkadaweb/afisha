import React, {useEffect, useState} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import directionImg from "../../../public/direction-img.png";
import {Modal} from "antd";
import GoldButton from "../../components/common/GoldButton";
import PartnerItem from "../../components/common/PartnerItem";
import partnerImg from "../../../public/partner-img.png";

const PortfolioSingleContent = () => {

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
            title: 'MINECRAFT ШОУ'
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

            <div className="portfolio-single">
                <h1>
                    MINECRAFT ШОУ
                </h1>
                <p>
                    17 февраля, 12:00 I ДК Железнодорожников
                </p>
                <div className="portfolio-single-desc">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
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
