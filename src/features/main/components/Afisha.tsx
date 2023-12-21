import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Button, DatePicker} from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";
import Image from "next/dist/client/legacy/image";
import testImage from '../../../../public/test-slide-img.png'

const {RangePicker} = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = () => {

    const [selectedDates, setSelectedDates] = useState<any>([]);
    const [pickerOpen, setPickerOpen] = useState<any>(false)

    const items = [1,2,3,4]

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
                        <div className="afisha-items-item">
                            <div className="afisha-items-item-top">
                                <h2>
                                    MINECRAFT ШОУ
                                </h2>
                                <p>
                                    17 февраля, 12:00
                                    ДК Железнодорожников
                                </p>
                                <h3>
                                    от 800 руб.
                                </h3>
                                <div className="afisha-items-item-top-bot"/>
                            </div>
                            <div className="afisha-items-item-bottom">
                                <Image
                                    src={testImage}
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
