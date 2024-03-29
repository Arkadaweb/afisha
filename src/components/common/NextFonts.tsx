import localFont from 'next/font/local'
import React from "react";

const fontInter = localFont({
    src: [
        {
            path: '../../assets/fonts/Inter-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/Inter-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/Inter-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-base',
    fallback: ['sans-serif'],
})

const fontTimes= localFont({
    src: [
        {
            path: '../../assets/fonts/TimesBold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-base',
    fallback: ['sans-serif'],
})



export const NextFonts = () => {
    return (
        <style jsx global>{`
          :root {
            --font-base: ${fontInter.style.fontFamily};
            --font-times: ${fontTimes.style.fontFamily};
          }
    `}</style>
    )
}
