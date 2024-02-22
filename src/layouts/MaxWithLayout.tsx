import React, {FC, PropsWithChildren} from 'react';

const MaxWithLayout: FC<PropsWithChildren<any>> = ({
                                                       children,
                                                       isPaddingTop = false
                                                   }) => {

    return (
        <div
            style={{
                maxWidth: 1340,
                margin: '0 auto',
                padding: '0 20px',
            }}
        >
            <div className={isPaddingTop ? 'margin-top-main' : ''}>
                {children}
            </div>
        </div>
    );
};

export default MaxWithLayout;
