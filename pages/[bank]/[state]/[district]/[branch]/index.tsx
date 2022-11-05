import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import IfscSearch from '../../../../../components/IfscSearch'
import ReasultBox from '../../../../../components/ReasultBox'
import BankService from '../../../../../data/BankService'
import { BankDataItem } from '../../../../../models/BankDataItem'



export default function BranchSelected(data: { bank: string, state: string, district: string, branch: string, info: BankDataItem }) {


    return (
        <div className="flex flex-col items-center pb-40">
            <IfscSearch bank={data.bank} state={data.state} district={data.district} branch={data.branch} />

            {
                data.info ? <ReasultBox info={data.info} /> : <div className='text-2xl text-center'>No Info found</div>
            }
        </div>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const bank = ctx.query['bank'] as string;
    const state = ctx.query['state'] as string;
    const district = ctx.query['district'] as string;
    const branch = ctx.query['branch'] as string;

    if (!bank || bank.trim() === '' || !(await BankService.allBankList()).includes(bank.toLowerCase()) || !state || !district || !branch) return { notFound: true }
    const info = await BankService.getIfsc({bank, state, city:district, branch}) || null
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