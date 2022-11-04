import type { NextApiRequest, NextApiResponse } from 'next'
import BankService from '../../../data/BankService'

type Data = {
  data: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
    const bankList = await BankService.allBankList()
  res.status(200).json({ data: bankList })
}