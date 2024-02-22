import React, {FC, PropsWithChildren} from 'react';
import Image from "next/dist/client/legacy/image";
import partfolioImg from '../../../../public/partfolio-item-img.png'
import Link from "next/link";

const PortfolioItem: FC<PropsWithChildren<any>> = () => {

    return (
        <Link href={'/portfolio/portfolio-single'} className="partfolio-item">
            <div className="partfolio-item-img">
                <Image
                    src={partfolioImg}
                    // layout={'fill'}
                    // objectFit={'cover'}
                    // objectFit={'fill'}
                    objectFit={'contain'}
                    layout="responsive"
                />
            </div>
            <h3>
                MINECRAFT ШОУ
            </h3>
            <p>
                17 февраля, 12:00 I ДК Железнодорожников
            </p>
        </Link>
    );
};

export default PortfolioItem;
