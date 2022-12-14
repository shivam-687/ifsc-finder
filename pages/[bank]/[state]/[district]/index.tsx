import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import IfscSearch from '../../../../components/IfscSearch'
import { LinkChipProps } from '../../../../components/LinkChip'
import BankService from '../../../../data/BankService'
import { MdLocationOn } from 'react-icons/md'
import LinkChipContainer from '../../../../components/LinkChipContainer'
import { BankApi } from '../../../../bank_data/api/BankDataApi'
import { isEqual } from '../../../../lib/isEqual'
import PageMeta from '../../../../components/PageMeta'
import ContentComp from '../../../../components/ContentComp'
import HeroTitle from '../../../../components/HeroTitle'
import { slug_to_normal, to_slug } from '../../../../lib/helpers'


export default function DistrictSelected(data: { bank: string, state: string, district: string, branch: string[] }) {

    const [branchData, setBranchData] = useState<LinkChipProps[]>([])

    useEffect(() => {
        if (data && data.branch) {
            const linkChipData: LinkChipProps[] = data.branch.map(b => {
                return {
                    icon: <MdLocationOn />,
                    lable: b,
                    link: `/${to_slug(data.bank)}/${to_slug(data.state)}/${to_slug(data.district)}/${to_slug(b)}`
                } as LinkChipProps;
            });
            setBranchData(linkChipData);
        }
    }, [data]);

    return (
        <>
            <PageMeta
                title={`Bank:${data.bank}, State: ${data.state}, District: ${data.district}|Find all Branch Addresses, Phone, IFSC code, MICR code, findifscode.in`}
                desc={`${data.bank} | Find All Branch Addresses, Phone, IFSC code, MICR code, of ${data.bank}, State- ${data.state} and District- ${data.district}  on findifscode.in`}
            />
            <div className="flex flex-col pb-40 items-center">
                <HeroTitle />
                <IfscSearch bank={data.bank} state={data.state} district={data.district} branch={data.branch} />
                <div className=" mt-10 w-full ">
                    <div className="divider mt-10">OR</div>
                    <div className="container mx-auto px-5 mb-10">
                        <h2 className='font-bold text-2xl text-center'>Branchwise list of <span className='capitalize'>{slug_to_normal(data.bank)}</span> in  <span className='capitalize'>{slug_to_normal(data.district)}</span> </h2>
                    </div>
                    <LinkChipContainer chipData={branchData} />
                </div>
            </div>
            <ContentComp />
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const bank = ctx.query['bank'] as string;
    const state = ctx.query['state'] as string;
    const district = ctx.query['district'] as string;

    if (!bank || bank.trim() === '' || !(await BankApi.getAllbankList()).find(val => isEqual(val, bank)) || !state || !district) return { notFound: true }
    // const branch = Array.from(new Set( await BankApi.getBranchListInDistrict(bank, state, district)))
    const branch = await BankApi.getBranchListInDistrict(bank, state, district)
    // console.log("BRANCHES:: ", branch);
    return {
        props: {
            bank,
            state,
            district,
            branch
        }
    }
}