import React, { FC, PropsWithChildren } from 'react';
import Meta from "../../../seo/Meta";
import MainLayout from "../../../layouts/MainLayout";
import PortfolioSingleContent from "../../../features/portfolio/PortfolioSingleContent";
import { get } from "../../../api/request";
import { useRouter } from "next/router";

const PortfolioSingle: FC<PropsWithChildren<any>> = ({
                                                       pageData
                                                     }) => {

  const router = useRouter()
  if (pageData === null){
    router.push('/404')
  }

  return (
    <Meta title={'Портфолио'} metaData={pageData}>
      <MainLayout>
        <PortfolioSingleContent pageData={pageData} />
      </MainLayout>
    </Meta>
  );
};

export async function getServerSideProps(context: any){

  try {
    const pageData: any = await get(`wp-json/wp/v2/events?slug=${context?.params?.id}`);

    return {
      props: {
        pageData: pageData?.length !== 0 ? pageData[0] : []
      },
    }
  } catch (e: any) {
    return {
      props: {
        pageData: null
      },
    }
  }
}

export default PortfolioSingle;
