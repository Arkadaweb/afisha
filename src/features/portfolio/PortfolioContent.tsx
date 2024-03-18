import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import PortfolioItem from "./components/PortfolioItem";
import GoldButton from "../../components/common/GoldButton";
import Arrow from "../../assets/icons/portfolio/Arrow";
import { Dropdown, Checkbox, message, Spin } from 'antd';
import type { MenuProps } from 'antd';
import dayjs from "dayjs";
import { get, post } from "../../api/request";
import { LoadingOutlined } from "@ant-design/icons/lib";
import CustomPagination from "../../components/common/CustomPagination";

const PortfolioContent: FC<PropsWithChildren<any>> = ({
                                                        title
                                                      }) => {


  const [selectedYear, setSelectedYear] = useState<Array<string>>([]);
  const [selectedDirection, setSelectedDirection] = useState<Array<string>>([]);

  const contentStyle: React.CSSProperties = {};

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  const [directions, setDirections] = useState([])
  const [years, setYears] = useState([])

  const getDirections = () => {
    get('wp-json/wp/v2/area_activity?per_page=100')
      .then((res: any) => {
        setDirections(res)
      })
      .catch(() => {

      })
      .finally(() => {

      })
  }
  const getYears = () => {
    post('wp-json/afisha-rest-api/v1/dropdown_years')
      .then((res: any) => {
        setYears(res?.filter((item: any) => item?.year !== null && item?.year !== undefined))
        console.log('years')
        console.log(res)
      })
      .catch(() => {

      })
      .finally(() => {

      })
  }

  useEffect(() => {
    getDirections()
    getYears()
  }, [])

  const getYearsItems = () => {
    if (!years) {
      return [];
    }

    let allItems: any[] = [];
    let selectedItems: any[] = [];

    years?.forEach((item: any) => {
      const isDuplicate = selectedYear.some((sellerItem: any) => sellerItem?.year.toString() === item?.year.toString());

      if (!isDuplicate) {
        allItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item?.year}
                checked={selectedYear.some((sellerItem: any) => sellerItem?.year.toString() === item?.year.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedYear];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.year.toString() !== item?.year.toString());
                  }
                  setSelectedYear(newSelectedSellers);
                }}
              >
                {item?.year}
              </Checkbox>
            </div>
          ),
          key: `year-${item.year.toString()}`,
        });
      }
    });

    selectedYear?.forEach((item: any) => {
      const isDuplicate = selectedYear.some((sellerItem: any) => sellerItem?.year?.toString() === item?.year?.toString());

      if (isDuplicate) {
        selectedItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item?.year}
                checked={selectedYear.some((sellerItem: any) => sellerItem?.year.toString() === item?.year.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedYear];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.year.toString() !== item?.year.toString());
                  }
                  setSelectedYear(newSelectedSellers);
                }}
              >
                {item?.year}
              </Checkbox>
            </div>
          ),
          key: `year-${item.year}`,
        });
      }
    });

    const items: MenuProps["items"] = [
      ...selectedItems,
      ...allItems,
    ];

    return items;
  };

  const getDirectionItems = () => {
    if (!directions) {
      return [];
    }

    let allItems: any[] = [];
    let selectedItems: any[] = [];

    directions?.forEach((item: any) => {
      const isDuplicate = selectedDirection.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString());

      if (!isDuplicate) {
        allItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item?.name}
                checked={selectedDirection.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedDirection];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.id.toString() !== item?.id.toString());
                  }
                  setSelectedDirection(newSelectedSellers);
                }}
              >
                {item?.name}
              </Checkbox>
            </div>
          ),
          key: `direction-${item.id.toString()}`,
        });
      }
    });

    selectedDirection?.forEach((item: any) => {
      const isDuplicate = selectedDirection.some((sellerItem: any) => sellerItem?.id?.toString() === item?.id?.toString());

      if (isDuplicate) {
        selectedItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item?.name}
                checked={selectedDirection.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedDirection];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.id.toString() !== item?.id.toString());
                  }
                  setSelectedDirection(newSelectedSellers);
                }}
              >
                {item?.name}
              </Checkbox>
            </div>
          ),
          key: `direction-${item.id}`,
        });
      }
    });

    const items: MenuProps["items"] = [
      ...selectedItems,
      ...allItems,
    ];

    return items;
  };

  const breadCrumbs = [
    {
      id: 1,
      path: '/',
      title: 'Главная'
    },
    {
      id: 2,
      path: '/',
      title: 'Портфолио'
    },
  ]

  const [isLoading, setIsLoading] = useState<any>(true)
  const [afishes, setAfishes] = useState<any>([])
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);

  const getAfishes = () => {
    setIsLoading(true)
    let link = 'wp-json/wp/v2/events?event_type=portfolio'

    link += `&page=${page}&per_page=${limit}`

    if (selectedDirection?.length !== 0 && selectedDirection) {
      link += `&area_activity=${selectedDirection?.map((item: any) => item?.id).join(',')}`
    }

    if (selectedYear?.length !== 0 && selectedYear) {
      link += `&date_portfolio=${selectedYear?.map((item: any) => item?.year).join(',')}`
    }

    get(link)
      .then((res: any) => {
        setAfishes(res?.data)
        setTotalPage(res?.headers['X-WP-Total'])
        console.log('res')
        console.log(res)
      })
      .catch(() => {
        message.error('Ошибка при получении афиш')
      })
      .finally(() => {
        setIsLoading(false)
      });
  }


  useEffect(() => {
    getAfishes()
  }, [page])

  return (
    <MaxWithLayout isPaddingTop={true}>
      <BreadCrumbs elements={breadCrumbs} />

      <div className="partfolio">
        <h1>
          {title}
        </h1>
        <div className="partfolio-sort">
          <Dropdown
            trigger={["click"]}
            placement={"bottomRight"}
            menu={{ items: getYearsItems() }}
            overlayClassName={"dropdown-border"}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as any, { style: menuStyle })}

                <div className="drop-down-button">
                  <GoldButton
                    onClick={getAfishes}
                    title={'Применить'}
                    width={'100%'}
                    padding={'13px 0'}
                    backColor={'rgba(9, 6, 47, 1)'}
                    color={'rgba(197, 163, 94, 1)'}
                  />
                </div>
              </div>
            )}
          >
            <div className="portfolio-drop-down">
              <p>Год проведения</p>
              <Arrow />
            </div>
          </Dropdown>
          <Dropdown
            trigger={["click"]}
            placement={"bottomRight"}
            menu={{ items: getDirectionItems() }}
            overlayClassName={"dropdown-border"}
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as any, { style: menuStyle })}

                <div className="drop-down-button">
                  <GoldButton
                    onClick={getAfishes}
                    title={'Применить'}
                    width={'100%'}
                    padding={'13px 0'}
                    backColor={'rgba(9, 6, 47, 1)'}
                    color={'rgba(197, 163, 94, 1)'}
                  />
                </div>
              </div>
            )}
          >
            <div className="portfolio-drop-down">
              <p>Направление деятельности</p>
              <Arrow />
            </div>
          </Dropdown>
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
            afishes?.length !== 0
              ?
              <>
                <div className="partfolio-items">
                  {
                    afishes?.map((item: any) =>
                      <PortfolioItem item={item} />
                    )
                  }

                  {/*<PortfolioItem />*/}
                </div>
                <div className="afisha-content-pagination">
                  <CustomPagination
                    total={totalPage}
                    limit={limit}
                    page={page}
                    changePage={setPage}
                  />
                </div>
              </>
              :
              <div
                style={{
                  marginTop: 200,
                  display: "flex",
                  justifyContent: 'center',
                  alignItems: "center",
                  fontSize: 32,
                  color: "#fff"
                }}>
                По данному запросу ничего не найдено
              </div>
        }
        {/*<div className="partfolio-show-more">*/}
        {/*  <GoldButton*/}
        {/*    title={'Показать ещё'}*/}
        {/*    padding={'18px 48px'}*/}
        {/*  />*/}
        {/*</div>*/}

      </div>
    </MaxWithLayout>
  );
};

export default PortfolioContent;
