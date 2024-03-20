import React, { FC, PropsWithChildren } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import Link from "next/link";
import logo from '../../../public/logo-small.png'
import Image from "next/dist/client/legacy/image";
import Phone from "../../assets/icons/footer/Phone";
import CustomInput from "../common/CustomInput";
import CityDropDown from "../common/CityDropDown";
import { useUnit } from "effector-react";
import { $contacts } from "../../models/Contacts";

const Footer: FC<PropsWithChildren<any>> = ({}) => {

  const data = useUnit($contacts)

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
              <a href={`tel:${data?.phone?.text}`} className="footer-content-top-main-phone">
                {data?.phone?.text}
              </a>
              <a href={`mailto:${data?.email?.text}`} className="footer-content-top-main-email">
                {data?.email?.text}
              </a>
              <div className="footer-content-top-main-icons">
                <a href={`tel:${data?.phone?.text}`}>
                  <Image
                    src={data?.phone?.icon}
                    width={24}
                    height={25}
                  />
                </a>
              </div>
              <CityDropDown />
            </div>
          </div>
          <div className="footer-content-nav">
            <div className="footer-content-nav-soc">
              {
                data?.social?.map((item: any) =>
                  <a href={item?.link} target="_blank">
                    <Image
                      src={item?.icon}
                      width={24}
                      height={25}
                    />
                  </a>
                )
              }
            </div>
            <div className="footer-content-nav-links">
              {
                nav?.map((item: any) =>
                  <Link href={item?.path}>
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
