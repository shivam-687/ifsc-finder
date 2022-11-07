import BankService from "../data/BankService";
import fs from 'fs';

async function generate(bankList: string[], index: number){
    let urls: string[] = [];
    const bankName = bankList[index];
    const bankDatas = await BankService.getBankData(bankName);

    // If no bank data found return remaind urls aaray
    if(!bankDatas || bankDatas.length <= 0) return urls;
    urls = bankDatas.map(bank => {
        const url = `${bank.bankName}/${bank.state}/${bank.distric}/${bank.branch}`.toLowerCase().replaceAll('&', '&amp;').replaceAll('-', '').trim()
        const str = `<url><loc>https://www.findifscode.in/${encodeURI(url)}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`
        return str;
    });

    if(index++ <= bankList.length-1){
        const res = await generate(bankList, index++);
        urls.push(...res);
    }
    return urls;
}

export async function saveXmlFile(xmlData: string){
    fs.writeFileSync('public/sitemap.xml', xmlData);
    return;
}


export default async function generateSitemap(){
    const bankList = await BankService.allBankList();
    console.log(bankList)
    const urlArray = await generate(bankList, 0);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlArray.join('')}
    </urlset>`;
    await saveXmlFile(sitemap);
    return sitemap;
}

