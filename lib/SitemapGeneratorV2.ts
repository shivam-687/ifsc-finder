import fs from 'fs';
import { BankMap } from '../bank_data/api/bankMap';
import { BankModel } from '../bank_data/api/BankModel';
import { AllBanksList } from '../bank_data/allBankList';
const bankList = AllBanksList;

async function init(){
    try {
        // console.log(Object.keys(AllBankList.))
        const banks = await bankDataLoader(0, Object.keys(bankList));
        const nameList: string[] = banks?.map((b, index) => `${index} => ${b.BANK}`)||[];
        await writeBankData(nameList.join('\n'))
        
    } catch (error) {
        console.error(error);
    }
}

async function bankDataLoader(currentIndex: number, codelist: string[]){
    if(currentIndex >= codelist.length) return;
    try {
        const code = codelist[currentIndex];
        if(!code)return;
        // console.log("Code",code, codelist)
        const bankData = BankMap[code as keyof typeof BankMap];
        const banks: {[key:string]:BankModel} = await (await bankData()).default;
        const prevData = await bankDataLoader(currentIndex++, codelist);
        const bankList = [...Object.values(banks)];
        bankList.push(...prevData || [])
        return bankList;
    } catch (error) {
        console.error(error);
    }
}

async function writeBankData(data: string){
    try {
        console.log("Start writing")
        fs.writeFileSync('banklist.txt', data);
    } catch (error) {
        console.error(error)
    }
}


 const SitemapGeneratorV2 = {
    init
}

export default SitemapGeneratorV2;