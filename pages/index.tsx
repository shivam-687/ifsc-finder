import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import IfscSearch from '../components/IfscSearch'
import LinkChip, { LinkChipProps } from '../components/LinkChip'
import BankService from '../data/BankService'
import {AiFillBank} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import LinkChipContainer from '../components/LinkChipContainer'
import generateSitemap from '../lib/SitemapGenerator'
import { BankApi, getBankCodeByName, getBankDataByCode, getBankInfoByName } from '../bank_data/api/BankDataApi'
import { filterBankNameByMapFile, createAvailableBanksListFile } from '../bank_data/api/helpers'
import PageMeta from '../components/PageMeta'
import HeroTitle from '../components/HeroTitle'
import ContentComp from '../components/ContentComp'
import { to_slug } from '../lib/helpers'


export default function Home(data: { banks: string[] }) {

  const [bankData, setBankData] = useState<LinkChipProps[]>([])
  
  useEffect(() => {
    if(data && data.banks){
      const linkChipData: LinkChipProps[] = data.banks.map(b => {
        return {
          icon: <AiFillBank/>, 
          lable: b,
          link: '/'+to_slug(b)
        } as LinkChipProps;
      });
      setBankData(linkChipData);
    }
  }, [data]);
  return (
    <>
    <PageMeta
      title={`Find IFSC, MICR Codes, Address, Phone of All Bank Branches in India, for NEFT, RTGS, ECS: findifscode.in`}
      desc={`This website helps you to find IFSC code of all banks and braches and All Branch Addresses, Phone, IFSC code, MICR code, Find IFSC, MICR Codes, Address, All Bank Branches in India, for NEFT, RTGS, ECS Transactions`}
     />
    <div className="flex flex-col items-center pb-40">
      <HeroTitle/>
      <IfscSearch bank={data.banks} />
      <div className="divider mt-10">OR</div>
      <div className=" mt-10 ">
        <LinkChipContainer chipData={bankData}/>
      </div>
    </div>
    <ContentComp/>
    </>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  // console.log(await getBankInfoByName('Royal Bank of Scotland N.V.', (val) => val.DISTRICT === 'MUMBAI'));
  return {
    props: {
      banks: await BankApi.getAllbankList()
    }
  }
}
