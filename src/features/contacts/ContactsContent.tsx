import React, { FC, PropsWithChildren, useEffect } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import PhoneIcon from "../../assets/icons/contscts/Phone";
import MailIcon from "../../assets/icons/contscts/MailIcon";
import TimeIcon from "../../assets/icons/contscts/TimeIcon";
import LocationIcon from "../../assets/icons/contscts/LocationIcon";
import TelegramIcon from "../../assets/icons/contscts/TelegramIcon";
import VkIcon from "../../assets/icons/contscts/VKIcon";
import InstIcon from "../../assets/icons/contscts/InstIcon";
import Image from "next/dist/client/legacy/image";

const ContactsContent: FC<PropsWithChildren<any>> = ({
                                                       pageData,
                                                       title
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
      title: 'Контакты'
    },
  ]

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="contacts-content">
        <h1>
          {title}
        </h1>
        <div className="contacts-content-wrap">
          <div className="contacts-content-wrap-info">
            {
              pageData?.contact?.map((item: any) => {
                const isPhone = item?.text?.includes('+7')
                const isMain = item?.text?.includes('@')

                if (isPhone){
                  return (
                    <a href={`tel:${item?.text}`} className="contacts-content-wrap-info-block">
                      <Image
                        src={item?.icon}
                        width={24}
                        height={24}
                      />
                      <p>
                        {item?.text}
                      </p>
                    </a>
                  )
                } else if (isMain){
                  return (
                    <a href={`mailto:${item?.text}`} className="contacts-content-wrap-info-block">
                      <Image
                        src={item?.icon}
                        width={24}
                        height={24}
                      />
                      <p>
                        {item?.text}
                      </p>
                    </a>
                  )
                }
                return (
                  <div className="contacts-content-wrap-info-block">
                    <Image
                      src={item?.icon}
                      width={24}
                      height={24}
                    />
                    <p>
                      {item?.text}
                    </p>
                  </div>
                )
              })
            }
            {
              pageData?.address?.map((item: any) =>
                <div className="contacts-content-wrap-info-block">
                  <Image
                    src={item?.icon}
                    width={24}
                    height={24}
                  />
                  <p>
                    {item?.text}
                  </p>
                </div>
              )
            }
            <div className="contacts-content-wrap-info-soc">
              {
                pageData?.social?.map((item: any) =>
                  <a href={item?.text}>
                    <Image
                      src={item?.icon}
                      width={24}
                      height={25}
                    />
                  </a>
                )
              }
            </div>
          </div>
          <div className="contacts-content-wrap-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Acde7ba1fba2d97508e7760c6d5977a12cb7474ec61bdfb7d81ed2777e9c857d0&amp;source=constructor"
              width="100%" height="100%" frameBorder="0">
            </iframe>
          </div>
        </div>
      </div>
    </MaxWithLayout>
  );
};

export default ContactsContent;
