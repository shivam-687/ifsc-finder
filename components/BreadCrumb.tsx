import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const BreadCrumb = () => {
    const { route, query, asPath, events } = useRouter();
    const [routeArr, setRouteArr] = useState<{ lable: string, link: string }[]>([{ lable: 'Home', link: '/' }]);

    useEffect(() => {
        setBredcrumbRoute();

    }, [route, query, asPath, events])

    const setBredcrumbRoute = () => {
        const valueList = Object.values(query);
        const defaultVal = { lable: 'Home', link: '/' }
        console.log(valueList)
        const temp: { lable: string, link: string }[] = [defaultVal];
        if (valueList && valueList.length > 0) { 
            valueList.forEach((k, index) => {
                let val = '/';
                for(let i=0; i <= index; i++){
                    val+=valueList[i]+'/'
                }
                temp.push({ lable: k as string, link: val as string });
                // console.log("Route", val)
            })
            // console.log("Temp", temp);
            setRouteArr(temp);
        }else{
            setRouteArr(temp);
        }
    }



    return (
        <div className="container mx-auto px-5">
            <div className="text-sm breadcrumbs">
                <ul>
                    {
                        routeArr.map((value, index) => {
                            return <li key={index}><Link href={value.link} className="capitalize">{value.lable}</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb