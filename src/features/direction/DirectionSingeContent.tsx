import React from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import GoldButton from "../../components/common/GoldButton";
import LeaveMessageBlock from "../../components/common/LeaveMessageBlock";
import PortfolioSlider from "./components/PortfolioSlider";

const DirectionSingeContent = () => {

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: 'direction',
            title: 'Направления деятельности'
        },
        {
            id: 3,
            path: '',
            title: 'Организация мероприятия под любой праздник'
        },
    ]

    const handleDownload = () => {
        // Создаем объект Blob с данными для файла (в данном случае, просто текстовый файл)
        const data = 'Пример содержимого файла для скачивания.';
        const blob = new Blob([data], {type: 'text/plain'});

        // Создаем объект URL для Blob
        const url = URL.createObjectURL(blob);

        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.href = url;
        link.download = 'https://xn--80atghghgz.xn--p1ai/wp-content/uploads/2024/01/Компас_логотип_анимация_933х791_с_синим_фоном_вар_2.mp4';

        // Открываем ссылку в новой вкладке
        link.target = '_blank';

        // Добавляем ссылку в документ и эмулируем клик по ней
        document.body.appendChild(link);
        link.click();

        // Удаляем ссылку после скачивания
        document.body.removeChild(link);
    };

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="direction-single">
                <h1>
                    Организация мероприятия под любой праздник
                </h1>
                <div className="direction-single-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate
                    </p>
                </div>
                <div className="direction-single-price">
                    от 800 руб.
                </div>
                <div className="direction-single-buttons">
                    <GoldButton
                        padding={'22px 30px'}
                        title={'Заказать услугу'}
                    />
                    <GoldButton
                        onClick={() => handleDownload()}
                        padding={'22px 30px'}
                        title={'Скачать презентацию'}
                    />
                </div>

                <div className="direction-single-slider">
                    <PortfolioSlider/>
                </div>

                <div className="direction-single-questions">
                    <LeaveMessageBlock/>
                </div>
            </div>


        </MaxWithLayout>
    );
};

export default DirectionSingeContent;
