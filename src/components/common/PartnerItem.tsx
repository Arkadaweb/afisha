import React, { FC, PropsWithChildren } from 'react';
import Image from "next/dist/client/legacy/image";

const PartnerItem: FC<PropsWithChildren<any>> = ({
                                                   img
                                                 }) => {

  return (
    <div className='partner-item'>
      <img
        src={img}
        loading={'lazy'}
      />
    </div>
  );
};

export default PartnerItem;
