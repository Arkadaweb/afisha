import React, {FC, PropsWithChildren} from 'react';
import Link from "next/link";

const BreadCrumbs: FC<PropsWithChildren<any>> = ({elements}) => {

    return (
        <ul className="bread-crumbs">
            {
                elements.map((item: any, index: any) => {
                    return (
                        <li key={index}>
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                            {index !== elements.length - 1 && ' /'}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default BreadCrumbs;