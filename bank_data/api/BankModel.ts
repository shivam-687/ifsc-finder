export type BankModel = {
    "BANK": string,
    "IFSC": string,
    MICR?: string|null,
    BRANCH: string,
    ADDRESS: string,
    STATE: string,
    CONTACT?: string|null,
    UPI?: boolean|null,
    RTGS?: boolean|null,
    CITY: string,
    CENTRE?: string|null,
    DISTRICT: string,
    NEFT?: boolean|null,
    IMPS?: boolean|null,
    SWIFT?: any|null
}