import React from 'react';
import Meta from "../../seo/Meta";
import MainLayout from "../../layouts/MainLayout";
import SearchContent from "../../features/search/SearchContent";

const Search = () => {

    return (
        <Meta title={'Поиск'}>
            <MainLayout>
                <SearchContent/>
            </MainLayout>
        </Meta>
    );
};

export default Search;
