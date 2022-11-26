import { BankModel } from './BankModel';
import { AllBanksList } from '../allBankList';
import path from 'path';
import { BankMap } from './bankMap';
import { createBankMapFile } from './helpers';

export type BankCode = keyof typeof BankMap;

// const bm = BankMap as any;

const bankNames = async () => await import('../banknames.json', { assert: { type: "json" } });


export function getBankCodeByName (name: string){
    const names = AllBanksList;
    const code = Object.keys(names).find(k => names[k].toLowerCase() === name.toLowerCase());
    return code;
}

export async function getBankDataByCode(code: BankCode){
    const bankFunc = BankMap[code];
    if(!bankFunc) return null;
    const bank = await bankFunc();
    return bank.default;
}


export async function getBankInfoByName(bankName: string, filter?: (val: BankModel)=>boolean){

    const code = getBankCodeByName(bankName) as string;
    const bankData = BankMap[code as keyof typeof BankMap];
    // console.log("CODE ", code)
    const banks: {[key:string]:BankModel} = await (await bankData()).default;
    const values = Object.values(banks).filter(val => {
        const res = val.BANK.toLowerCase() === bankName.toLowerCase();
        return res
    })
    // console.log("Value: ", values)
    return values;
    
}


export async function getAllbankList(){
    return Object.values(AllBanksList).sort();
}

export async function getStateListOfBank(bankName: string){
    const tmp: string[] = [];
    await (await getBankInfoByName(bankName)).map(val => {
        const state = val.STATE;
        if(!tmp.includes(state)){
            tmp.push(state);
        }
    })
    // console.log(tmp)
    return tmp.sort();
}

export async function getDistrictListInState(bankName: string, stateName: string){
    const data = await (await getBankInfoByName(bankName )).filter((val) => val.STATE.toLowerCase() === stateName.toLowerCase());
    const districts: string[] = [];
    data.map(d => {
        if(!districts.includes(d.DISTRICT)){
            districts.push(d.DISTRICT)
        }
    })
    return districts.sort();
}

export async function getBranchListInDistrict(bankName: string, stateName: string, districtName: string){
    return await (await getBankInfoByName(bankName)).filter(val => val.STATE.toLowerCase() === stateName.toLowerCase() && val.DISTRICT.toLowerCase() === districtName.toLowerCase()).map(val => val.BRANCH).sort()
}

export async function getBank(bankName: string, stateName: string, districtName: string, branchName: string){
    return await (await getBankInfoByName(bankName)).filter(
        (val) => {
            return val.STATE.toLowerCase() === stateName.toLowerCase() 
            && val.DISTRICT? val.DISTRICT.toLowerCase() === districtName.toLowerCase(): false 
            && val.BRANCH.toLowerCase() === branchName.toLowerCase();
 
         }
    )[0]||undefined
}


export const BankApi = {
    getAllbankList,
    getStateListOfBank,
    getDistrictListInState,
    getBranchListInDistrict,
    getBank,
    getBankInfoByName,
    getBankCodeByName
}