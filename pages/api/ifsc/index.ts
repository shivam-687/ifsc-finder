import type { NextApiRequest, NextApiResponse } from 'next'
import BankService from '../../../data/BankService'

type Data = {
    data: { name: string }[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{data: any} | {error: string}>
) {
    const bank = req.query['bank'] as string;
    const state = req.query['state'] as string;
    const city = req.query['district'] as string;
    const branch = req.query['branch'] as string;

    
    if(!bank) return res.status(200).json({data: await BankService.allBankList()});
    
    if(!(await BankService.allBankList()).find(val => val === bank)) res.status(404).json({error: 'bank not found'});
    
    if(bank && !state)  res.status(200).json({data: await BankService.getStatesListOfBank(bank)});
    
    if(bank && state && !city){
        res.status(200).json({data: await BankService.getDistricList(bank, state)});
    }
    
    if(bank && state && city && !branch) res.status(200).json({data: await BankService.getBranchList(bank, state, city)});
    // console.log(bank, state, city, branch)

    if(bank && state && city && branch)  res.status(200).json({data: await BankService.getIfsc({bank, state, city, branch})});

    
}