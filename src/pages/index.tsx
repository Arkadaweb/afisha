import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import Meta from "../seo/Meta";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../features/main/MainContent";

const Home: FC<PropsWithChildren<any>> = ({

                                              meta
                                          }) => {

    const [isIos, setIsIos] = useState('')
    useEffect(() => {
        // Проверка наличия объекта navigator в окружении браузера
        if (typeof window !== 'undefined' && window.navigator) {
            const userAgent = window.navigator.userAgent;

            // Проверка, содержит ли строка userAgent слово "iPhone"
            const isiPhone = /iPhone/i.test(userAgent);

            if (isiPhone) {
                setIsIos('IOS')
                console.log('Пользователь зашел на сайт с iPhone');
                // Здесь можно выполнить необходимые действия для iPhone
            } else {
                setIsIos(userAgent)
            }
        }
    }, []);

    return (
        <Meta title={'Главная'}>
            <MainLayout
                meta={meta}

            >
                <div style={{
                    fontSize: 44,
                    color: '#fff'
                }}>
                    {isIos}
                </div>
                <MainContent/>
            </MainLayout>
        </Meta>
    )
}

export async function getStaticProps(context: any) {

    try {

        return {
            props: {},
            revalidate: 60,
        }
    } catch (e: any) {
        return {
            props: {},
            revalidate: 60,
        }
    }
}

export default Home;
