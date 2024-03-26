import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";
import directionImg from '../../../../public/direction-img.png'
import GoldButton from "../../../components/common/GoldButton";
import { useRouter } from "next/router";
import { useLeaveMessage } from "../../../components/modals/LeaveMessageController";

const DirectionItem: FC<PropsWithChildren<any>> = ({
                                                     item,
                                                     onClick
                                                   }) => {

  const router = useRouter();
  const uLeaveMessage = useLeaveMessage()

  return (
    <div className="direction-item">
      <div className="direction-item-img">
        <img
          onClick={onClick}
          src={item?.preview_image}
          loading={'lazy'}
        />
      </div>
      <div className="direction-item-img-mob">
        <img
          onClick={onClick}
          src={item?.preview_image}
          loading={'lazy'}
        />
      </div>
      <div className="direction-item-info">
        <h2>
          {
            item?.title?.rendered
          }
        </h2>
        <p>
          {
            item?.short_description
          }
        </p>
        <div className="direction-item-info-buttons">
          <GoldButton
            onClick={() => uLeaveMessage(true, `[Направление деятельности]: ${item?.title?.rendered}`)}
            title={'Заказать'}
            padding={'16px 30px'}
            backColor={'rgba(9, 6, 47, 1)'}
            color={'rgba(197, 163, 94, 1)'}
          />
          <GoldButton
            onClick={() => router.push(`direction/${item?.slug}`)}
            title={'Подробнее'}
            padding={'16px 30px'}
            isWithBorder={true}
            isTransperent={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectionItem;
