import React from 'react';
import personItemImg from '../../../../public/person-item-img.png'
import Image from "next/dist/client/legacy/image";

const PersonItem = () => {

    return (
        <div className='person-item'>
            <div className="person-item-img">
                <Image
                    src={personItemImg}
                    objectFit={'cover'}
                    layout="responsive"
                />
            </div>
            <h3>
                Имя Фамилия
            </h3>
            <p>
                Должность
            </p>
        </div>
    );
};

export default PersonItem;
