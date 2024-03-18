import React, {FC, PropsWithChildren, useEffect} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import SliderCustom from "./components/SliderCustom";
import Afisha from "./components/Afisha";
import ReactPlayer from "react-player";

const MainContent: FC<PropsWithChildren<any>> = ({
                                                   pageData,
                                                   slider
                                                 }) => {

    return (
        <MaxWithLayout>
            <div className="main-content">
                <div className="main-content-video">
                    <ReactPlayer
                        url={pageData?.logo?.file_link}
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
                    <SliderCustom slides={slider}/>
                </div>
                <div className="main-content-afisha">
                    <Afisha/>
                </div>

                <div
                    style={{
                        margin: '120px 0',
                        color: 'rgba(197, 163, 94, 1)',
                        fontSize: 32,
                        fontWeight: 500
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
