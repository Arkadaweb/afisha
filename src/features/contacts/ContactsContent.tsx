import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import PhoneIcon from "../../assets/icons/contscts/Phone";
import MailIcon from "../../assets/icons/contscts/MailIcon";
import TimeIcon from "../../assets/icons/contscts/TimeIcon";
import LocationIcon from "../../assets/icons/contscts/LocationIcon";
import TelegramIcon from "../../assets/icons/contscts/TelegramIcon";
import VkIcon from "../../assets/icons/contscts/VKIcon";
import InstIcon from "../../assets/icons/contscts/InstIcon";

const ContactsContent: FC<PropsWithChildren<any>> = () => {

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/',
            title: 'Контакты'
        },
    ]

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="contacts-content">
                <h1>
                    Контакты
                </h1>
                <div className="contacts-content-wrap">
                    <div className="contacts-content-wrap-info">
                        <a href='tel:+7 904-471-07-14' className="contacts-content-wrap-info-block">
                            <PhoneIcon/>
                            <p>
                                +7 904-471-07-14
                            </p>
                        </a>
                        <a href="mailto:showbiz.23@mail.ru" className="contacts-content-wrap-info-block">
                            <MailIcon/>
                            <p>
                                showbiz.23@mail.ru
                            </p>
                        </a>
                        <div className="contacts-content-wrap-info-block">
                            <TimeIcon/>
                            <p>
                                Пн-Пт 09:00 - 18:00
                            </p>
                        </div>
                        <div className="contacts-content-wrap-info-block">
                            <LocationIcon/>
                            <p>
                                628415, ХМАО — Югра, г.Сургут, ул. Магистральная, дом №36, офис №1
                            </p>
                        </div>
                        <div className="contacts-content-wrap-info-block">
                            <LocationIcon/>
                            <p>
                                628415, ХМАО — Югра, г.Сургут, ул. Магистральная, дом №36, офис №1
                            </p>
                        </div>
                        <div className="contacts-content-wrap-info-soc">
                            <a href="">
                                <TelegramIcon/>
                            </a>
                            <a href="">
                                <VkIcon/>
                            </a>
                            <a href="">
                                <InstIcon/>
                            </a>
                        </div>
                    </div>
                    <div className="contacts-content-wrap-map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acde7ba1fba2d97508e7760c6d5977a12cb7474ec61bdfb7d81ed2777e9c857d0&amp;source=constructor"
                            width="100%" height="100%" frameBorder="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </MaxWithLayout>
    );
};

export default ContactsContent;
