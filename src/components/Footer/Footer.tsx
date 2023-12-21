import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import Link from "next/link";
import logo from '../../../public/logo-small.png'
import Image from "next/dist/client/legacy/image";
import {Input} from "antd";
import CityIcon from "../../assets/icons/footer/CityIcon";
import SearchIcon from "../../assets/icons/footer/SearchIcon";
import Phone from "../../assets/icons/footer/Phone";
import CustomInput from "../common/CustomInput";
import CityDropDown from "../common/CityDropDown";

const Footer: FC<PropsWithChildren<any>> = ({}) => {

    const nav: any = [
        {
            id: 1,
            path: '',
            title: 'Главная'
        },
        {
            id: 2,
            path: '',
            title: 'О компании'
        },
        {
            id: 3,
            path: '',
            title: 'Афиша'
        },
        {
            id: 4,
            path: '',
            title: 'Услуги'
        },
        {
            id: 5,
            path: '',
            title: 'Портфолио'
        },
        {
            id: 5,
            path: '',
            title: 'Контакты'
        },
    ]

    return (
        <div className="footer">
            <MaxWithLayout>
                <div className="footer-content">
                    <div className="footer-content-top">
                        <div className="footer-content-top-logo">
                            <Image
                                src={logo}
                                layout={'fill'}
                            />
                        </div>
                        <div className="footer-content-top-main">
                            <CustomInput/>
                            <a href={'tel:999999999'} className="footer-content-top-main-phone">
                                +7 904-471-07-14
                            </a>
                            <div className="footer-content-top-main-email">
                                showbiz.23@mail.ru
                            </div>
                            <div className="footer-content-top-main-icons">
                                <a href={'tel:999999999'} >
                                    <Phone/>
                                </a>
                            </div>
                           <CityDropDown/>
                        </div>
                    </div>
                    <div className="footer-content-nav">
                        {
                            nav?.map((item: any) =>
                            <Link href={item.path}>
                                {item?.title}
                            </Link>
                            )
                        }
                    </div>
                    <div className="footer-content-bottom">
                        <p>
                            © 2024 Все права защищены
                        </p>
                        <p>
                            Правила продажи и возврата билетов
                        </p>
                        <Link href={''}>
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>
            </MaxWithLayout>
        </div>
    );
};

export default Footer;
