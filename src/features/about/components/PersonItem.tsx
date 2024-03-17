import React, { FC, PropsWithChildren } from 'react';
import personItemImg from '../../../../public/person-item-img.png'
import Image from "next/dist/client/legacy/image";

const PersonItem: FC<PropsWithChildren<any>> = ({
                      item
                    }) => {

    return (
        <div className='person-item'>
            <div className="person-item-img">
                <Image
                    src={item?.image_link}
                    objectFit={'contain'}
                    layout="responsive"
                    width={91}
                    height={100}
                />
            </div>
            <h3>
              {item?.name}
            </h3>
            <p>
              {item?.job_title}
            </p>
        </div>
    );
};

export default PersonItem;
