import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Button, DatePicker} from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";
import Image from "next/dist/client/legacy/image";
import testImage from '../../../../public/test-slide-img.png'
import testImage1 from '../../../../public/testImage1.png'
import testImage11 from '../../../../public/tesImage1.1.png'
import testImage2 from '../../../../public/testImage2.png'
import testImage3 from '../../../../public/testImage3.png'
import testImage31 from '../../../../public/testimage3.1.png'
import testImage4 from '../../../../public/testmImage4.png'
import {useOrderTicket} from "../../../components/common/OrderTicketController";

const {RangePicker} = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = () => {

    const uOrderTicket = useOrderTicket()
    const [selectedDates, setSelectedDates] = useState<any>([]);
    const [pickerOpen, setPickerOpen] = useState<any>(false)
    const [isIos, setIsIos] = useState('')

    const items = [
        {
            id: 5428,
            title: 'MINECRAFT ШОУ',
            place: '17 февраля, 12:00 ДК Железнодорожников',
            price: 'от 800 руб.',
            img: testImage11,
        },
        {
            id: 5427,
            title: 'MINECRAFT ШОУ',
            place: '17 февраля, 15:00 ДК Железнодорожников',
            price: 'от 800 руб.',
            img: testImage11
        },
        {
            id: 5387,
            title: 'Юлия Славянская',
            place: '08 мая, 19:00 ДК Железнодорожников',
            price: 'от 1000 руб.',
            img: testImage31
        },
        // {
        //     id: 5461,
        //     title: 'Новогодняя ночь во дворце',
        //     place: '14 декабря, 19:00 ДК Железнодорожников',
        //     price: 'от 300 руб.',
        //     img: testImage4
        // },
    ]

    const handleReset = () => {
        console.log('Выбранные даты:', selectedDates);

        setSelectedDates([]);
    };

    const handleRangeChangeTable = (dateStrings: any) => {
        console.log(dateStrings)
        // setSelectedDates([dateStrings[0], dateStrings[1]])
    }

    const onClose = () => {
        console.log('1')
        setPickerOpen(false)
    }

    const onOpenAfisha = (item: any) => {
        if (isIos === 'IOS') {
            window.open(`https://btickets.ru/widget/${item.id}/scheme`, '_blank');
        } else {
            uOrderTicket({
                isOpen: true,
                id: item?.id
            })
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.navigator) {
            const userAgent = window.navigator.userAgent;
            const isiPhone = /iPhone/i.test(userAgent);

            if (isiPhone) {
                setIsIos('IOS')
            } else {
                setIsIos(userAgent)
            }
        }
    }, []);

    const highlightedDates = [
        '2023-12-17',
        '2023-12-15',
        '2023-12-13',
        // Добавьте другие даты, которые вы хотите выделить
    ];

    // Функция для проверки, нужно ли выделить определенный день
    const isHighlighted = (date: any) => {
        return highlightedDates.includes(date.format('YYYY-MM-DD'));
    };

    const dateCellRender = (current: any) => {
        const date = current.format('YYYY-MM-DD');
        // if (isHighlighted(current)) {
        //     return (
        //         <div className="highlighted-date">
        //             {current.date()}
        //         </div>
        //     );
        // }
        return <div>{current.date()}</div>;
    };

    return (
        <div className="afisha">
            <div className="afisha-title">
                <h2>
                    АФИША
                </h2>
            </div>
            <div className="afisha-calendar">
                <div className="afisha-calendar-wrap">
                    <button
                        onClick={() => setPickerOpen(true)}
                    >
                        <CalendarIcon/>
                        Выбрать дату
                    </button>

                    <RangePicker
                        dateRender={dateCellRender}
                        format={"dd.MM.yyyy"}
                        onCalendarChange={(dates) => {
                            console.log(dates)
                            setSelectedDates(dates);
                        }}
                        value={selectedDates}
                        onOpenChange={(e) => {
                            if (!e) {
                                setPickerOpen(false)
                            }
                        }}
                        open={pickerOpen}
                        onChange={async (date: any) => {
                            await handleRangeChangeTable(date)
                            await setPickerOpen(false)
                        }}
                        renderExtraFooter={(e) => {
                            return (
                                <div className="extra-footer-calendar">
                                    <Button
                                        onClick={handleReset}
                                        className="extra-footer-calendar-button"
                                    >
                                        Сбросить
                                    </Button>
                                    <Button
                                        onClick={onClose}
                                        className="extra-footer-calendar-button"
                                    >
                                        Закрыть
                                    </Button>
                                </div>
                            )
                        }}
                    />
                </div>

            </div>
            <div className="afisha-items">
                {
                    items?.map((item: any) =>
                        <div className="afisha-items-item" onClick={() => onOpenAfisha(item)}>
                            <div className="afisha-items-item-top">
                                <h2>
                                    {item?.title}
                                </h2>
                                <p>
                                    {item?.place}
                                </p>
                                <h3>
                                    {item?.price}
                                </h3>
                                <div className="afisha-items-item-top-bot"/>
                            </div>
                            <div className="afisha-items-item-bottom">
                                <Image
                                    src={item?.img}
                                    layout={'fill'}
                                    objectFit={'fill'}
                                />
                                <div className="afisha-items-item-bottom-bot"/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Afisha;
