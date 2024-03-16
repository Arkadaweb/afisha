import React, { FC, PropsWithChildren } from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import PortfolioContent from "../../features/portfolio/PortfolioContent";
import { get } from "../../api/request";

const Portfolio: FC<PropsWithChildren<any>> = ({
                                                 pageData
                                               }) => {

    return (
        <Meta title={'Портфолио'}  metaData={pageData}>
            <MainLayout>
                <PortfolioContent title={pageData?.title?.rendered ? pageData?.title?.rendered : 'Направления деятельности'}/>
            </MainLayout>
        </Meta>
    );
};


export async function getStaticProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/pages/87`);

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

export default Portfolio;
