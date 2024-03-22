import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import("dayjs/locale/ru");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Moscow');
dayjs.locale('ru');

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
