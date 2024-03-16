import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import Meta from "../../../seo/Meta";
import MainLayout from "../../../layouts/MainLayout";
import AfishaSingleContent from "../../../features/afisha/AfishaSingleContent";
import { get } from "../../../api/request";

const AfishaById: FC<PropsWithChildren<any>> = ({
                                                  pageData
                                                }) => {

  return (
    <Meta title={'Афиша'} metaData={pageData}>
      <MainLayout>
        <AfishaSingleContent pageData={pageData} />
      </MainLayout>
    </Meta>
  )
}

export async function getServerSideProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/events?slug=${context?.params?.id}`);

    return {
      props: {
        pageData: pageData[0]
      },
    }
  } catch (e: any) {
    return {
      props: {
        pageData: {}
      },
    }
  }
}


export default AfishaById;
