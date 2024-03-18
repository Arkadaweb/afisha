import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import directionImg from "../../../public/direction-img.png";
import { Modal } from "antd";
import GoldButton from "../../components/common/GoldButton";
import PartnerItem from "../../components/common/PartnerItem";
import partnerImg from "../../../public/partner-img.png";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ReactPlayer from "react-player";

import("dayjs/locale/ru");


const PortfolioSingleContent: FC<PropsWithChildren<any>> = ({
                                                              pageData
                                                            }) => {

  console.log('pageData')
  console.log(pageData)

  const playerRef = useRef(null);
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
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (imageSrc: any, type: any) => {
    if (type === 'img') {
      setCurrentImage(imageSrc);
    }
    if (type === 'video') {
      setCurrentVideo(imageSrc);
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setCurrentVideo(null);
    setModalVisible(false);
  };

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

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
        {pageData?.media_gallery?.filter((item: any) => item?.type === 'img')?.length !== 0 &&
        <>
            <h2>
                Фото
            </h2>
            <div className="portfolio-single-items">
              {
                pageData?.media_gallery?.filter((item: any) => item?.type === 'img')?.map((item: any) =>
                  <div className="portfolio-single-items-img" onClick={() => openModal(item?.link, item?.type)}>
                    <Image
                      src={item?.link}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )
              }
            </div>
        </>
        }
        {pageData?.media_gallery?.filter((item: any) => item?.type === 'video')?.length !== 0 &&
        <>
            <h2>
                Видео
            </h2>
            <div className="portfolio-single-items">
              {
                pageData?.media_gallery?.filter((item: any) => item?.type === 'video')?.map((item: any) =>
                  <div className="portfolio-single-items-img" onClick={() => openModal(item?.link, item?.type)}>
                    <Image
                      src={item?.preview}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )
              }
            </div>
        </>
        }


        {/*<div className="portfolio-single-show-more">*/}
        {/*  <GoldButton*/}
        {/*    title={'Показать ещё'}*/}
        {/*    padding={'18px 40px'}*/}
        {/*  />*/}
        {/*</div>*/}

        <div className="portfolio-single-partner">
          <h2>
            Информационные партнеры
          </h2>
          <div className="portfolio-single-partner-items">
            {
              pageData?.partners?.map((item: any) =>
                <PartnerItem img={item?.image_link} />
              )
            }
          </div>
        </div>
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
          height: '100vh'
        }}
      >
        <div className="modal-wrap-img">
          {currentImage &&
          <Image
              src={currentImage}
              layout={'fill'}
              objectFit={'contain'}
              style={{ width: '100%', height: 'auto' }}
          />
          }
          {currentVideo &&
          <ReactPlayer
              ref={playerRef}
              url={currentVideo}
              width="100%"
              height="100%"
              controls
          />
          }
        </div>

      </Modal>

    </MaxWithLayout>
  );
};

export default PortfolioSingleContent;
