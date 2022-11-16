
// ABHYUDAYA COOPERATIVE BANK LIMITED

export const AllBankList = [
    {
        name: 'abhyudaya cooperative bank'  //db1.json
    },
    {
        name: 'union bank of india'     //db2.json
    },
    {
        name: 'ahmedabad mercantile cooperative bank'       //db3.json
    },
    {
        name: 'ahmednagar merchants co-op bank ltd'         //db4.json
    },
    {
        name: 'airtel payments bank limited'            //db5.json
    },
    {
        name: 'almora urban cooperative bank limited'   //db6.json
    },
    {
        name: 'ambarnath jaihind coop bank ltd ambarnath'   //db7.json
    },
    {
        name: 'andhra bank'     //db8.json
    },
    {
        name: 'australia and new zealand banking group limited'     //db9.json
    },
    {
        name: 'andhra pragathi grameena bank'       //db10.json
    },
    {
        name: 'andhra pradesh grameena vikas bank'     //db11.json
    },
    {
        name: 'bank of ceylon'      //db12.json
    },
    {
        name: 'bank of baroda'
    },
    {
        name: 'bank of baharain and kuwait bsc'
    },
    {
        name: 'bank of america'
    },
    {
        name: 'bombay mercantile cooperative bank ltd'
    },
    {
        name: 'bharat cooperative bank mumbai limited'
    },
    {
        name: 'bhagini nivedita sahakari bank ltd pune'
    },
    {
        name: 'b n p paribas'
    },
    {
        name: 'bassein catholic cooperative bank limited'
    },
    {
        name: 'barclays bank'
    },
    {
        name: 'canara bank'
    },
    {
        name: 'city union bank limited'
    },
    {
        name: 'credit suisee ag'
    },
    {
        name: 'capital small finance bank limited'
    },
    {
        name: 'coastal local area bank ltd'
    },
    {
        name: 'csb bank limited'
    },
    {
        name: 'chhattisgarh rajya gramin bank'
    },
    
    
]

export const BankMapWithFile: {[key: string]:any} = {
    'abhyudaya cooperative bank': async () => await import('./db1.json', { assert: { type: "json" } }),
    'union bank of india': async () => await import('./db3.json', { assert: { type: "json" } }),
    'ahmedabad mercantile cooperative bank': async () => await import('./db2.json', { assert: { type: "json" } }),
    'ahmednagar merchants co-op bank ltd': async () => await import('./db4.json', { assert: { type: "json" } }),
    'airtel payments bank limited': async () => await import('./db5.json', { assert: { type: "json" } }),
    'almora urban cooperative bank limited': async () => await import('./db6.json', { assert: { type: "json" } }),
    'ambarnath jaihind coop bank ltd ambarnath': async () => await import('./db7.json', { assert: { type: "json" } }),
    'andhra bank': async () => await import('./db8.json', { assert: { type: "json" } }),
    'australia and new zealand banking group limited': async () => await import('./db9.json', { assert: { type: "json" } }),
    'andhra pragathi grameena bank':async () => await import('./db10.json', { assert: { type: "json" } }),
    'andhra pradesh grameena vikas bank':async () => await import('./db11.json', { assert: { type: "json" } }),
    'bank of ceylon':async () => await import('./db12.json', { assert: { type: "json" } }),
    'bank of baroda': async () => await import('./db13.json', { assert: { type: "json" } }),
    'bank of baharain and kuwait bsc':async () => await import('./db14.json', { assert: { type: "json" } }),
    'bank of america':async () => await import('./db15.json', { assert: { type: "json" } }),
    'bombay mercantile cooperative bank ltd':async () => await import('./db16.json', { assert: { type: "json" } }),
    'bhagini nivedita sahakari bank ltd pune':async () => await import('./db17.json', { assert: { type: "json" } }),
    'bharat cooperative bank mumbai limited':async () => await import('./db18.json', { assert: { type: "json" } }),
    'b n p paribas':async () => await import('./db19.json', { assert: { type: "json" } }),
    'bassein catholic cooperative bank limited': async () => await import('./db20.json', { assert: { type: "json" } }),
    'barclays bank': async () => await import('./db21.json', { assert: { type: "json" } }),
    'canara bank': async () => await import('./db23.json', { assert: { type: "json" } }),
    'credit suisee ag': async () => await import('./db24.json', { assert: { type: "json" } }),
    'capital small finance bank limited': async () => await import('./db27.json', { assert: { type: "json" } }),
    'csb bank limited': async () => await import('./db29.json', { assert: { type: "json" } }),
    'coastal local area bank ltd': async () => await import('./db30.json', { assert: { type: "json" } }),
    'chhattisgarh rajya gramin bank': async () => await import('./db31.json', { assert: { type: "json" } }),
    
}