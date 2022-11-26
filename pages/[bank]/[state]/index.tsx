import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import IfscSearch from '../../../components/IfscSearch'
import { LinkChipProps } from '../../../components/LinkChip'
import BankService from '../../../data/BankService'
import {MdLocationOn} from 'react-icons/md'
import LinkChipContainer from '../../../components/LinkChipContainer'
import { BankApi } from '../../../bank_data/api/BankDataApi'


export default function StateSelected(data: {bank: string, state: string, district: string[]}) {

  const [districtData, setDistrictData] = useState<LinkChipProps[]>([])
  
  useEffect(() => {
    if(data && data.district){
      const linkChipData: LinkChipProps[] = data.district.map(b => {
        return {
          icon: <MdLocationOn/>, 
          lable: b,
          link: `/${data.bank}/${data.state}/${b.toLowerCase()}`
        } as LinkChipProps;
      });
      setDistrictData(linkChipData);
    }
  }, [data]);

//   console.log("Datat", data)
  return (
    <div className="flex flex-col pb-40 items-center">
      <IfscSearch bank={data.bank} state={data.state} district={data.district} />
      <div className=" mt-10 w-full">
        <LinkChipContainer chipData={districtData}/>
      </div>
    
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext){
    const bank = ctx.query['bank'] as string;
    const state = ctx.query['state'] as string;
    // console.log("DISTRICT:: ", (await BankApi.getAllbankList()).find(val => val.toLowerCase() === bank.toLowerCase()))
    if(!bank || bank.trim() === '' || !(await BankApi.getAllbankList()).find(val => val.toLowerCase() === bank.toLowerCase()) || !state) return {notFound: true}

    const districtList = Array.from(new Set( await BankApi.getDistrictListInState(bank, state)));

  return {
    props: {
      bank,
      state,
      district: districtList
    }
  }
}