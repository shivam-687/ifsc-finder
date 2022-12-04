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


export default function DistrictSelected(data: { bank: string, state: string, district: string, branch: string[] }) {

    const [branchData, setBranchData] = useState<LinkChipProps[]>([])

    useEffect(() => {
        if (data && data.branch) {
            const linkChipData: LinkChipProps[] = data.branch.map(b => {
                return {
                    icon: <MdLocationOn />,
                    lable: b,
                    link: `/${data.bank}/${data.state}/${data.district}/${b.toLowerCase()}`
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
                <IfscSearch bank={data.bank} state={data.state} district={data.district} branch={data.branch} />
                <div className=" mt-10 w-full ">
                    <LinkChipContainer chipData={branchData} />
                </div>
            </div>
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