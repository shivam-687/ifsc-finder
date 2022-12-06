import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import IfscSearch from '../../../components/IfscSearch'
import { LinkChipProps } from '../../../components/LinkChip'
import BankService from '../../../data/BankService'
import { MdLocationOn } from 'react-icons/md'
import LinkChipContainer from '../../../components/LinkChipContainer'
import { BankApi } from '../../../bank_data/api/BankDataApi'
import { isEqual } from '../../../lib/isEqual'
import PageMeta from '../../../components/PageMeta'
import ContentComp from '../../../components/ContentComp'
import HeroTitle from '../../../components/HeroTitle'


export default function StateSelected(data: { bank: string, state: string, district: string[] }) {

  const [districtData, setDistrictData] = useState<LinkChipProps[]>([])

  useEffect(() => {
    if (data && data.district) {
      const linkChipData: LinkChipProps[] = data.district.map(b => {
        return {
          icon: <MdLocationOn />,
          lable: b,
          link: `/${data.bank}/${data.state}/${b.toLowerCase()}`
        } as LinkChipProps;
      });
      setDistrictData(linkChipData);
    }
  }, [data]);

  //   console.log("Datat", data)
  return (
    <>
      <PageMeta
        title={`Bank:${data.bank}, State: ${data.state}|Find all Branch Addresses, Phone, IFSC code, MICR code, findifscode.in`}
        desc={`${data.bank} | Find All Branch Addresses, Phone, IFSC code, MICR code, of ${data.bank} and State- ${data.state} on findifscode.in`}
      />
      <div className="flex flex-col pb-40 items-center">
        <HeroTitle />
        <IfscSearch bank={data.bank} state={data.state} district={data.district} />
        <div className="divider mt-10">OR</div>
        <div className=" mt-10 w-full">
          <div className="container mx-auto px-5 mb-10">
            <h2 className='font-bold text-2xl text-center'>Districtwise list of <span className='capitalize'>{data.bank}</span> in  <span className='capitalize'>{data.state}</span> </h2>
          </div>
          <LinkChipContainer chipData={districtData} />
        </div>
      </div>
      <ContentComp />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const bank = ctx.query['bank'] as string;
  const state = ctx.query['state'] as string;
  // console.log("DISTRICT:: ", (await BankApi.getAllbankList()).find(val => val.toLowerCase() === bank.toLowerCase()))
  if (!bank || bank.trim() === '' || !(await BankApi.getAllbankList()).find(val => isEqual(val, bank)) || !state) return { notFound: true }

  const districtList = Array.from(new Set(await BankApi.getDistrictListInState(bank, state)));

  return {
    props: {
      bank,
      state,
      district: districtList
    }
  }
}