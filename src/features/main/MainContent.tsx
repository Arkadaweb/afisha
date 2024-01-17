import React, {FC, PropsWithChildren} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import SliderCustom from "./components/SliderCustom";
import Afisha from "./components/Afisha";
import ReactPlayer from "react-player";

const MainContent: FC<PropsWithChildren<any>> = ({}) => {

    return (
        <MaxWithLayout>
            <div className="main-content">
                <div className="main-content-video">
                    <ReactPlayer
                        url={'https://xn--80atghghgz.xn--p1ai/wp-content/uploads/2024/01/Компас_логотип_анимация_933х791_с_синим_фоном_вар_2.mp4'}
                        controls={false}
                        playing={true}
                        loop={true}
                        muted={true}
                        width={'100%'}
                        height={'100%'}
                        playsinline
                    />
                </div>
                {/*<div className="main-content-img">*/}

                {/*</div>*/}
                <div className="main-content-slider">
                    <SliderCustom/>
                </div>
                <div className="main-content-afisha">
                    <Afisha/>
                </div>

                <div className='test-text'>
                    Сейчас сайт находится в разработке, поэтому часть разделов пока недоступна, но вы уже сейчас можете
                    забронировать себе место на мероприятии - это главное!
                </div>
            </div>
        </MaxWithLayout>
    );
};

export default MainContent;
