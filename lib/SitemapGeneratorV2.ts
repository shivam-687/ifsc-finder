import fs from 'fs';
import { BankMap } from '../bank_data/api/bankMap';
import { BankModel } from '../bank_data/api/BankModel';
import { AllBanksList } from '../bank_data/allBankList';
import path from 'path';
const bankList = AllBanksList;

async function init(){
   
    let currentFileIndex = 0;
    let currentFile = null;

    await sitemapByBankCode('ABHY').then(val => {
        const sitmapArr = getSitmap(val);
        writeBankData(sitmapWrapper(sitmapArr), 'abhy.xml');
    })
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

async function writeBankData(data: string, filename?:string){
    try {
        console.log("Start writing")
        const p = path.join('public', filename||'sitemap.xml')
        fs.writeFileSync(p, data);
    } catch (error) {
        console.error(error)
    }
}

function getSitmap(banks: BankModel[]){
    const sitemapArray = banks.map(bank => {
        const url = `${bank.BANK}/${bank.STATE}/${bank.DISTRICT}/${bank.BRANCH}`.toLowerCase().replaceAll('&', '&amp;').replaceAll('-', '').trim()
        const str = `<url><loc>https://www.findifscode.in/${encodeURI(url)}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
        return str;
    });
    return sitemapArray;
}

async function sitemapByBankCode(code: string){
    const bankData = BankMap[code as keyof typeof BankMap];
    const data: {[key:string]:BankModel} = await (await bankData()).default;
    const values = Object.values(data);
    return values;
}

 function sitmapWrapper(data: string[]|string){
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${typeof data === 'object' && Array.isArray(data) ?  data.join('\n') : data}
    </urlset>`;
    return sitemap;
}


 const SitemapGeneratorV2 = {
    init
}

export default SitemapGeneratorV2;