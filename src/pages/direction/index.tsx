import React, { FC, PropsWithChildren } from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import DirectionContent from "../../features/direction/DirectionContent";
import { get } from "../../api/request";

const Direction: FC<PropsWithChildren<any>> = ({
                                                 pageData
                                               }) => {

    return (
        <Meta title={'Направления деятельности'} metaData={pageData}>
            <MainLayout>
               <DirectionContent
                 title={pageData?.title?.rendered ? pageData?.title?.rendered : 'Направления деятельности'}
                 pageData={pageData?.page_fields}
               />
            </MainLayout>
        </Meta>
    );
};

export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages/46`);

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


export default Direction;
