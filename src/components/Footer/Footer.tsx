import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import Link from "next/link";
import logo from '../../../public/logo-small.png'
import Image from "next/dist/client/legacy/image";
import Phone from "../../assets/icons/footer/Phone";
import CustomInput from "../common/CustomInput";
import CityDropDown from "../common/CityDropDown";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setCityOpen} from '../../store/slices/citySlice'
import TelegrammICon from "../../assets/icons/footer/TelegrammICon";
import VkIcon from "../../assets/icons/footer/VkIcon";
import InstIcon from "../../assets/icons/footer/InstIcon";

const Footer: FC<PropsWithChildren<any>> = ({}) => {

    const nav: any = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/about',
            title: 'О компании'
        },
        {
            id: 3,
            path: '/afisha',
            title: 'Афиша'
        },
        {
            id: 4,
            path: '/direction',
            title: 'Направления деятельности'
        },
        {
            id: 5,
            path: '/portfolio',
            title: 'Портфолио'
        },
        {
            id: 5,
            path: '/contacts',
            title: 'Контакты'
        },
    ]

    const cosLinks = [
        {
            id: 1,
            path: '',
            icon: <TelegrammICon/>
        },
        {
            id: 2,
            path: '',
            icon: <VkIcon/>
        },
        {
            id: 3,
            path: '',
            icon: <InstIcon/>
        },
    ]

    return (
        <div className="footer">
            <MaxWithLayout>
                <div className="footer-content">
                    <div className="footer-content-top">
                        <Link href={'/'} className="footer-content-top-logo">
                            <Image
                                src={logo}
                                layout={'fill'}
                            />
                        </Link>
                        <div className="footer-content-top-main">
                            <CustomInput />
                            <a href={'tel:+7 904-471-07-14'} className="footer-content-top-main-phone">
                                +7 904-471-07-14
                            </a>
                            <a href={'mailto:showbiz.23@mail.ru'} className="footer-content-top-main-email">
                                showbiz.23@mail.ru
                            </a>
                            <div className="footer-content-top-main-icons">
                                <a href={'tel:999999999'}>
                                    <Phone/>
                                </a>
                            </div>
                            <CityDropDown/>
                        </div>
                    </div>
                    <div className="footer-content-nav">
                        <div className="footer-content-nav-soc">
                            {
                                cosLinks?.map((item: any) =>
                                    <Link href={item.path}>
                                        {item?.icon}
                                    </Link>
                                )
                            }
                        </div>
                        <div className="footer-content-nav-links">
                            {
                                nav?.map((item: any) =>
                                    <Link href={item.path}>
                                        {item?.title}
                                    </Link>
                                )
                            }

                        </div>
                    </div>
                    <div className="footer-content-bottom">
                        <p>
                            © 2024 Все права защищены
                        </p>
                        <Link href={'/policy-privacy'}>
                            Правила продажи и возврата билетов
                        </Link>
                        <Link href={'policy-privacy'}>
                            Политика конфиденциальности
                        </Link>
                    </div>
                </div>
            </MaxWithLayout>
        </div>
    );
};

export default Footer;
