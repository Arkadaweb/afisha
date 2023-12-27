import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BurgerIcon from "../../assets/icons/header/BurgerIcon";
import logo from '../../../public/logo-mob.png'
import Image from "next/dist/client/legacy/image";
import CrossIcon from "../../assets/icons/header/CrossIcon";
import PhoneIcon from "../../assets/icons/header/PhoneIcon";
import Link from "next/link";
import EmailIcon from "../../assets/icons/header/EmailIcon";
import PhoneBurgerIcon from "../../assets/icons/header/PhoneBurgerIcon";
import CustomInput from "../common/CustomInput";
import CityDropDown from "../common/CityDropDown";


const MobHeader: FC<PropsWithChildren<any>> = () => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

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
    
    useEffect(() => {
        let buildQuerySelector = document.querySelector('body')

        if (isOpenMenu && buildQuerySelector) {
            buildQuerySelector.style.overflowY = 'hidden'
        } else {
            if (buildQuerySelector){
                buildQuerySelector.style.overflowY = 'visible'
            }
        }
    }, [isOpenMenu])


    return (
        <div className="mob-header">
            <MaxWithLayout>
                <div className="mob-header-content">
                    <div className="mob-header-content-wrap">
                        <a href="tel:+7 904-471-07-14" className="mob-header-content-phone">
                            <PhoneIcon/>
                            +7 904-471-07-14
                        </a>
                        <div
                            className={`mob-header-content-burger ${isOpenMenu && 'mob-header-content-burger-hide'}`}
                            onClick={() => setIsOpenMenu(true)}
                        >
                            <BurgerIcon/>
                        </div>
                    </div>
                </div>
            </MaxWithLayout>
            <div className={`mob-header-menu ${isOpenMenu && 'mob-header-menu-open'}`}>
                <div className="mob-header-menu-top">
                    <div className="mob-header-menu-top-logo">
                        <Image
                            src={logo}
                            layout={'fill'}
                        />
                    </div>
                    <div className="mob-header-menu-top-close" onClick={() => setIsOpenMenu(false)}>
                        <CrossIcon/>
                    </div>
                </div>
                <div className="mob-header-menu-menu">
                    {
                        nav?.map((item: any) =>
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                        )
                    }
                </div>
                <div className="mob-header-menu-bottom">
                    <a href="tel:+7 904-471-07-14" className="mob-header-menu-bottom-phone">
                        <PhoneBurgerIcon/>
                        +7 904-471-07-14
                    </a>
                    <a href="mailto:+7 904-471-07-14" className="mob-header-menu-bottom-email">
                        <EmailIcon/>
                        showbiz.23@mail.ru
                    </a>
                    <div className="mob-header-menu-bottom-search">
                        <CustomInput
                            backgroundColor={'rgba(29, 29, 27, 1)'}
                            color={'rgba(197, 163, 94, 1)'}
                            iconColor={'rgba(197, 163, 94, 0.8)'}
                            placeholderColor={'light'}
                        />
                    </div>
                    <div className="mob-header-menu-bottom-city">
                        <CityDropDown
                            backgroundColor={'rgba(29, 29, 27, 1)'}
                            color={'rgba(197, 163, 94, 1)'}
                            iconColor={'rgba(197, 163, 94, 0.8)'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobHeader;
