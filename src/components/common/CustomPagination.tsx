import React from 'react';
import {Pagination, PaginationProps} from "antd";
import ArrowToRight from "../../assets/icons/pagination/ArrowToRight";
import ArrowToLeft from "../../assets/icons/pagination/ArrowToLeft";

const CustomPagination = ({

                          }) => {

    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <ArrowToLeft/>;
        }
        if (type === 'next') {
            return <ArrowToRight/>;
        }
        return originalElement;
    };

    return (
        <Pagination
            className='pagination'
            onChange={(page, pageSize): any => {}}
            defaultCurrent={1}
            current={1}
            pageSize={10}
            total={1000}
            showSizeChanger={false}
            itemRender={itemRender}
        />
    );
};

export default CustomPagination;
