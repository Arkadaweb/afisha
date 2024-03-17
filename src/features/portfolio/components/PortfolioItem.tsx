import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";
import partfolioImg from '../../../../public/partfolio-item-img.png'
import Link from "next/link";
import dayjs from "dayjs";

import("dayjs/locale/ru");


const PortfolioItem: FC<PropsWithChildren<any>> = ({
                                                     item
                                                   }) => {

  return (
    <Link href={`/portfolio/${item?.slug}`} className="partfolio-item">
      <div className="partfolio-item-img">
        <Image
          src={partfolioImg}
          objectFit={'contain'}
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
