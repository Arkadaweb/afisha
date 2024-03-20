import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import Meta from "../seo/Meta";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../features/main/MainContent";
import { get } from "../api/request";

const Home: FC<PropsWithChildren<any>> = ({
                                            pageData,
                                            slider
                                          }) => {
  return (
    <Meta title={'Главная'} metaData={pageData}>
      <MainLayout>
        <MainContent
          pageData={pageData?.page_fields}
          slider={slider}
        />
      </MainLayout>
    </Meta>
  )
}

export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages/90`);
    const slider: any = await get(`wp-json/wp/v2/slider`);

    return {
      props: {
        pageData: pageData,
        slider: slider,
      },
      revalidate: 60,
    }
  } catch (e: any) {
    return {
      props: {
        pageData: {},
        slider: []
      },
      revalidate: 60,
    }
  }
}

export default Home;
