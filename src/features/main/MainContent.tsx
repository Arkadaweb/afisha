import React, {FC, PropsWithChildren, useEffect} from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import SliderCustom from "./components/SliderCustom";
import Afisha from "./components/Afisha";
import ReactPlayer from "react-player";
import {createEvent, createStore, createEffect, sample, EventCallable} from 'effector'
import {useUnit} from "effector-react";
//
// interface StoreTest {
//     isLoading: boolean,
//     list: string[],
//     isError: string
// }
//
// const fetchUserReposFx = createEffect(async () => {
//     const url = `https://jsonplaceholder.typicode.com/posts`;
//     const req = await fetch(url);
//     return req.json();
// });
//
// export const $mainState = createStore<StoreTest>({
//     isLoading: true,
//     list: [],
//     isError: ''
// })
//     .on(fetchUserReposFx.finally, (store, data) => {
//         if (data.status === 'done') {
//             return (
//                 {
//                     list: [...data.result],
//                     isLoading: false,
//                     isError: '',
//                 }
//             )
//         } else if (data.status === 'fail') {
//             return (
//                 {
//                     list: [],
//                     isLoading: false,
//                     isError: String(data.error),
//                 }
//             )
//         } else {
//             return (
//                 {
//                     list: [],
//                     isLoading: false,
//                     isError: '',
//                 }
//             )
//         }
//     })

const MainContent: FC<PropsWithChildren<any>> = ({}) => {

    // const srore = useUnit($mainState)
    //
    //
    // useEffect(() => {
    //     fetchUserReposFx();
    // }, [])
    //
    // console.log(srore)


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
