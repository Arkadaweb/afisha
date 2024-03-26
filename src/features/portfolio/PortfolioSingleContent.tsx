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
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import("dayjs/locale/ru");


const PortfolioSingleContent: FC<PropsWithChildren<any>> = ({
                                                              pageData
                                                            }) => {


  const playerRef = useRef(null);
  const imgRef = useRef<any>(null);
  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/portfolio',
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

  const [modalVisibleVideo, setModalVisibleVideo] = useState(false);
  const [modalVisibleGalery, setModalVisibleGalery] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<any>(null);

  const openModal = (imageSrc: any, type: any) => {
    if (type === 'video') {
      setCurrentVideo(imageSrc);
    }
    setModalVisibleVideo(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setModalVisibleVideo(false);
    setModalVisibleGalery(false);
  };

  const handleImageClick = (index: any) => {
    setModalVisibleGalery(true);
    if (imgRef?.current){
      imgRef?.current?.slideToIndex(index as any)
    }
  };

  const imagesGel = pageData?.media_gallery?.filter((item: any) => item?.type === 'img')
    .map((item: any) => ({
      original: item?.link,
      thumbnail: item?.link
    }))

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="portfolio-single">

        <h1>
          {pageData?.title?.rendered}
        </h1>
        <p>
          {dayjs(pageData?.event_date_time).format("DD MMMM, HH:mm")} {' '}
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
        {imagesGel?.length !== 0 &&
        <>
            <h2>
                Фото
            </h2>
            <div className="portfolio-single-items">
              {
                imagesGel?.map((item: any, index: number) =>
                  <div
                    className="portfolio-single-items-img"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={item?.original}
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

        {
          pageData?.partners?.length !== 0 &&
          <div className="portfolio-single-partner">
              <h2>
                  Информационные партнеры
              </h2>
              <div className="portfolio-single-partner-items">
                {
                  pageData?.partners?.map((item: any) =>
                    <PartnerItem img={item?.image_link} href={item?.partner_link} />
                  )
                }
              </div>
          </div>
        }

      </div>

      <Modal
        visible={modalVisibleVideo}
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
          <ReactPlayer
            ref={playerRef}
            url={currentVideo}
            width="100%"
            height="100%"
            controls
          />
        </div>

      </Modal>

      <Modal
        visible={modalVisibleGalery}
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
          <ImageGallery
            ref={imgRef}
            items={
              pageData?.media_gallery?.filter((item: any) => item?.type === 'img')
                .map((item: any) => ({
                  original: item?.link,
                  thumbnail: item?.link
                }))
            }
          />
        </div>
      </Modal>

    </MaxWithLayout>
  );
};

export default PortfolioSingleContent;
