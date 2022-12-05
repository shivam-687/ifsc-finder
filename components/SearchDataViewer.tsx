import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { BankModel } from '../bank_data/api/BankModel'
import httpClient from '../lib/httpClient'
import HeroTitle from './HeroTitle'
import ReasultBox from './ReasultBox'
import {AxiosError, AxiosResponse} from 'axios'
import Loader from './Laoder'

export type SearchDataViewerProps = {
    ifsc: string,
    onError?: (error: any) => void
    onLoading?: (isLoading: boolean) => void,
    onSuccess?: (data: BankModel) => void
}



const SearchDataViewer = (props: SearchDataViewerProps) => {
    const { data, isLoading, error, status } = useQuery<AxiosResponse<BankModel>, any>('get-ifsc', async() => {
       return await httpClient.get(props.ifsc)
    });

    useEffect(() => {
        if(status === 'success'){
            props.onSuccess && props.onSuccess(data.data);
        }
        if(status === 'error'){
            props.onError && props.onError(error);
        }
        // console.log("Data", data?.data)
    }, [data, status])

    useEffect(() => {
        props.onLoading && props.onLoading(isLoading);
    }, [isLoading])
    
    


    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-center'>
                {
                    error && !isLoading && error instanceof AxiosError &&  error.response?.status === 404 && <p className='text-xl text-error mt-28 '>Invalid IFSC CODE</p>
                }
                {
                    isLoading && <div className='mt-28'><Loader isShow={isLoading}/></div>
                }
                {
                    !error&& !isLoading && data && <ReasultBox info={data.data} />
                }
            </div>
        </div>
    )
}

export default SearchDataViewer