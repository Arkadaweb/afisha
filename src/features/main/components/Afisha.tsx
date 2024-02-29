import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Button, DatePicker} from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";
import Image from "next/dist/client/legacy/image";
import testImage11 from '../../../../public/testImage11.jpg'
import testImage31 from '../../../../public/testImage31.jpg'
import testImage41 from '../../../../public/testImage41.jpg'
import testImage51 from '../../../../public/testImage51.jpg'
import {useOrderTicket} from "../../../components/modals/OrderTicketController";

const {RangePicker} = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = () => {

    const uOrderTicket = useOrderTicket()
    const [selectedDates, setSelectedDates] = useState<any>([]);
    const [pickerOpen, setPickerOpen] = useState<any>(false)
    const [isIos, setIsIos] = useState('')

    const items = [
        // {
        //     id: 5428,
        //     title: 'MINECRAFT ШОУ',
        //     place: '17 февраля, 12:00 ДК Железнодорожников',
        //     price: 'от 800 руб.',
        //     img: testImage11,
        // },
        // {
        //     id: 5427,
        //     title: 'MINECRAFT ШОУ',
        //     place: '17 февраля, 15:00 ДК Железнодорожников',
        //     price: 'от 800 руб.',
        //     img: testImage11
        // },
        {
            id: 5387,
            title: 'Юлия Славянская',
            place: '08 мая, 19:00 ДК Железнодорожников',
            price: 'от 1000 руб.',
            img: testImage31
        },
        {
            id: 5929,
            title: 'Однажды вечером',
            place: '09 апреля, 19:00 ДК Железнодорожников',
            price: 'от 1500 руб.',
            img: testImage41
        },
        {
            id: 6134,
            title: 'Группа Лесоповал',
            place: '25 апреля, 21:00 Ресторан Максимилианс',
            price: 'От 2000 руб',
            img: testImage51
        },
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
                                    // layout={'fill'}
                                    // objectFit={'cover'}
                                    // objectFit={'fill'}
                                    objectFit={'contain'}
                                    layout="responsive"
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
