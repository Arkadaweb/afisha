import React, { FC, PropsWithChildren, useEffect } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Link from "next/link";
import Image from "next/dist/client/legacy/image";
import testImage11 from "../../../public/testImage11.jpg";
import testImage31 from "../../../public/testImage31.jpg";
import testImage41 from "../../../public/testImage41.jpg";
import PortfolioItem from "../portfolio/components/PortfolioItem";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import("dayjs/locale/ru");

const SearchContent: FC<PropsWithChildren<any>> = ({
                                                     searchData,
                                                     searchValue
                                                   }) => {


  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Europe/Moscow');
    dayjs.locale('ru');
  }, [])

  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '',
      title: 'Результаты поиска'
    },
  ]

  const items = [
    {
      id: 5428,
      title: 'MINECRAFT ШОУ',
      place: '17 февраля, 12:00 ДК Железнодорожников',
      price: 'от 800 руб.',
      img: testImage11,
    },
    {
      id: 5427,
      title: 'MINECRAFT ШОУ',
      place: '17 февраля, 15:00 ДК Железнодорожников',
      price: 'от 800 руб.',
      img: testImage11
    },
    {
      id: 5387,
      title: 'Юлия Славянская',
      place: '08 мая, 19:00 ДК Железнодорожников',
      price: 'от 1000 руб.',
      img: testImage31
    },
    {
      id: 5929,
      title: 'Однажды вечером',
      place: '09 апреля, 19:00 ДК Железнодорожников',
      price: 'от 1500 руб.',
      img: testImage41
    },
  ]


  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="search">
        <h1>
          Результаты поиска по запросу "{searchValue}"
        </h1>
        {
          searchData?.length === 0 || !searchData
            ? <div className="search-enpty">
            По данному запросу ничего не найдено
            </div>
            : <>
              <div className="search-afisha">
                <h4>
                  Афиша
                </h4>
                <div className="search-afisha-items">
                  {
                    searchData?.filter((elem: any) => elem?.event_type === "afisha")?.map((item: any) =>
                      <Link href={`/afisha/${item?.slug}`} className="afisha-items-item">
                        <div className="afisha-items-item-top">
                          <h2>
                            {item?.title?.rendered}
                          </h2>
                          <p>
                            {dayjs(item?.date_gmt).format("DD MMMM, HH:mm")} {' '}
                          </p>
                          <p>
                            {item?.event_location}
                          </p>
                          <h3>
                            от {item?.btickets_min_price} р.
                          </h3>
                          <div className="afisha-items-item-top-bot" />
                        </div>
                        <div className="afisha-items-item-bottom">
                          <Image
                            src={item?.event_preview_image}
                            objectFit={'contain'}
                            layout="responsive"
                            width={70}
                            height={100}
                          />
                          <div className="afisha-items-item-bottom-bot" />
                        </div>
                      </Link>
                    )
                  }
                </div>
              </div>
              <div className="search-portfolio">
                <h4>
                  Портфолио
                </h4>
                <div className="search-portfolio-items">
                  {
                    searchData?.filter((elem: any) => elem?.event_type === "portfolio")?.map((item: any) =>
                      <PortfolioItem item={item}/>
                    )
                  }
                </div>
              </div>
            </>
        }

      </div>
    </MaxWithLayout>
  );
};

export default SearchContent;
