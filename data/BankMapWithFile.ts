
// ABHYUDAYA COOPERATIVE BANK LIMITED

export const AllBankList = [
    {
        name: 'abhyudaya cooperative bank'
    },
    {
        name: 'union bank of india'
    },
    {
        name: 'ahmedabad mercantile cooperative bank'
    },
    {
        name: 'ahmednagar merchants co-op bank ltd'
    },
    {
        name: 'airtel payments bank limited'
    },
    {
        name: 'almora urban cooperative bank limited'
    },
    {
        name: 'ambarnath jaihind coop bank ltd ambarnath'
    }
]

export const BankMapWithFile: {[key: string]:any} = {
    'abhyudaya cooperative bank': async () => await import('./db1.json', { assert: { type: "json" } }),
    'union bank of india': async () => await import('./db3.json', { assert: { type: "json" } }),
    'ahmedabad mercantile cooperative bank': async () => await import('./db2.json', { assert: { type: "json" } }),
    'ahmednagar merchants co-op bank ltd': async () => await import('./db4.json', { assert: { type: "json" } }),
    'airtel payments bank limited': async () => await import('./db5.json', { assert: { type: "json" } }),
    'almora urban cooperative bank limited': async () => await import('./db6.json', { assert: { type: "json" } }),
    'ambarnath jaihind coop bank ltd ambarnath': async () => await import('./db7.json', { assert: { type: "json" } }),
}