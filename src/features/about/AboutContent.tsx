import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Image from "next/dist/client/legacy/image";
import aboutMainImg from '../../../public/about-main.png'
import TeamSlider from "./components/TeamSlider";
import PartnerSlider from "../../components/common/PartnerSlider";
import LettersSlider from "./components/LettersSlider";
import DirectionItem from "../direction/components/DirectionItem";
import GoldButton from "../../components/common/GoldButton";
import LeaveMessageBlock from "../../components/common/LeaveMessageBlock";
import StarItem from "./components/StarItem";
import { get } from "../../api/request";
import { message, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons/lib";
import CustomPagination from "../../components/common/CustomPagination";
import { useUnit } from "effector-react";
import { $contacts } from "../../models/Contacts";

const AboutContent: FC<PropsWithChildren<any>> = ({
                                                    title,
                                                    pageData
                                                  }) => {

  // console.log('pageData')
  // console.log(pageData)

  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/',
      title: title
    },
  ]

  const [isLoadingDirections, setIsLoadingDirections] = useState<any>(true)
  const [directions, setDirections] = useState<any>([])


  const getDirections = () => {
    let link = 'wp-json/wp/v2/activities_services'

    get(link)
      .then((res: any) => {
        setDirections(res)
      })
      .catch(() => {
        message.error('Ошибка при получении направлений')
      })
      .finally(() => {
        setIsLoadingDirections(false)
      });
  }

  const [isLoadingStart, setIsLoadingStart] = useState<any>(true)
  const [stars, setStars] = useState<any>([])
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const getStart = () => {
    setIsLoadingStart(true)
    let link = `wp-json/wp/v2/event_performers?page=${page}&per_page=${limit}`

    get(link)
      .then((res: any) => {
        setStars(res?.data)
        setTotalPage(res?.headers['X-WP-Total'])
        console.log('start')
        console.log(res)
      })
      .catch(() => {
        message.error('Ошибка при получении звезд')
      })
      .finally(() => {
        setIsLoadingStart(false)
      });
  }

  useEffect(() => {
    getDirections()
    getStart()
  }, [])

  useEffect(() => {
    getStart()
  }, [page])

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
      <BreadCrumbs elements={breadCrumbs} />

      <div className="about">
        <h1>
          {title}
        </h1>
        <div className="about-intro-img">
          <img
            onClick={() => openModal(pageData?.intro_image_link)}
            src={pageData?.intro_image_link}
            loading={'lazy'}
          />
        </div>
        <div className="about-desc">

          <h2>
            {pageData?.title_description}
          </h2>
          <div className="about-desc-p">
            <p dangerouslySetInnerHTML={{ __html: pageData?.description_column_1 || '' }} />
            <p dangerouslySetInnerHTML={{ __html: pageData?.description_column_2 || '' }} />
          </div>
        </div>

        <div className="about-team">
          <TeamSlider slides={pageData?.slider_team?.items} />
        </div>

        <div className="about-work-with-us">
          <PartnerSlider slides={pageData?.slider_partners} />
        </div>

        <div className="about-letters">
          <LettersSlider slides={pageData?.slider_letters} />
        </div>

        {
          isLoadingDirections
            ? <div
              style={{
                height: '100%',
                width: '100%',
                paddingTop: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
              }}
            >
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 120, color: '#fff' }} />}
              />
            </div>
            :
            <div className="about-directions">
              <h2>
                Направления деятельности
              </h2>
              <div className="about-directions-items">
                {
                  directions?.map((item: any) =>
                    <DirectionItem
                      item={item}
                      onClick={() => openModal(item?.preview_image)}
                    />
                  )
                }
              </div>
            </div>
        }

        {
          isLoadingStart
            ?
            <div
              style={{
                height: '100%',
                width: '100%',
                paddingTop: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
              }}
            >
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 120, color: '#fff' }} />}
              />
            </div>
            :
            <div className="about-stars">
              <h2>
                Звезды, с которыми мы работали
              </h2>
              <div className="about-stars-items">
                {
                  stars?.map((item: any) =>
                    <StarItem item={item} />
                  )
                }
              </div>
              {
                totalPage && totalPage > 6 &&
                <div className="about-stars-button">
                    <CustomPagination
                        total={totalPage}
                        limit={limit}
                        page={page}
                        changePage={setPage}
                    />
                </div>
              }

            </div>
        }
        <div className="about-questions">
          <LeaveMessageBlock subject={'[Страница о компании]: Главная форма'} />
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

export default AboutContent;
