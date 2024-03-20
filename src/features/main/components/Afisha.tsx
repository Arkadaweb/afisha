import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Button, DatePicker, Spin } from "antd";
import CalendarIcon from "../../../assets/icons/common/CalendarIcon";
import Image from "next/dist/client/legacy/image";
import testImage11 from '../../../../public/testImage11.jpg'
import testImage31 from '../../../../public/testImage31.jpg'
import testImage41 from '../../../../public/testImage41.jpg'
import testImage51 from '../../../../public/testImage51.jpg'
import { useOrderTicket } from "../../../components/modals/OrderTicketController";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { get } from "../../../api/request";
import { LoadingOutlined } from "@ant-design/icons/lib";
import { useRouter } from "next/router";
import { onsetDate } from "../../../models/Afisha";

import("dayjs/locale/ru");

const { RangePicker } = DatePicker;

const Afisha: FC<PropsWithChildren<any>> = ({}) => {

  const [isLoading, setIsLoading] = useState<any>(true)
  const [afishes, setAfishes] = useState<any>([])

  const getAfishes = () => {
    get(`wp-json/wp/v2/events?per_page=10&event_type=afisha&page=1&per_page=4`)
      .then((res: any) => {
        setAfishes(res?.data)
      })
      .catch()
      .finally(() => {
        setIsLoading(false)
      });
  }

  const uOrderTicket = useOrderTicket()
  const [selectedDates, setSelectedDates] = useState<any>([]);
  const [pickerOpen, setPickerOpen] = useState<any>(false)
  const [isIos, setIsIos] = useState('')
  const router = useRouter();

  useEffect(() => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Europe/Moscow');
    dayjs.locale('ru');
    getAfishes()
  }, [])


  const handleReset = () => {
    console.log('Выбранные даты:', selectedDates);

    setSelectedDates([]);
  };

  const handleRangeChangeTable = (dateStrings: any) => {
    console.log(dateStrings)
    // setSelectedDates([dateStrings[0], dateStrings[1]])
    onsetDate([dateStrings[0], dateStrings[1]])
    router.push(`/afisha`)
  }

  const onClose = () => {
    console.log('1')
    setPickerOpen(false)
  }

  const onOpenAfisha = (id: any) => {
    if (isIos === 'IOS') {
      window.open(`https://btickets.ru/widget/${id}/scheme`, '_blank');
    } else {
      uOrderTicket({
        isOpen: true,
        id: id
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
            <CalendarIcon />
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
            onChange={async(date: any) => {
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
      {
        isLoading
          ? <div
            style={{
              height: '100%',
              width: '100%',
              paddingTop: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: "center",
            }}
          >
            <Spin
              indicator={<LoadingOutlined style={{fontSize: 120, color: '#fff'}}/>}
            />
          </div>
          : <div className="afisha-items">
            {
              afishes?.map((item: any) =>
                // <div className="afisha-items-item" onClick={() => onOpenAfisha(item?.btickets_id)}>
                <div className="afisha-items-item" onClick={() => router.push(`/afisha/${item?.slug}`)}>
                  <div className="afisha-items-item-top">
                    <h2>
                      {item?.title?.rendered}
                    </h2>
                    <p>
                      {dayjs(item?.date_gmt).format("DD MMMM, HH:mm")} {' '}
                      {item?.event_location}
                    </p>
                    <h3>
                      от {item?.btickets_min_price} р.
                    </h3>
                    <div className="afisha-items-item-top-bot" />
                  </div>
                  <div className="afisha-items-item-bottom">
                    <Image
                      src={item?.event_preview_image}
                      objectFit={'contain'}
                      layout="responsive"
                      width={70}
                      height={100}
                    />
                    <div className="afisha-items-item-bottom-bot" />
                  </div>
                </div>
              )
            }
          </div>
      }

    </div>
  );
};

export default Afisha;
