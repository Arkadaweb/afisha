import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import partnerImg from "../../../public/partner-img.png";
import CalendarIcon from "../../assets/icons/common/CalendarIcon";
import { Button, DatePicker, message, Spin } from "antd";
import Image from "next/dist/client/legacy/image";
import PartnerItem from "../../components/common/PartnerItem";
import LeaveMessageBlock from "../../components/common/LeaveMessageBlock";
import Link from "next/link";
import WeBanner from "../../components/common/WeBanner";
import { useUnit } from "effector-react";
import { $dateToSort } from "../../models/Afisha";
import { get } from "../../api/request";
import { LoadingOutlined } from "@ant-design/icons/lib";
import dayjs from "dayjs";
import CustomPagination from "../../components/common/CustomPagination";

const { RangePicker } = DatePicker;

const AfishaContent: FC<PropsWithChildren<any>> = ({
                                                     title,
                                                     pageData
                                                   }) => {

  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/',
      title: title
    },
  ]

  const dates = useUnit($dateToSort)

  const [selectedDates, setSelectedDates] = useState<any>([]);
  const [pickerOpen, setPickerOpen] = useState<any>(false)

  const [isLoading, setIsLoading] = useState<any>(true)
  const [isLoadingPartner, setIsLoadingPartner] = useState<any>(true)
  const [afishes, setAfishes] = useState<any>([])
  const [partners, setPartners] = useState<any>([])
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setSelectedDates(dates)
    getAfishes()
    getPartners()
  }, [])

  useEffect(() => {
    getAfishes()
  }, [selectedDates, page])


  const getAfishes = () => {
    setIsLoading(true)
    let link = 'wp-json/wp/v2/events?event_type=afisha'

    if (selectedDates?.length !== 0 && selectedDates?.length && selectedDates?.every((item: any) => item !== undefined)) {
      link += `&page=${page}&per_page=${limit}&date_before=${dayjs(selectedDates[0]).format('YYYY-MM-DD')}&date_after=${dayjs(selectedDates[1]).format('YYYY-MM-DD')}`
    } else {
      link += `&page=${page}&per_page=${limit}`
    }

    get(link)
      .then((res: any) => {
        setAfishes(res?.data)
        setTotalPage(res?.headers['X-WP-Total'])
        console.log(res)
      })
      .catch(() => {
        message.error('Ошибка при получении афиш')
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  const getPartners = () => {
    let link = 'wp-json/wp/v2/afisha_partners'

    get(link)
      .then((res: any) => {
        setPartners(res)
      })
      .catch(() => {
        message.error('Ошибка при получении афиш')
      })
      .finally(() => {
        setIsLoadingPartner(false)
      });
  }

  const handleReset = () => {
    console.log('Выбранные даты:', selectedDates);

    setSelectedDates([]);
  };

  const handleRangeChangeTable = (dateStrings: any) => {
    console.log('dateStrings')
    setSelectedDates([dateStrings[0], dateStrings[1]])
  }

  const onClose = () => {
    console.log('1')
    setPickerOpen(false)
  }


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
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="afisha-content-title">
        <h2>
          {title}
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
              indicator={<LoadingOutlined style={{ fontSize: 120, color: '#fff' }} />}
            />
          </div>
          :
          <>
            <div className="afisha-items">
              {
                afishes?.map((item: any) =>
                  <Link href={`/afisha/${item?.slug}`} className="afisha-items-item">
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
                  </Link>
                )
              }
            </div>
            {
              totalPage && totalPage > 8 &&
              <div className="afisha-content-pagination">
                  <CustomPagination
                      total={totalPage}
                      limit={limit}
                      page={page}
                      changePage={setPage}
                  />
              </div>
            }
          </>
      }


      <div className="afisha-content-info">
        <WeBanner bannerData={pageData?.about} />
      </div>

      {
        isLoadingPartner
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
              indicator={<LoadingOutlined style={{ fontSize: 120, color: '#fff' }} />}
            />
          </div>
          :
          <div className="afisha-content-partners">
            <h2>
              Информационные партнеры
            </h2>
            <div className="afisha-content-partners-items">
              {
                partners?.map((item: any) =>
                  <PartnerItem img={item?.partner_image_link} />
                )
              }
            </div>
          </div>
      }


      <div className="afisha-content-questions">
        <LeaveMessageBlock subject={'[Страница афиша]: Главная форма'}/>
      </div>

    </MaxWithLayout>
  );
};

export default AfishaContent;
