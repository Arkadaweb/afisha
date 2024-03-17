import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";

const PartnerItem: FC<PropsWithChildren<any>> = ({
                                                   img
                                                 }) => {

  return (
    <div className='partner-item'>
      <Image
        src={img}
        objectFit={'contain'}
        layout="fill"
      />
    </div>
  );
};

export default PartnerItem;
