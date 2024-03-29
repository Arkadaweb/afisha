import '../styles/main.scss'

import React, { useEffect } from 'react';
import { AppProps } from "next/app";
import { NextFonts } from "../components/common/NextFonts";
import Head from "next/head";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { ConfigProvider } from "antd";
import { PersistGate } from 'redux-persist/integration/react';
import NProgress from 'nprogress';
import Router from 'next/router';
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { OrderTicketController } from "../components/modals/OrderTicketController";
import { CityController } from "../components/modals/CityController";
import { LeaveMessageController } from "../components/modals/LeaveMessageController";
import FetchStartProvider from "../providers/FetchStartProvider";

import("dayjs/locale/ru");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Moscow');
dayjs.locale('ru');

export default function App({ Component, pageProps }: AppProps){


  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Europe/Moscow');
    dayjs.locale('ru');
  }, [])

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
      <NextFonts />
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
                })
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(96824580, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/96824580"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
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
              content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
      </Head>
      <FetchStartProvider>
        <ConfigProvider theme={antdTheme} locale={locale}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <OrderTicketController>
                <CityController>
                  <LeaveMessageController>
                    <Component {...pageProps} />
                  </LeaveMessageController>
                </CityController>
              </OrderTicketController>
            </PersistGate>
          </Provider>
        </ConfigProvider>
      </FetchStartProvider>
    </div>
  )

}
