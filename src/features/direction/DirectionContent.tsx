import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import DirectionItem from "./components/DirectionItem";
import WeBanner from "../../components/common/WeBanner";
import PartnerSlider from "../../components/common/PartnerSlider";
import afishaMainInfo from "../../../public/afisha-main-info.png";
import { get } from "../../api/request";
import { message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons/lib";

const DirectionContent: FC<PropsWithChildren<any>> = ({
                                                        title,
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

  useEffect(() => {
    getDirections()
  }, [])

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="direction-content">
        <h1>
          {title}
        </h1>
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
            <div className="direction-content-items">
              {
                directions?.map((item: any) =>
                  <DirectionItem item={item} />
                )
              }
            </div>
        }

        <div className="direction-content-we">
          <WeBanner
            bannerData={pageData?.about}
          />
        </div>

        <div className="direction-content-slider">
          <PartnerSlider slides={{
            title: "Информационные партнеры",
            items: pageData?.partners
          }}/>
        </div>

      </div>

    </MaxWithLayout>
  );
};

export default DirectionContent;
