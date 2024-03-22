import React, { FC, PropsWithChildren } from 'react';
import GoldButton from "../../../components/common/GoldButton";
import Image from "next/dist/client/legacy/image";
import afishaSingle from "../../../../public/afisha-single.png";
import starItemImg from '../../../../public/star-item-img.png'
import Link from "next/link";

const StarItem: FC<PropsWithChildren<any>> = ({
                                                item
                                              }) => {


  return (
    <Link href={`/portfolio/${item?.attached_page?.slug}`} className="start-item">
      <div className="start-item-img">
        <img
          src={item?.image_link}
        />
      </div>
      <div className="start-item-bottom">
        <h3 dangerouslySetInnerHTML={{__html: item?.title?.rendered || ''}}/>
        <GoldButton
          title={'Мероприятие'}
          padding={"14px 16px"}
        />
      </div>
    </Link>
  );
};

export default StarItem;
