import React, { FC, PropsWithChildren } from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import SearchContent from "../../features/search/SearchContent";
import { get } from "../../api/request";

const Search: FC<PropsWithChildren<any>> = ({
                                              searchData,
                                              searchValue
                                            }) => {


  return (
    <Meta title={'Поиск'}>
      <MainLayout>
        <SearchContent
          searchData={searchData}
          searchValue={searchValue}
        />
      </MainLayout>
    </Meta>
  );
};

export async function getServerSideProps({ query }: any){

  try {
    const searchData = await get(`wp-json/wp/v2/events?search=${query?.value}&per_page=100`)

    return {
      props: {
        searchData,
        searchValue: query?.value
      },
    }
  } catch (e: any) {
    return {
      props: {
        searchData: [],
        searchValue: query?.value || ''
      },
    }
  }
}

export default Search;
