import React, {FC, PropsWithChildren} from 'react';
import GoldButton from "../../../components/common/GoldButton";
import Image from "next/dist/client/legacy/image";
import afishaSingle from "../../../../public/afisha-single.png";
import starItemImg from '../../../../public/star-item-img.png'
import Link from "next/link";

const StarItem: FC<PropsWithChildren<any>> = () => {

    return (
        <Link href={'/portfolio/test'} className="start-item">
            <div className="start-item-img">
                <Image
                    src={starItemImg}
                    // layout={'fill'}
                    // objectFit={'cover'}
                    // objectFit={'fill'}
                    objectFit={'contain'}
                    layout="responsive"
                />
            </div>
            <div className="start-item-bottom">
                <h3>
                    Имя исполнителя Фамилия
                </h3>
                <GoldButton
                    title={'Мероприятие'}
                    padding={"14px 16px"}
                />
            </div>
        </Link>
    );
};

export default StarItem;
