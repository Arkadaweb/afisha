import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";

const Footer: FC<PropsWithChildren<any>> = ({
                                                footerMarginTop = 160,
                                            }) => {

    const navTop: any = [
        {
            id: 1,
            path: '',
            title: 'Услуги'
        },
        {
            id: 2,
            path: '',
            title: 'Требования к макетам'
        },
        {
            id: 3,
            path: '',
            title: 'Доставка и оплата'
        },
        {
            id: 4,
            path: '',
            title: 'Дизайн'
        },
        {
            id: 5,
            path: '',
            title: 'Контакты'
        },
    ]


    return (
        <div className="footer" style={{marginTop: footerMarginTop}}>
            <MaxWithLayout>

            </MaxWithLayout>
        </div>
    );
};

export default Footer;
