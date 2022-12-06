import fs from 'fs';
import { BankMap } from '../bank_data/api/bankMap';
import { BankModel } from '../bank_data/api/BankModel';
import { AllBanksList } from '../bank_data/allBankList';
import path from 'path';
import { to_slug } from './helpers';
const bankList = AllBanksList;

async function init() {

    let currentFileIndex = 0;
    let currentFile = null;

    const createdSitemapLinks = await createChunksSitemap();
    // console.log("CHUNKS:: ", createdSitemapLinks)
    // const list = Object.keys(AllBanksList).map(val => `${val}.xml`)
    // const sitmapString = sitmapIndexWrapper(list);
    // writeBankData(sitmapString, path.join('public', 'sitemap.xml'))

}

async function createChunksSitemap() {
    const codes = Object.keys(AllBanksList);
    console.log("Chunks creating: ")
    codes.forEach(async (code) => {
        await sitemapByBankCode(code).then(val => {
            genSitemap(val);
        })
    })
    console.log("Chunks created")
}

function genSitemap(bankModels: BankModel[], options?:{limit?: number, index?: number}){
    const limit = options&&options.limit||1000;
    const data = bankModels.length > limit ? bankModels.slice(0, 1000-1) : bankModels;
    const nextData = bankModels.length > limit ? bankModels.slice(data.length-1): undefined;
    const curIndex = options && options.index && options.index !== 0 ? options.index : 1;
    const name = bankModels[0].BANK.replaceAll(' ', '_').toLowerCase().replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_')+'_'+curIndex+'.xml';
    try {
        const sitemapArr = getSitmap(data);
        const p = path.join('public', 'sitemaps', name);
        writeBankData(sitmapWrapper(sitemapArr), p);

        if(nextData){
            genSitemap(nextData, {index: curIndex+1})
        }
    } catch (error: any) {
        throw new Error(error);
    }
}




async function writeBankData(data: string, path: string) {
    try {
        fs.writeFileSync(path, data);
    } catch (error) {
        console.error(error)
    }
}

function getSitmap(banks: BankModel[]) {
    const sitemapArray = banks.map(bank => {
        const url = `${to_slug(bank.BANK)}/${to_slug(bank.STATE)}/${to_slug(bank.DISTRICT)}/${to_slug(bank.BRANCH)}`
        const str = `<url><loc>https://www.findifscode.in/${url}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
        return str;
    });
    return sitemapArray;
}

async function sitemapByBankCode(code: string) {
    const bankData = BankMap[code as keyof typeof BankMap];
    const data: { [key: string]: BankModel } = await (await bankData()).default;
    const values = Object.values(data);
    return values;
}

function sitmapWrapper(data: string[] | string) {
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${typeof data === 'object' && Array.isArray(data) ? data.join('\n') : data}
    </urlset>`;
    return sitemap.trim();
}

function sitmapIndexWrapper(sitemapLinks: string[]) {
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapLinks.map(link => {
        return `
        <sitemap>
            <loc>https://www.findifscode.in/sitemaps/${link}</loc>
        </sitemap>
        `
    }).join('\n').trim()}
    </sitemapindex>
    `
    return sitemap.trim();
}

async function initIndexing(){
    try {
        const sitemapChunkDirPath = path.join('public','sitemaps');
        const fileNames = fs.readdirSync(sitemapChunkDirPath)
        const mainSitemapString = sitmapIndexWrapper(fileNames);
        writeBankData(mainSitemapString, path.join('public', 'sitemap.xml'))
    } catch (error) {
        console.error(error)
    }
}


const SitemapGeneratorV2 = {
    init,
    initIndexing
}

export default SitemapGeneratorV2;