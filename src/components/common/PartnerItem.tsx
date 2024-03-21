import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";

const PartnerItem: FC<PropsWithChildren<any>> = ({
                                                   img,
                                                   href
                                                 }) => {

  return (
    <a href={href} className='partner-item'>
      <img
        src={img}
        loading={'lazy'}
      />
    </a>
  );
};

export default PartnerItem;
