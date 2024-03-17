import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import MaxWithLayout from "../../layouts/MaxWithLayout";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import PortfolioItem from "./components/PortfolioItem";
import GoldButton from "../../components/common/GoldButton";
import Arrow from "../../assets/icons/portfolio/Arrow";
import { Dropdown, Checkbox, message, Spin } from 'antd';
import type { MenuProps } from 'antd';
import dayjs from "dayjs";
import { get } from "../../api/request";
import { LoadingOutlined } from "@ant-design/icons/lib";
import CustomPagination from "../../components/common/CustomPagination";

const PortfolioContent: FC<PropsWithChildren<any>> = ({
                                                        title
                                                      }) => {


  const [selectedYear, setSelectedYear] = useState<Array<string>>([]);
  const [selectedDirection, setSelectedDirection] = useState<Array<string>>([]);

  const years = [
    {
      id: 1,
      name: '2000'
    },
    {
      id: 2,
      name: '2001'
    },
    {
      id: 3,
      name: '2002'
    },
    {
      id: 4,
      name: '2003'
    },
    {
      id: 5,
      name: '2003'
    },
    {
      id: 6,
      name: '2003'
    },
    {
      id: 7,
      name: '2003'
    },
  ]

  const directions = [
    {
      id: 1,
      name: 'Организация мероприятия под любой праздник'
    },
    {
      id: 2,
      name: 'Корпоративные подарки'
    },
    {
      id: 3,
      name: 'Концертная деятельность'
    },
    {
      id: 4,
      name: 'Благотворительные мероприятия'
    },
    {
      id: 5,
      name: 'Корпоративные мероприятия под любой праздник'
    },
  ]

  const contentStyle: React.CSSProperties = {};

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  const getYearsItems = () => {
    if (!years) {
      return [];
    }

    let allItems: any[] = [];
    let selectedItems: any[] = [];

    years?.forEach((item: any) => {
      const isDuplicate = selectedYear.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString());

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
                checked={selectedYear.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedYear];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.id.toString() !== item?.id.toString());
                  }
                  setSelectedYear(newSelectedSellers);
                }}
              >
                {item?.name}
              </Checkbox>
            </div>
          ),
          key: `year-${item.id.toString()}`,
        });
      }
    });

    selectedYear?.forEach((item: any) => {
      const isDuplicate = selectedYear.some((sellerItem: any) => sellerItem?.id?.toString() === item?.id?.toString());

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
                checked={selectedYear.some((sellerItem: any) => sellerItem?.id.toString() === item?.id.toString())}
                onChange={(e) => {
                  let newSelectedSellers = [...selectedYear];
                  if (e.target.checked) {
                    newSelectedSellers.push(item);
                  } else {
                    newSelectedSellers = newSelectedSellers.filter((el: any) => el?.id.toString() !== item?.id.toString());
                  }
                  setSelectedYear(newSelectedSellers);
                }}
              >
                {item?.name}
              </Checkbox>
            </div>
          ),
          key: `year-${item.id}`,
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
