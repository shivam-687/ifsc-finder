import { GetStaticPropsContext } from 'next'
import React, { useState } from 'react'
import { useQuery, } from 'react-query'
import { BankModel } from '../bank_data/api/BankModel';
import PageMeta from '../components/PageMeta';
import SearchDataViewer from '../components/SearchDataViewer';


export const config = { amp: 'hybrid' }


const SearchByIfscCode = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [data, setData] = useState<BankModel>();
    const [error, setError] = useState<string>();
    const [resError, setResError] = useState<any>();
    const [loading, setLaoding] = useState<boolean>(false);


    const validateValue = (value: string | undefined) => {
        if (!value) return setError('IFSC Code required');
        if (value.length > 11) return setError('IFSC Code is no more than 11 character');
        if (value.length < 11) return setError('IFSC Code is not less than 11 character');
        return setError(undefined);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        validateValue(e.target.value);
        if(value.length <= 11){
            setInputValue(e.target.value);
        }
    }

    const handleOnLoading = (isLoading: boolean)=> {
        setLaoding(isLoading)
    }

    const handleOnSuccess = (bank: BankModel) => {
        setData(bank)
    }

    const handleOnError = (error: any) => {
        setResError(error)
    }

    return (
        <>
        <PageMeta
            title="Search by IFSC Code"
            desc="Here you can search bank detailes like MICR code, Branch name, bank phone , bank address and more by IFSC Code."
        />
        <div className='pb-28 mb-96'>
            <div className="w-full flex items-center justify-center mt-40 mb-10">
                <h1 className='text-6xl md:text-6xl drop-shadow  font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                    {
                        'SEARCH BY IFSC CODE'
                    }
                </h1>
            </div>
            <div className='max-w-2xl mx-auto'>
                <div className="form-control w-full">
                    {/* <label className='input-group'> */}
                        <input type="text" placeholder="Example: YESB0DNB002" value={inputValue} disabled={loading} className="input input-lg input-bordered w-full uppercase " onChange={onChangeHandler} required />

                    <label className="label text-error">
                        {
                            error && <span className="label-text-alt  text-error">{error}</span>
                        }
                    </label>
                </div>
            </div>

            <div>
                {
                    !error && inputValue && inputValue.length === 11 && <SearchDataViewer ifsc={inputValue} onLoading={handleOnLoading} onSuccess={handleOnSuccess} onError={handleOnError} />
                }
            </div>
        </div>
        </>
    )
}

export async function getStaticProps(props: GetStaticPropsContext) {
    return {
        props: {
            data: null
        }
    }
}

export default SearchByIfscCode