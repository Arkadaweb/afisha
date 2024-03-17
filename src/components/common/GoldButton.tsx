import React, { FC, PropsWithChildren } from 'react';
import { LoadingOutlined } from "@ant-design/icons/lib";
import { Spin } from "antd";

const GoldButton: FC<PropsWithChildren<any>> = ({
                                                  isLoading = false,
                                                  title = '',
                                                  padding = '22px 30px',
                                                  width = 'auto',
                                                  onClick = () => {
                                                  },
                                                  isTransperent = false,
                                                  isWithBorder = false,
                                                  backColor = '',
                                                  color = 'rgba(29, 29, 27, 1)'
                                                }) => {
  return (
    <button
      onClick={onClick}
      className='gold-button'
      style={{
        pointerEvents: isLoading ? 'none' : 'auto',
        opacity: isLoading ? 0.5 : 1,
        padding,
        width,
        background: backColor ? backColor : isTransperent && 'transparent',
        border: isWithBorder ? '1px solid rgba(0, 0, 0, 1)' : 'none',
        color: color
      }}
    >
      {
        isLoading
          ?
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 25, color: '#000' }} />}
          />
          : title

      }
    </button>
  );
};

export default GoldButton;
