import React, {FC, PropsWithChildren, useState} from 'react';
import {Button, DatePicker} from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";

const {RangePicker} = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = () => {

    const [selectedDates, setSelectedDates] = useState([]);
    const [pickerVisible, setPickerVisible] = useState(false);

    const handleApply = () => {
        // Обработка применения выбранных дат
        console.log('Выбранные даты:', selectedDates);
        setPickerVisible(false); // Скрытие компонента DatePicker.RangePicker
    };

    const handleReset = () => {
        // Обработка сброса дат
        console.log('Выбранные даты:', selectedDates);

        setSelectedDates([]);
    };

    const handleRangeChangeTable = (dateStrings: any) => {
        console.log(dateStrings)
        // setSelectedDates([dateStrings[0], dateStrings[1]])
    }

    const [pickerOpen, setPickerOpen] = useState(false)

    return (
        <div className="afisha">
            <h2>
                АФИША
            </h2>
            <div className="afisha-calendar">
                <button
                    onClick={() => setPickerOpen(true)}
                >
                    <CalendarIcon/>
                    Выбрать дату
                    <RangePicker
                        onCalendarChange={(dates) => {
                            console.log(dates)
                            setSelectedDates(dates);
                        }}
                        value={selectedDates}
                        onOpenChange={(e) =>{
                            if (!e){
                                setPickerOpen(false)
                            }
                        }}
                        open={pickerOpen}
                        onChange={async (date: any) => {
                            await handleRangeChangeTable(date)
                            await setPickerOpen(false)
                        }}
                        renderExtraFooter={() => {
                            return (
                                <div style={{padding: 10, width: '100%', display: "flex", justifyContent: 'center', alignItems: "center"}}>
                                    <Button onClick={handleReset}>Сбросить</Button>
                                </div>
                            )
                        }}
                    />
                </button>
            </div>
            <div className="afisha-items">

            </div>
        </div>
    );
};

export default Afisha;
