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
        const str = `
        <url>
        <loc>https://www.findifscode.in/${encodeURI(url)}</loc>
        <lastmod>${new Date().toLocaleDateString()}</lastmod>
        <changefreq>always</changefreq>
        <priority>0.8</priority>
        </url>
        `
        return str;
    });

    if(index++ <= bankList.length-1){
        const res = await generate(bankList, index++);
        urls.push(...res);
    }
    return urls;
}

export async function saveXmlFile(xmlData: string){
    fs.writeFileSync('sitemap.xml', xmlData);
    return;
}


export default async function generateSitemap(){
    const bankList = await BankService.allBankList();
    console.log(bankList)
    const urlArray = await generate(bankList, 0);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlArray.join('/\n')}
    </urlset>`;
    await saveXmlFile(sitemap);
    return sitemap;
}

