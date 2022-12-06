import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import IfscSearch from '../../components/IfscSearch'
import { LinkChipProps } from '../../components/LinkChip'
import BankService from '../../data/BankService'
import {MdLocationOn} from 'react-icons/md';
import LinkChipContainer from '../../components/LinkChipContainer'
import { BankApi } from '../../bank_data/api/BankDataApi'
import { isEqual } from '../../lib/isEqual'
import PageMeta from '../../components/PageMeta'
import HeroTitle from '../../components/HeroTitle'
import ContentComp from '../../components/ContentComp'


export default function BankSelected(data: {bank: string, states: string[]}) {
  const [stateData, setStateData] = useState<LinkChipProps[]>([])
  
  useEffect(() => {
    if(data && data.states){
      const linkChipData: LinkChipProps[] = data.states.map(b => {
        return {
          icon: <MdLocationOn/>, 
          lable: b,
          link: `/${data.bank}/${b.toLowerCase()}`
        } as LinkChipProps;
      });
      setStateData(linkChipData);
    }
  }, [data]);
  return (
    <>
  
    <PageMeta
      title={`${data.bank} ifsc code`}
      desc={`${data.bank} | Find ${data.bank} ifsc code , phone, branch micr code on findifscode.in`}
     />
    <div className="flex flex-col pb-40 items-center">
      <HeroTitle/>
     <IfscSearch bank={data.bank} state={data.states} />
     <div className=" mt-10 ">
     <div className="divider mt-10">OR</div>
        <div className="container px-5 mb-10">
          <h2 className='font-bold text-2xl text-center'><span className='capitalize'>{data.bank}</span> Statewise List </h2>
        </div>
        <LinkChipContainer chipData={stateData}/>
      </div>
    </div>
    <ContentComp/>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    const bank = ctx.query['bank'] as string;

    
    if(!bank || bank.trim() === '' || !(await BankApi.getAllbankList()).find(st => isEqual(st, bank))) return {notFound: true}
    const states = await BankApi.getStateListOfBank(bank);
    // console.log("States: ", states);
  return {
    props: {
      bank,
      states: await BankApi.getStateListOfBank(bank)
    }
  }
}