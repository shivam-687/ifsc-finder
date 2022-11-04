import { BankDataItem } from '../models/BankDataItem';
import { AllBankList, BankMapWithFile } from './BankMapWithFile';


export const jsonLoaderByBankName = async (bankName: string) => {
    const jsonLink = BankMapWithFile[bankName];
    if(!jsonLink) return undefined;
    const bankDataInJson: {data: any[]} = await jsonLink();
    // console.log(bankDataInJson['data'])
    const data = bankDataInJson['data'].map(d => {
        let temp: BankDataItem = {
            address: d['ADDRESS'],
            bankName: d['BANK NAME'] || d['BANK'],
            city: d['CITY'],
            distric: d['DISTRICT'] || d['CITY2'],
            ifsc: d['IFSC'],
            branch: d['BRANCH'],
            phone: d['PHONE'],
            state: d['STATE']
        }
        return temp;
    })
    // console.clear();
    // console.log(data)
    return data;
}


const getBankData = async (bankName: string) => {
    return jsonLoaderByBankName(bankName);
}

const allBankList = async () => {
    return AllBankList.map(b => b.name);
}

const getStatesListOfBank = async (bankName: string, data?: BankDataItem[]) => {
    const bankData = data || await getBankData(bankName);
    if(!bankData) return undefined;
    if(bankData.length <= 0) return [] as string[];
    const states: string[] = [];
    bankData.forEach(b => {
        if(!states.includes(b.state)){
            states.push(b.state);
        }
    });
    return states;
}

const getDistricList = async (bankName: string, state: string, data?: BankDataItem[]) => {
    const bankData = data || await getBankData(bankName);
    if(!bankData) return undefined;
    if(bankData.length <= 0) return [] as string[];
    const districts: string[] = [];
    bankData.forEach(b => {

        if(b.state.toLowerCase() === state.toLowerCase() && !districts.includes(b.distric)){
            // console.log(b)
            districts.push(b.distric);
        }
    });
    return districts.sort();
}


const getBranchList = async (bankName: string, state: string, district: string, data?: BankDataItem[]) => {
    const bankData = data || await getBankData(bankName);
    if(!bankData) return undefined;
    if(bankData.length <= 0) return [] as string[];
    const branches: string[] = [];
    bankData.forEach(b => {
        if(b.state.toLowerCase() === state.toLowerCase() && b.distric.toLowerCase() === district.toLowerCase()){
            branches.push(b.branch);
        }
    });
    return branches;
}

const getIfsc = async ({bank, state, city, branch}: {bank: string, state: string, city: string, branch: string}) => {
    if(!(await allBankList()).find(b => b === bank)) return undefined;
    const bankData = await getBankData(bank);
    
    if(!bankData) return undefined;
    const br = bankData.find(d => d.state.toLowerCase() === state && d.distric.toLowerCase() === city && d.branch.toLowerCase() === branch);
    // console.log("Bank found", br)
    return br;
}


const BankService = {
    getStatesListOfBank,
    getDistricList,
    getBranchList,
    allBankList,
    getIfsc
}



export default BankService;