import React, {FC, PropsWithChildren} from 'react';
import Image from "next/dist/client/legacy/image";
import directionImg from '../../../../public/direction-img.png'
import GoldButton from "../../../components/common/GoldButton";
import {useRouter} from "next/router";
import {useLeaveMessage} from "../../../components/modals/LeaveMessageController";

const DirectionItem: FC<PropsWithChildren<any>> = () => {

    const router = useRouter();
    const uLeaveMessage = useLeaveMessage()

    return (
        <div className="direction-item">
            <div className="direction-item-img">
                <Image
                    src={directionImg}
                    // layout={'fill'}
                    objectFit={'cover'}
                    // objectFit={'fill'}
                    // objectFit={'contain'}
                    layout="responsive"
                />
            </div>
            <div className="direction-item-info">
                <h2>
                    Организация мероприятия под любой праздник
                </h2>
                <p>
                    Новый год, День нефтяника, День защиты детей — мы знаем, как подарить светлые эмоции и взрослым, и
                    детям круглый год
                </p>
                <div className="direction-item-info-buttons">
                    <GoldButton
                        onClick={() => uLeaveMessage(true)}
                        title={'Заказать'}
                        padding={'16px 30px'}
                        backColor={'rgba(9, 6, 47, 1)'}
                        color={'rgba(197, 163, 94, 1)'}
                    />
                    <GoldButton
                        onClick={() => router.push('direction/1')}
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
