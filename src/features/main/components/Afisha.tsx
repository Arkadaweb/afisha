import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Button, DatePicker} from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";
import Image from "next/dist/client/legacy/image";
import testImage from '../../../../public/test-slide-img.png'
import testImage1 from '../../../../public/testImage1.png'
import testImage2 from '../../../../public/testImage2.png'
import testImage3 from '../../../../public/testImage3.png'
import {useOrderTicket} from "../../../components/common/OrderTicketController";

const {RangePicker} = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = () => {

    const uOrderTicket = useOrderTicket()
    const [selectedDates, setSelectedDates] = useState<any>([]);
    const [pickerOpen, setPickerOpen] = useState<any>(false)

    const items = [
        {
            id: 5427,
            title: 'MINECRAFT ШОУ',
            place: '17 февраля, 15:00 ДК Железнодорожников',
            price: 'от 800 руб.',
            img: testImage1,
        },
        {
            id: 5428,
            title: 'MINECRAFT ШОУ',
            place: '17 февраля, 12:00 ДК Железнодорожников',
            price: 'от 800 руб.',
            img: testImage1
        },
        {
            id: 5387,
            title: 'Юлия Славянская',
            place: '08 мая, 19:00 ДК Железнодорожников',
            price: 'от 1000 руб.',
            img: testImage2
        },
        {
            id: 5461,
            title: 'Новогодняя ночь во дворце',
            place: '14 декабря, 19:00 ДК Железнодорожников',
            price: 'от 300 руб.',
            img: testImage3
        },
    ]

    const handleReset = () => {
        // Обработка сброса дат
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

    return (
        <div className="afisha">
            <h2>
                АФИША
            </h2>
            <div className="afisha-calendar">
                <div className="afisha-calendar-wrap">
                    <button
                        onClick={() => setPickerOpen(true)}
                    >
                        <CalendarIcon/>
                        Выбрать дату
                    </button>

                    <RangePicker
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
                        <div className="afisha-items-item" onClick={() => uOrderTicket({
                            isOpen: true,
                            id: item?.id
                        })}>
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
