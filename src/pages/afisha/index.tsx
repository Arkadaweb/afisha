import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import AfishaContent from "../../features/afisha/AfishaContent";
import Meta from "../../seo/Meta";
import { get } from "../../api/request";

const Home: FC<PropsWithChildren<any>> = ({
                                            pageData
                                          }) => {

    return (
        <Meta title={'Афиша'} metaData={pageData}>
            <MainLayout>
                <AfishaContent
                  title={pageData?.title?.rendered ? pageData?.title?.rendered : 'Афиша'}
                  pageData={pageData?.page_fields}
                />
            </MainLayout>
        </Meta>
    )
}

export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages/100`);

    return {
      props: {
        pageData: pageData
      },
      revalidate: 60,
    }
  } catch (e: any) {
    return {
      props: {
        pageData: {}
      },
      revalidate: 60,
    }
  }
}

export default Home;
