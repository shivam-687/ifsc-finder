import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BankApi } from '../../../../../bank_data/api/BankDataApi'
import { BankModel } from '../../../../../bank_data/api/BankModel'
import ContentComp from '../../../../../components/ContentComp'
import HeroTitle from '../../../../../components/HeroTitle'
import IfscSearch from '../../../../../components/IfscSearch'
import PageMeta from '../../../../../components/PageMeta'
import ReasultBox from '../../../../../components/ReasultBox'
import ResultTable from '../../../../../components/ResultTable'
import BankService from '../../../../../data/BankService'
import { isEqual } from '../../../../../lib/isEqual'
import { BankDataItem } from '../../../../../models/BankDataItem'



export default function BranchSelected(data: { bank: string, state: string, district: string, branch: string, info: BankModel }) {


    return (
        <>
            <PageMeta
                title={`IFSC Code of - Bank: ${data.bank}, State: ${data.state}, Distric: ${data.district}, Branch: ${data.branch}`}
                desc={`Find IFSC Code of - Bank: ${data.bank}, State: ${data.state}, Distric: ${data.district}, Branch: ${data.branch} on findifscode.in`}
            />
            <div className="flex flex-col items-center pb-40">
                <HeroTitle/>
                <IfscSearch bank={data.bank} state={data.state} district={data.district} branch={data.branch} />

                {
                    data.info ? <ResultTable info={data.info} /> : <div className='text-2xl text-center'>No Info found</div>
                }
            </div>
            <ContentComp/>
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const bank = ctx.query['bank'] as string;
    const state = ctx.query['state'] as string;
    const district = ctx.query['district'] as string;
    const branch = ctx.query['branch'] as string;
    // console.log("BANK FOUND::", bank, state, district, branch)
    if (!bank || bank.trim() === '' || !(await BankApi.getAllbankList()).find(val => isEqual(val, bank)) || !state || !district || !branch) return { notFound: true }
    const info = await BankApi.getBank(bank, state, district, branch) || null
    // console.log("DATA:::", info)
    return {
        props: {
            bank,
            state,
            district,
            branch,
            info
        }
    }
}