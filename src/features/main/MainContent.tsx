import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import SliderCustom from "./components/SliderCustom";
import Afisha from "./components/Afisha";
import ReactPlayer from "react-player";

const MainContent: FC<PropsWithChildren<any>> = ({}) => {

    return (
        <MaxWithLayout>
            <div className="main-content">
                <ReactPlayer
                    url={'https://xn--80atghghgz.xn--p1ai/wp-content/uploads/2023/12/Компас_логотип_анимация_с_фоном_1920х1080.mp4'}
                    controls={false}
                    playing={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                />
                {/*<div className="main-content-img">*/}

                {/*</div>*/}
                <div className="main-content-slider">
                    <SliderCustom/>
                </div>
                <div className="main-content-afisha">
                    <Afisha/>
                </div>

                <div
                    style={{
                        margin: '120px 0',
                        fontSize: 32,
                        fontWeight: 500,
                        lineHeight: '38px',
                        color: 'rgba(197, 163, 94, 1)'
                    }}
                >
                    Сейчас сайт находится в разработке, поэтому часть разделов пока недоступна, но вы уже сейчас можете
                    забронировать себе место на мероприятии - это главное!
                </div>
            </div>
        </MaxWithLayout>
    );
};

export default MainContent;
