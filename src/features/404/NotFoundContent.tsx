import React from 'react';
import BreadCrumbs from "../../components/common/BreadCrumbs";
import MaxWithLayout from "../../layouts/MaxWithLayout";
import GoldButton from "../../components/common/GoldButton";
import { useRouter } from 'next/navigation'

const NotFoundContent = () => {

    const router = useRouter()

    const breadCrumbs = [
        {
            id: 1,
            path: '/',
            title: 'Главная'
        },
        {
            id: 2,
            path: '/',
            title: 'Ошибка 404'
        },
    ]

    return (
        <MaxWithLayout isPaddingTop={true}>
            <BreadCrumbs elements={breadCrumbs}/>

            <div className="not-found">
                <h1>
                    Страница не найдена! (404)
                </h1>
                <p>
                    Страница, на которую вы хотели перейти, не найдена.
                    Возможно, введен некорректный запрос или страница была удалена.
                </p>
                <GoldButton
                    onClick={() => router.push(`/`)}
                    padding={'22px 30px'}
                    width={'auto'}
                    title={'Вернуться на главную'}
                />
            </div>
        </MaxWithLayout>
    );
};

export default NotFoundContent;
