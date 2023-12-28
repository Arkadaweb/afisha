import '../styles/main.scss'

import React, {useEffect} from 'react';
import {AppProps} from "next/app";
import {NextFonts} from "../components/common/NextFonts";
import Head from "next/head";
import {Provider} from "react-redux";
import {persistor, store} from "../store/store";
import {ConfigProvider} from "antd";
import {PersistGate} from 'redux-persist/integration/react';
import NProgress from 'nprogress';
import Router from 'next/router';
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {OrderTicketController} from "../components/common/OrderTicketController";
import {CityController} from "../components/common/CityController";

import("dayjs/locale/ru");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Moscow');
dayjs.locale('ru');

export default function App({Component, pageProps}: AppProps) {


    NProgress.configure({
        minimum: 0.3,
        easing: 'ease',
        speed: 800,
        showSpinner: true,
    });

    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());

    const antdTheme: any = {
        token: {
            colorPrimary: 'rgba(75, 103, 233, 1)',
            controlInteractiveSize: 16,
            fontSize: 16,
            borderRadius: 13,
        },
        Pagination: {
            itemActiveBg: '#4B67E9',
            itemActiveBgDisabled: '#4B67E9',
            itemActiveColorDisabled: '#4B67E9',
            itemBg: '#4B67E9',
            itemInputBg: '#4B67E9',
            itemLinkBg: '#4B67E9',
        },
        Select: {
            optionFontSize: 200,
        },
    };

    return (
        <div>
            <NextFonts/>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no"
                />
                <link
                    rel="icon"
                    href="/favicon.png"
                    sizes="32x32"
                    type="image/x-icon"
                />
                <meta name="viewport"
                      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
            </Head>
            <ConfigProvider theme={antdTheme} locale={locale}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <OrderTicketController>
                            <CityController>
                                <Component {...pageProps} />
                            </CityController>
                        </OrderTicketController>
                    </PersistGate>
                </Provider>
            </ConfigProvider>
        </div>
    )

}
