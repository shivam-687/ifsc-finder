import fs from 'fs';
import { BankMap } from '../bank_data/api/bankMap';
import { BankModel } from '../bank_data/api/BankModel';
import { AllBanksList } from '../bank_data/allBankList';
import path from 'path';
const bankList = AllBanksList;

async function init() {

    let currentFileIndex = 0;
    let currentFile = null;

    // const createdSitemapLinks = await createChunksSitemap();
    // console.log("CHUNKS:: ", createdSitemapLinks)
    const list = Object.keys(AllBanksList).map(val => `${val}.xml`)
    const sitmapString = sitmapIndexWrapper(list);
    writeBankData(sitmapString, path.join('public', 'sitemap.xml'))

}

async function createChunksSitemap() {
    const codes = Object.keys(AllBanksList);
    const createdLinks: string[] = [];
    console.log("Chunks creating: ")
    codes.forEach(async (code) => {
        await sitemapByBankCode(code).then(val => {
            const sitmapArr = getSitmap(val);
            const fileName = `${code}.xml`
            const p = path.join('public', 'sitemaps', fileName);
            writeBankData(sitmapWrapper(sitmapArr), p);
            createdLinks.push(fileName);
        })
    })
    console.log("Chunks created");
    

    return createdLinks;
}

async function bankDataLoader(currentIndex: number, codelist: string[]) {
    if (currentIndex >= codelist.length) return;
    try {
        const code = codelist[currentIndex];
        if (!code) return;
        // console.log("Code",code, codelist)
        const bankData = BankMap[code as keyof typeof BankMap];
        const banks: { [key: string]: BankModel } = await (await bankData()).default;
        const prevData = await bankDataLoader(currentIndex++, codelist);
        const bankList = [...Object.values(banks)];
        bankList.push(...prevData || [])
        return bankList;
    } catch (error) {
        console.error(error);
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
        const url = `${bank.BANK}/${bank.STATE}/${bank.DISTRICT}/${bank.BRANCH}`.toLowerCase().replaceAll('&', '&amp;').replaceAll('-', '').trim()
        const str = `<url><loc>https://www.findifscode.in/${encodeURI(url)}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
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
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${typeof data === 'object' && Array.isArray(data) ? data.join('\n') : data}
    </urlset>`;
    return sitemap;
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
    }).join('\n')}
    </sitemapindex>
    `
    return sitemap;
}


const SitemapGeneratorV2 = {
    init
}

export default SitemapGeneratorV2;