import fs from 'fs';
import path from 'path';
import { BankMap } from './bankMap';
import BankNames from '../banknames.json';



export function createBankMapFile () {
    // STEP 1: GET LIST OF FILE NAME AND EXTENSON FROM BY-BANK DIRECTORY
    const pathName = path.join(__dirname, '../../../bank_data/by-bank/');
    const writerPathName = path.join(__dirname, '../../../bank_data/api/bankMap.ts');
    fs.readdir(pathName, (err, files) => {
        if(err){
            console.error("Error is reading from banking-data directory:: ", err);
        }

        if(!files || files.length <= 0) console.log("No files found")


        // STEP 2: CREATE FILE bankMap.ts AND WRITE   '{FILE_NAME}': async () => await import('../by-bank/{FILE_NAME}.json',  { assert: { type: "json" }}),
        let fileDataArray: string[] = [];
        files.forEach(async (f) => {
            fileDataArray.push(`"${path.parse(f).name}": async () => await import('../by-bank/${f}',  { assert: { type: "json" }}),`)
        });
        const dataStr = `
        export const BankMap = {
            ${fileDataArray.join('\n')}
        }
        `;
        console.log("Writing... start")
        fs.writeFileSync(writerPathName, dataStr)
        console.log("Writing... complete")
    })
}

export async function filterBankNameByMapFile(){
    const bankMapFileLoc = path.join(__dirname, '../../../bank_data/banknames.json')

    const bankMapKeys = Object.keys(BankMap);
    const strArr: string[] = [];
    bankMapKeys.forEach(async (key) => {
        const b = BankMap[key as keyof typeof BankMap];
        const bd: any = await b();
        strArr.push(`"${key}":"${bd["BANK"]}`)
    });

    const str = `
    {
        ${strArr.join('\n')}
    }
    `;
    console.log("Writing... start")
    try {
        console.log(strArr.length)
        fs.writeFileSync(bankMapFileLoc, str);
    } catch (error) {
        console.error(error)
    }
}

export async function createAvailableBanksListFile(){
    const file = path.join(__dirname, '../../../bank_data/allBankList.ts')
    const avBankKeys = Object.keys(BankMap);
    const allBankNameKeys = Object.keys(BankNames)
    const strArr: string[] = [];
    avBankKeys.forEach(k => {
        if(Object.hasOwn(BankNames, k)){
            strArr.push(`"${k}":"${BankNames[k as keyof typeof BankNames]}",`)
        }
    });
    const dataStr = `
    const AllBanksList = {
        ${strArr.join('\n')}
    }
    `;
    console.log("Writing Start");
    fs.writeFileSync(file, dataStr);
    console.log("Writing Complete");
}