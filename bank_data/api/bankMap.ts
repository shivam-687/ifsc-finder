import { BankModel } from './BankModel';


export const BankMap: {[key: string]: ()=>Promise<{default:{[key: string]: any}}>} = {
    "ABHY": async () => await import('../by-bank/ABHY.json', { assert: { type: "json" } }),
    "ABNA": async () => await import('../by-bank/ABNA.json', { assert: { type: "json" } }),
    "ADCC": async () => await import('../by-bank/ADCC.json', { assert: { type: "json" } }),
    "AHDC": async () => await import('../by-bank/AHDC.json', { assert: { type: "json" } }),
    "AIRP": async () => await import('../by-bank/AIRP.json', { assert: { type: "json" } }),
    "AJAR": async () => await import('../by-bank/AJAR.json', { assert: { type: "json" } }),
    "AJHC": async () => await import('../by-bank/AJHC.json', { assert: { type: "json" } }),
    "AKJB": async () => await import('../by-bank/AKJB.json', { assert: { type: "json" } }),
    "ALLA": async () => await import('../by-bank/ALLA.json', { assert: { type: "json" } }),
    "AMCB": async () => await import('../by-bank/AMCB.json', { assert: { type: "json" } }),
    "AMDN": async () => await import('../by-bank/AMDN.json', { assert: { type: "json" } }),
    "ANDB": async () => await import('../by-bank/ANDB.json', { assert: { type: "json" } }),
    "ANZB": async () => await import('../by-bank/ANZB.json', { assert: { type: "json" } }),
    "APBL": async () => await import('../by-bank/APBL.json', { assert: { type: "json" } }),
    "APGB": async () => await import('../by-bank/APGB.json', { assert: { type: "json" } }),
    "APGV": async () => await import('../by-bank/APGV.json', { assert: { type: "json" } }),
    "APMC": async () => await import('../by-bank/APMC.json', { assert: { type: "json" } }),
    "ARBL": async () => await import('../by-bank/ARBL.json', { assert: { type: "json" } }),
    "ASBL": async () => await import('../by-bank/ASBL.json', { assert: { type: "json" } }),
    "AUBL": async () => await import('../by-bank/AUBL.json', { assert: { type: "json" } }),
    "AUCB": async () => await import('../by-bank/AUCB.json', { assert: { type: "json" } }),
    "BACB": async () => await import('../by-bank/BACB.json', { assert: { type: "json" } }),
    "BARA": async () => await import('../by-bank/BARA.json', { assert: { type: "json" } }),
    "BARB": async () => await import('../by-bank/BARB.json', { assert: { type: "json" } }),
    "BARC": async () => await import('../by-bank/BARC.json', { assert: { type: "json" } }),
    "BBKM": async () => await import('../by-bank/BBKM.json', { assert: { type: "json" } }),
    "BCBM": async () => await import('../by-bank/BCBM.json', { assert: { type: "json" } }),
    "BCEY": async () => await import('../by-bank/BCEY.json', { assert: { type: "json" } }),
    "BDBL": async () => await import('../by-bank/BDBL.json', { assert: { type: "json" } }),
    "BKDN": async () => await import('../by-bank/BKDN.json', { assert: { type: "json" } }),
    "BKID": async () => await import('../by-bank/BKID.json', { assert: { type: "json" } }),
    "BMCB": async () => await import('../by-bank/BMCB.json', { assert: { type: "json" } }),
    "BNPA": async () => await import('../by-bank/BNPA.json', { assert: { type: "json" } }),
    "BNSB": async () => await import('../by-bank/BNSB.json', { assert: { type: "json" } }),
    "BOFA": async () => await import('../by-bank/BOFA.json', { assert: { type: "json" } }),
    "BOTM": async () => await import('../by-bank/BOTM.json', { assert: { type: "json" } }),
    "CBIN": async () => await import('../by-bank/CBIN.json', { assert: { type: "json" } }),
    "CCBL": async () => await import('../by-bank/CCBL.json', { assert: { type: "json" } }),
    "CHAS": async () => await import('../by-bank/CHAS.json', { assert: { type: "json" } }),
    "CITI": async () => await import('../by-bank/CITI.json', { assert: { type: "json" } }),
    "CIUB": async () => await import('../by-bank/CIUB.json', { assert: { type: "json" } }),
    "CLBL": async () => await import('../by-bank/CLBL.json', { assert: { type: "json" } }),
    "CNRB": async () => await import('../by-bank/CNRB.json', { assert: { type: "json" } }),
    "COAS": async () => await import('../by-bank/COAS.json', { assert: { type: "json" } }),
    "CORP": async () => await import('../by-bank/CORP.json', { assert: { type: "json" } }),
    "COSB": async () => await import('../by-bank/COSB.json', { assert: { type: "json" } }),
    "CRES": async () => await import('../by-bank/CRES.json', { assert: { type: "json" } }),
    "CRGB": async () => await import('../by-bank/CRGB.json', { assert: { type: "json" } }),
    "CRLY": async () => await import('../by-bank/CRLY.json', { assert: { type: "json" } }),
    "CRUB": async () => await import('../by-bank/CRUB.json', { assert: { type: "json" } }),
    "CSBK": async () => await import('../by-bank/CSBK.json', { assert: { type: "json" } }),
    "CSBX": async () => await import('../by-bank/CSBX.json', { assert: { type: "json" } }),
    "CTCB": async () => await import('../by-bank/CTCB.json', { assert: { type: "json" } }),
    "DBSS": async () => await import('../by-bank/DBSS.json', { assert: { type: "json" } }),
    "DCBL": async () => await import('../by-bank/DCBL.json', { assert: { type: "json" } }),
    "DCUB": async () => await import('../by-bank/DCUB.json', { assert: { type: "json" } }),
    "DEOB": async () => await import('../by-bank/DEOB.json', { assert: { type: "json" } }),
    "DEUT": async () => await import('../by-bank/DEUT.json', { assert: { type: "json" } }),
    "DICG": async () => await import('../by-bank/DICG.json', { assert: { type: "json" } }),
    "DLSC": async () => await import('../by-bank/DLSC.json', { assert: { type: "json" } }),
    "DLXB": async () => await import('../by-bank/DLXB.json', { assert: { type: "json" } }),
    "DMKJ": async () => await import('../by-bank/DMKJ.json', { assert: { type: "json" } }),
    "DNSB": async () => await import('../by-bank/DNSB.json', { assert: { type: "json" } }),
    "DOHB": async () => await import('../by-bank/DOHB.json', { assert: { type: "json" } }),
    "DURG": async () => await import('../by-bank/DURG.json', { assert: { type: "json" } }),
    "EBIL": async () => await import('../by-bank/EBIL.json', { assert: { type: "json" } }),
    "EIBI": async () => await import('../by-bank/EIBI.json', { assert: { type: "json" } }),
    "ESFB": async () => await import('../by-bank/ESFB.json', { assert: { type: "json" } }),
    "ESMF": async () => await import('../by-bank/ESMF.json', { assert: { type: "json" } }),
    "FDRL": async () => await import('../by-bank/FDRL.json', { assert: { type: "json" } }),
    "FINO": async () => await import('../by-bank/FINO.json', { assert: { type: "json" } }),
    "FIRN": async () => await import('../by-bank/FIRN.json', { assert: { type: "json" } }),
    "FSFB": async () => await import('../by-bank/FSFB.json', { assert: { type: "json" } }),
    "GBCB": async () => await import('../by-bank/GBCB.json', { assert: { type: "json" } }),
    "GDCB": async () => await import('../by-bank/GDCB.json', { assert: { type: "json" } }),
    "GSCB": async () => await import('../by-bank/GSCB.json', { assert: { type: "json" } }),
    "HARC": async () => await import('../by-bank/HARC.json', { assert: { type: "json" } }),
    "HCBL": async () => await import('../by-bank/HCBL.json', { assert: { type: "json" } }),
    "HDFC": async () => await import('../by-bank/HDFC.json', { assert: { type: "json" } }),
    "HPSC": async () => await import('../by-bank/HPSC.json', { assert: { type: "json" } }),
    "HSBC": async () => await import('../by-bank/HSBC.json', { assert: { type: "json" } }),
    "HUSB": async () => await import('../by-bank/HUSB.json', { assert: { type: "json" } }),
    "HVBK": async () => await import('../by-bank/HVBK.json', { assert: { type: "json" } }),
    "IBBK": async () => await import('../by-bank/IBBK.json', { assert: { type: "json" } }),
    "IBKL": async () => await import('../by-bank/IBKL.json', { assert: { type: "json" } }),
    "IBKO": async () => await import('../by-bank/IBKO.json', { assert: { type: "json" } }),
    "ICBK": async () => await import('../by-bank/ICBK.json', { assert: { type: "json" } }),
    "ICIC": async () => await import('../by-bank/ICIC.json', { assert: { type: "json" } }),
    "ICLL": async () => await import('../by-bank/ICLL.json', { assert: { type: "json" } }),
    "IDFB": async () => await import('../by-bank/IDFB.json', { assert: { type: "json" } }),
    "IDIB": async () => await import('../by-bank/IDIB.json', { assert: { type: "json" } }),
    "IDUK": async () => await import('../by-bank/IDUK.json', { assert: { type: "json" } }),
    "INDB": async () => await import('../by-bank/INDB.json', { assert: { type: "json" } }),
    "IOBA": async () => await import('../by-bank/IOBA.json', { assert: { type: "json" } }),
    "IPOS": async () => await import('../by-bank/IPOS.json', { assert: { type: "json" } }),
    "ITBL": async () => await import('../by-bank/ITBL.json', { assert: { type: "json" } }),
    "JAKA": async () => await import('../by-bank/JAKA.json', { assert: { type: "json" } }),
    "JANA": async () => await import('../by-bank/JANA.json', { assert: { type: "json" } }),
    "JASB": async () => await import('../by-bank/JASB.json', { assert: { type: "json" } }),
    "JIOP": async () => await import('../by-bank/JIOP.json', { assert: { type: "json" } }),
    "JJSB": async () => await import('../by-bank/JJSB.json', { assert: { type: "json" } }),
    "JPCB": async () => await import('../by-bank/JPCB.json', { assert: { type: "json" } }),
    "JSBL": async () => await import('../by-bank/JSBL.json', { assert: { type: "json" } }),
    "JSBP": async () => await import('../by-bank/JSBP.json', { assert: { type: "json" } }),
    "JSFB": async () => await import('../by-bank/JSFB.json', { assert: { type: "json" } }),
    "JTSC": async () => await import('../by-bank/JTSC.json', { assert: { type: "json" } }),
    "KACE": async () => await import('../by-bank/KACE.json', { assert: { type: "json" } }),
    "KAIJ": async () => await import('../by-bank/KAIJ.json', { assert: { type: "json" } }),
    "KANG": async () => await import('../by-bank/KANG.json', { assert: { type: "json" } }),
    "KARB": async () => await import('../by-bank/KARB.json', { assert: { type: "json" } }),
    "KBKB": async () => await import('../by-bank/KBKB.json', { assert: { type: "json" } }),
    "KCCB": async () => await import('../by-bank/KCCB.json', { assert: { type: "json" } }),
    "KDCB": async () => await import('../by-bank/KDCB.json', { assert: { type: "json" } }),
    "KJSB": async () => await import('../by-bank/KJSB.json', { assert: { type: "json" } }),
    "KKBK": async () => await import('../by-bank/KKBK.json', { assert: { type: "json" } }),
    "KLGB": async () => await import('../by-bank/KLGB.json', { assert: { type: "json" } }),
    "KNSB": async () => await import('../by-bank/KNSB.json', { assert: { type: "json" } }),
    "KOEX": async () => await import('../by-bank/KOEX.json', { assert: { type: "json" } }),
    "KOLH": async () => await import('../by-bank/KOLH.json', { assert: { type: "json" } }),
    "KSBK": async () => await import('../by-bank/KSBK.json', { assert: { type: "json" } }),
    "KSCB": async () => await import('../by-bank/KSCB.json', { assert: { type: "json" } }),
    "KUCB": async () => await import('../by-bank/KUCB.json', { assert: { type: "json" } }),
    "KVBL": async () => await import('../by-bank/KVBL.json', { assert: { type: "json" } }),
    "KVGB": async () => await import('../by-bank/KVGB.json', { assert: { type: "json" } }),
    "LAVB": async () => await import('../by-bank/LAVB.json', { assert: { type: "json" } }),
    "MAHB": async () => await import('../by-bank/MAHB.json', { assert: { type: "json" } }),
    "MAHG": async () => await import('../by-bank/MAHG.json', { assert: { type: "json" } }),
    "MCAB": async () => await import('../by-bank/MCAB.json', { assert: { type: "json" } }),
    "MCBL": async () => await import('../by-bank/MCBL.json', { assert: { type: "json" } }),
    "MDBK": async () => await import('../by-bank/MDBK.json', { assert: { type: "json" } }),
    "MDCB": async () => await import('../by-bank/MDCB.json', { assert: { type: "json" } }),
    "MHCB": async () => await import('../by-bank/MHCB.json', { assert: { type: "json" } }),
    "MKPB": async () => await import('../by-bank/MKPB.json', { assert: { type: "json" } }),
    "MSBL": async () => await import('../by-bank/MSBL.json', { assert: { type: "json" } }),
    "MSCI": async () => await import('../by-bank/MSCI.json', { assert: { type: "json" } }),
    "MSHQ": async () => await import('../by-bank/MSHQ.json', { assert: { type: "json" } }),
    "MSLM": async () => await import('../by-bank/MSLM.json', { assert: { type: "json" } }),
    "MSNU": async () => await import('../by-bank/MSNU.json', { assert: { type: "json" } }),
    "MUBL": async () => await import('../by-bank/MUBL.json', { assert: { type: "json" } }),
    "MVCB": async () => await import('../by-bank/MVCB.json', { assert: { type: "json" } }),
    "NBAD": async () => await import('../by-bank/NBAD.json', { assert: { type: "json" } }),
    "NBRD": async () => await import('../by-bank/NBRD.json', { assert: { type: "json" } }),
    "NCUB": async () => await import('../by-bank/NCUB.json', { assert: { type: "json" } }),
    "NESF": async () => await import('../by-bank/NESF.json', { assert: { type: "json" } }),
    "NGSB": async () => await import('../by-bank/NGSB.json', { assert: { type: "json" } }),
    "NICB": async () => await import('../by-bank/NICB.json', { assert: { type: "json" } }),
    "NJBK": async () => await import('../by-bank/NJBK.json', { assert: { type: "json" } }),
    "NKGS": async () => await import('../by-bank/NKGS.json', { assert: { type: "json" } }),
    "NMCB": async () => await import('../by-bank/NMCB.json', { assert: { type: "json" } }),
    "NNSB": async () => await import('../by-bank/NNSB.json', { assert: { type: "json" } }),
    "NOSC": async () => await import('../by-bank/NOSC.json', { assert: { type: "json" } }),
    "NSPB": async () => await import('../by-bank/NSPB.json', { assert: { type: "json" } }),
    "NTBL": async () => await import('../by-bank/NTBL.json', { assert: { type: "json" } }),
    "NUCB": async () => await import('../by-bank/NUCB.json', { assert: { type: "json" } }),
    "NVNM": async () => await import('../by-bank/NVNM.json', { assert: { type: "json" } }),
    "ORBC": async () => await import('../by-bank/ORBC.json', { assert: { type: "json" } }),
    "ORCB": async () => await import('../by-bank/ORCB.json', { assert: { type: "json" } }),
    "PJSB": async () => await import('../by-bank/PJSB.json', { assert: { type: "json" } }),
    "PKGB": async () => await import('../by-bank/PKGB.json', { assert: { type: "json" } }),
    "PMEC": async () => await import('../by-bank/PMEC.json', { assert: { type: "json" } }),
    "PSBL": async () => await import('../by-bank/PSBL.json', { assert: { type: "json" } }),
    "PSIB": async () => await import('../by-bank/PSIB.json', { assert: { type: "json" } }),
    "PUCB": async () => await import('../by-bank/PUCB.json', { assert: { type: "json" } }),
    "PUNB": async () => await import('../by-bank/PUNB.json', { assert: { type: "json" } }),
    "PUSD": async () => await import('../by-bank/PUSD.json', { assert: { type: "json" } }),
    "PYTM": async () => await import('../by-bank/PYTM.json', { assert: { type: "json" } }),
    "QNBA": async () => await import('../by-bank/QNBA.json', { assert: { type: "json" } }),
    "RABO": async () => await import('../by-bank/RABO.json', { assert: { type: "json" } }),
    "RATN": async () => await import('../by-bank/RATN.json', { assert: { type: "json" } }),
    "RBIN": async () => await import('../by-bank/RBIN.json', { assert: { type: "json" } }),
    "RBIP": async () => await import('../by-bank/RBIP.json', { assert: { type: "json" } }),
    "RBIS": async () => await import('../by-bank/RBIS.json', { assert: { type: "json" } }),
    "RDCB": async () => await import('../by-bank/RDCB.json', { assert: { type: "json" } }),
    "RMGB": async () => await import('../by-bank/RMGB.json', { assert: { type: "json" } }),
    "RNSB": async () => await import('../by-bank/RNSB.json', { assert: { type: "json" } }),
    "RRBP": async () => await import('../by-bank/RRBP.json', { assert: { type: "json" } }),
    "RSBL": async () => await import('../by-bank/RSBL.json', { assert: { type: "json" } }),
    "RSCB": async () => await import('../by-bank/RSCB.json', { assert: { type: "json" } }),
    "RSSB": async () => await import('../by-bank/RSSB.json', { assert: { type: "json" } }),
    "SABR": async () => await import('../by-bank/SABR.json', { assert: { type: "json" } }),
    "SAHE": async () => await import('../by-bank/SAHE.json', { assert: { type: "json" } }),
    "SANT": async () => await import('../by-bank/SANT.json', { assert: { type: "json" } }),
    "SBIN": async () => await import('../by-bank/SBIN.json', { assert: { type: "json" } }),
    "SBLS": async () => await import('../by-bank/SBLS.json', { assert: { type: "json" } }),
    "SCBL": async () => await import('../by-bank/SCBL.json', { assert: { type: "json" } }),
    "SDCB": async () => await import('../by-bank/SDCB.json', { assert: { type: "json" } }),
    "SDCE": async () => await import('../by-bank/SDCE.json', { assert: { type: "json" } }),
    "SECB": async () => await import('../by-bank/SECB.json', { assert: { type: "json" } }),
    "SHBK": async () => await import('../by-bank/SHBK.json', { assert: { type: "json" } }),
    "SIBL": async () => await import('../by-bank/SIBL.json', { assert: { type: "json" } }),
    "SIDC": async () => await import('../by-bank/SIDC.json', { assert: { type: "json" } }),
    "SJSB": async () => await import('../by-bank/SJSB.json', { assert: { type: "json" } }),
    "SKNB": async () => await import('../by-bank/SKNB.json', { assert: { type: "json" } }),
    "SKSB": async () => await import('../by-bank/SKSB.json', { assert: { type: "json" } }),
    "SMBC": async () => await import('../by-bank/SMBC.json', { assert: { type: "json" } }),
    "SMCB": async () => await import('../by-bank/SMCB.json', { assert: { type: "json" } }),
    "SMNB": async () => await import('../by-bank/SMNB.json', { assert: { type: "json" } }),
    "SNBK": async () => await import('../by-bank/SNBK.json', { assert: { type: "json" } }),
    "SOGE": async () => await import('../by-bank/SOGE.json', { assert: { type: "json" } }),
    "SPCB": async () => await import('../by-bank/SPCB.json', { assert: { type: "json" } }),
    "SRCB": async () => await import('../by-bank/SRCB.json', { assert: { type: "json" } }),
    "STCB": async () => await import('../by-bank/STCB.json', { assert: { type: "json" } }),
    "SUNB": async () => await import('../by-bank/SUNB.json', { assert: { type: "json" } }),
    "SURY": async () => await import('../by-bank/SURY.json', { assert: { type: "json" } }),
    "SUSB": async () => await import('../by-bank/SUSB.json', { assert: { type: "json" } }),
    "SUTB": async () => await import('../by-bank/SUTB.json', { assert: { type: "json" } }),
    "SVCB": async () => await import('../by-bank/SVCB.json', { assert: { type: "json" } }),
    "SVSH": async () => await import('../by-bank/SVSH.json', { assert: { type: "json" } }),
    "SYNB": async () => await import('../by-bank/SYNB.json', { assert: { type: "json" } }),
    "TAUB": async () => await import('../by-bank/TAUB.json', { assert: { type: "json" } }),
    "TBMC": async () => await import('../by-bank/TBMC.json', { assert: { type: "json" } }),
    "TBSB": async () => await import('../by-bank/TBSB.json', { assert: { type: "json" } }),
    "TDCB": async () => await import('../by-bank/TDCB.json', { assert: { type: "json" } }),
    "TGMB": async () => await import('../by-bank/TGMB.json', { assert: { type: "json" } }),
    "THRS": async () => await import('../by-bank/THRS.json', { assert: { type: "json" } }),
    "TJSB": async () => await import('../by-bank/TJSB.json', { assert: { type: "json" } }),
    "TMBL": async () => await import('../by-bank/TMBL.json', { assert: { type: "json" } }),
    "TMSB": async () => await import('../by-bank/TMSB.json', { assert: { type: "json" } }),
    "TNCB": async () => await import('../by-bank/TNCB.json', { assert: { type: "json" } }),
    "TNSC": async () => await import('../by-bank/TNSC.json', { assert: { type: "json" } }),
    "TPSC": async () => await import('../by-bank/TPSC.json', { assert: { type: "json" } }),
    "TSAB": async () => await import('../by-bank/TSAB.json', { assert: { type: "json" } }),
    "TSSB": async () => await import('../by-bank/TSSB.json', { assert: { type: "json" } }),
    "TTCB": async () => await import('../by-bank/TTCB.json', { assert: { type: "json" } }),
    "UBIN": async () => await import('../by-bank/UBIN.json', { assert: { type: "json" } }),
    "UCBA": async () => await import('../by-bank/UCBA.json', { assert: { type: "json" } }),
    "UJVN": async () => await import('../by-bank/UJVN.json', { assert: { type: "json" } }),
    "UOVB": async () => await import('../by-bank/UOVB.json', { assert: { type: "json" } }),
    "UPCB": async () => await import('../by-bank/UPCB.json', { assert: { type: "json" } }),
    "URBN": async () => await import('../by-bank/URBN.json', { assert: { type: "json" } }),
    "UTBI": async () => await import('../by-bank/UTBI.json', { assert: { type: "json" } }),
    "UTIB": async () => await import('../by-bank/UTIB.json', { assert: { type: "json" } }),
    "UTKS": async () => await import('../by-bank/UTKS.json', { assert: { type: "json" } }),
    "UUCB": async () => await import('../by-bank/UUCB.json', { assert: { type: "json" } }),
    "VARA": async () => await import('../by-bank/VARA.json', { assert: { type: "json" } }),
    "VASJ": async () => await import('../by-bank/VASJ.json', { assert: { type: "json" } }),
    "VCOB": async () => await import('../by-bank/VCOB.json', { assert: { type: "json" } }),
    "VIJB": async () => await import('../by-bank/VIJB.json', { assert: { type: "json" } }),
    "VSBL": async () => await import('../by-bank/VSBL.json', { assert: { type: "json" } }),
    "VVSB": async () => await import('../by-bank/VVSB.json', { assert: { type: "json" } }),
    "WBSC": async () => await import('../by-bank/WBSC.json', { assert: { type: "json" } }),
    "YESB": async () => await import('../by-bank/YESB.json', { assert: { type: "json" } }),
    "ZCBL": async () => await import('../by-bank/ZCBL.json', { assert: { type: "json" } }),
    "ZSBL": async () => await import('../by-bank/ZSBL.json', { assert: { type: "json" } }),
}
