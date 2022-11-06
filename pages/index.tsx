import { GetServerSidePropsContext } from 'next'
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


export default function Home(data: { banks: string[] }) {

  const [bankData, setBankData] = useState<LinkChipProps[]>([])
  
  useEffect(() => {
    if(data && data.banks){
      const linkChipData: LinkChipProps[] = data.banks.map(b => {
        return {
          icon: <AiFillBank/>, 
          lable: b,
          link: '/'+b
        } as LinkChipProps;
      });
      setBankData(linkChipData);
    }
  }, [data]);
  return (
    <div className="flex flex-col items-center pb-40">

    

      <IfscSearch bank={data.banks} />
      <div className="divider mt-10">OR</div>
      <div className=" mt-10 ">
        <LinkChipContainer chipData={bankData}/>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // console.log(await generateSitemap())
  return {
    props: {
      banks: await BankService.allBankList()
    }
  }
}
