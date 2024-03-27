import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import GoldButton from "../../components/common/GoldButton";
import LeaveMessageBlock from "../../components/common/LeaveMessageBlock";
import PortfolioSlider from "./components/PortfolioSlider";
import { useLeaveMessage } from "../../components/modals/LeaveMessageController";
import dayjs from "dayjs";
import { get } from "../../api/request";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons/lib";

const DirectionSingeContent: FC<PropsWithChildren<any>> = ({
                                                             pageData
                                                           }) => {

  const uLeaveMessage = useLeaveMessage()

  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/direction',
      title: 'Направления деятельности'
    },
    {
      id: 3,
      path: '',
      title: pageData?.title?.rendered
    },
  ]

  const handleDownload = () => {
    // Создаем объект Blob с данными для файла (в данном случае, просто текстовый файл)
    const data = 'Пример содержимого файла для скачивания.';
    const blob = new Blob([data], { type: 'text/plain' });

    // Создаем объект URL для Blob
    const url = URL.createObjectURL(blob);

    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.href = url;
    link.download = pageData?.external_button?.link;

    // Открываем ссылку в новой вкладке
    link.target = '_blank';

    // Добавляем ссылку в документ и эмулируем клик по ней
    document.body.appendChild(link);
    link.click();

    // Удаляем ссылку после скачивания
    document.body.removeChild(link);
  };

  const [isLoading, setIsLoading] = useState<any>(true)
  const [portfolio, setPortfolio] = useState<any>([])

  const getAfishes = () => {
    setIsLoading(true)
    let link = `wp-json/wp/v2/events?per_page=10&page=1&event_type=portfolio&area_activity=${pageData?.area_activity?.join(',')}`

    get(link)
      .then((res: any) => {
        setPortfolio(res?.data)
        console.log('res')
        console.log(res)
      })
      .catch((e: any) => {
        console.log(e?.response?.data?.data?.message)
        // message.error('Ошибка при получении портфолио')
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  useEffect(() => {
    getAfishes()
  }, [])


  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="direction-single">
        <h1>
          {pageData?.title?.rendered}
        </h1>
        <div className="direction-single-info">
          <p>
            {pageData?.description_column_1}
          </p>
          <p>
            {pageData?.description_column_2}
          </p>
        </div>
        {/*<div className="direction-single-price">*/}
        {/*  {*/}
        {/*    pageData?.title?.rendered !== "Концертная деятельность" &&*/}
        {/*      <>*/}
        {/*          от {pageData?.price} руб.*/}
        {/*      </>*/}
        {/*  }*/}
        {/*</div>*/}
        <div className="direction-single-buttons">
          <GoldButton
            onClick={() => uLeaveMessage(true)}
            padding={'22px 30px'}
            title={'Заказать услугу'}
          />
          {
            pageData?.external_button?.status !== 'hidden' &&
            <GoldButton
                onClick={() => handleDownload()}
                padding={'22px 30px'}
                title={pageData?.external_button?.name}
            />
          }

        </div>

        {
          isLoading
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
            <div className="direction-single-slider">
              <PortfolioSlider slides={portfolio}/>
            </div>
        }


        <div className="direction-single-questions">
          <LeaveMessageBlock subject={`[Страница направления деятельности]: ${pageData?.title?.rendered}`} />
        </div>
      </div>


    </MaxWithLayout>
  );
};

export default DirectionSingeContent;
