import { info } from 'console'
import React from 'react'
import { BankDataItem } from '../models/BankDataItem'
import ResultChip from './ResultChip'

const ReasultBox = ({info}: {info: BankDataItem}) => {
  return (
    <div className='container mx-auto px-5 mt-14'>
        <div className="rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow shadow-primary/20 overflow-hidden p-2 md:p-5">
            <ResultChip lable="Bank Name" value={info.bankName}/>
            <ResultChip lable="IFSC Code" value={info.ifsc}/>
            <ResultChip lable="State" value={info.state}/>
            <ResultChip lable="District" value={info.distric}/>
            <ResultChip lable="Branch" value={info.branch}/>
            <ResultChip lable="Phone" value={info.phone}/>
            <ResultChip lable="Address" value={info.address}/>
        </div>
    </div>
  )
}

export default ReasultBox