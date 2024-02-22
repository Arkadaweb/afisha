import React, {FC, PropsWithChildren} from 'react';

const GoldButton: FC<PropsWithChildren<any>> = ({
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
                padding,
                width,
                background: backColor ? backColor : isTransperent && 'transparent',
                border: isWithBorder ? '1px solid rgba(0, 0, 0, 1)' : 'none',
                color: color
            }}
        >
            {title}
        </button>
    );
};

export default GoldButton;
