import { info } from 'console'
import React from 'react'
import { BankModel } from '../bank_data/api/BankModel'
import { BankDataItem } from '../models/BankDataItem'
import ResultChip from './ResultChip'

const ReasultBox = ({info}: {info: BankModel}) => {
  return (
    <div className='container mx-auto px-5 mt-14'>
        <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow shadow-primary/20 overflow-hidden p-2 md:p-5">
            <ResultChip lable="Bank Name" value={info.BANK}/>
            <ResultChip lable="IFSC Code" value={info.IFSC}/>
            <ResultChip lable="State" value={info.STATE}/>
            <ResultChip lable="District" value={info.DISTRICT||'N/A'}/>
            <ResultChip lable="Branch" value={info.BRANCH}/>
            <ResultChip lable="Phone" value={info.CONTACT||'N/A'}/>
            <ResultChip lable="Address" value={info.ADDRESS}/>
        </div>
    </div>
  )
}

export default ReasultBox