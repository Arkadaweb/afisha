import React, { FC, PropsWithChildren, useEffect } from 'react';
import Image from "next/dist/client/legacy/image";
import partfolioImg from '../../../../public/partfolio-item-img.png'
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import("dayjs/locale/ru");


const PortfolioItem: FC<PropsWithChildren<any>> = ({
                                                     item
                                                   }) => {

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Europe/Moscow');
    dayjs.locale('ru');
  }, [])

  return (
    <Link href={`/portfolio/${item?.slug}`} className="partfolio-item">
      <div className="partfolio-item-img">
        <Image
          src={item?.event_preview_image}
          objectFit={'cover'}
          layout="responsive"
          width={100}
          height={59}
        />
      </div>
      <h3>
        {item?.title?.rendered}
      </h3>
      <p>
        {/*17 февраля, 12:00 I ДК Железнодорожников*/}
        {dayjs(item?.date_gmt).format("DD MMMM, HH:mm")} {' '}
        {item?.event_location}
      </p>
    </Link>
  );
};

export default PortfolioItem;
