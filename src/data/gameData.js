const words = [
    "ABİDE", "ABİYE", "ACEMİ", "AFAKİ", "AFİFE", "AFİŞE", "AHALİ", "AHİZE", "AİDAT", "AKİDE", "AKTİF", "ALENİ", "ALEVİ", "AMİGO", "ANEMİ", "ANTİK", "APLİK", "ARABİ", "ARAZİ", "ARİFE", "ARŞİV", "ASABİ", "ASİST", "AŞEVİ", "AŞİNA", "ATARİ", "ATİNA", "AVİZE", "AZAMİ", "AZERİ",

    "BABAİ", "BAHİS", "BAKİR", "BARİZ", "BASİT", "BAZİK", "BEKÇİ", "BELİK", "BELKİ", "BELLİ", "BENİZ", "BESİN", "BEŞİK", "BEŞİZ", "BEYİN", "BEYİT", "BİBER", "BİBLO", "BİÇİM", "BİÇİŞ", "BİÇKİ", "BİÇME", "BİDON", "BİLEK", "BİLET", "BİLGE", "BİLGİ", "BİLİM", "BİLYE", "BİNEK", "BİRAZ", "BİREY", "BİRİM", "BİTAP", "BİTİK", "BİTİM", "BİTİŞ", "BİTKİ", "BİTLİ", "BİTME", "BİZON", "BOBİN", "BUTİK",

    "CAHİL", "CAMİA", "CAZİP", "CEBİR", "CEBRİ", "CELİL", "CEMİL", "CEVİZ", "CİCİM", "CİCOZ", "CİDAR", "CİDDİ", "CİĞER", "CİHAN", "CİHAZ", "CİLVE", "CİMRİ", "CİNLİ", "CİRİT", "CİSİM", "CİVAR", "ÇETİK", "ÇEKİÇ", "ÇEKİK", "ÇEKİM", "ÇEKİŞ", "ÇELİK", "ÇELİM", "ÇENGİ", "ÇERÇİ", "ÇEŞİT", "ÇETİN", "ÇEVİK", "ÇEYİZ", "ÇİÇEK", "ÇİĞDE", "ÇİLEK", "ÇİLLİ", "ÇİMEN", "ÇİNCE", "ÇİNKO", "ÇİROZ", "ÇİZER", "ÇİZGİ", "ÇİZİK", "ÇİZİM", "ÇİZİŞ", "ÇİZME",

    "DAHİL", "DAİMA", "DAİMİ", "DAİRE", "DAKİK", "DEFİN", "DEĞİL", "DEĞİM", "DEĞİN", "DEĞİŞ", "DEİST", "DEİZM", "DELGİ", "DELİK", "DELİL", "DEMİN", "DEMİR", "DEMLİ", "DENİZ", "DERBİ", "DERGİ", "DERİN", "DEVİM", "DEVİR", "DEYİM", "DEYİŞ", "DİBEK", "DİCLE", "DİĞER", "DİKEN", "DİKEY", "DİKİM", "DİKİŞ", "DİKİZ", "DİKME", "DİKTA", "DİKTE", "DİLEK", "DİLİM", "DİLLİ", "DİNAR", "DİNCİ", "DİPLİ", "DİREK", "DİREN", "DİRİM", "DİSKO", "DİŞÇİ", "DİŞLİ", "DİVAN", "DİYAR", "DİYET", "DİYEZ", "DİZEL", "DİZEM", "DİZGE", "DİZGİ", "DİZİM", "DİZİN", "DİZİŞ", "DİZME", "DÖVİZ",

    "EBEDİ", "EDEBİ", "EKİLİ", "EKSİK", "EKSİZ", "EKÜRİ", "ELİPS", "EMİCİ", "EMLİK", "EMTİA", "EMZİK", "ENAYİ", "ENGİN", "ENSİZ", "ENZİM", "ERGİN", "ERİME", "ERKİN", "ERMİŞ", "EROİN", "ESKİZ", "ESPRİ", "EŞLİK", "EŞSİZ", "ETÇİL", "ETKİN", "ETNİK", "EVCİL", "EVRİM", "EVSİZ", "EZELİ", "EZİCİ", "EZİNE",

    "FACİA", "FAHİŞ", "FAKİR", "FATİH", "FEDAİ", "FENNİ", "FERDİ", "FESİH", "FETİH", "FEVRİ", "FİDAN", "FİDYE", "FİGÜR", "FİKİR", "FİLİZ", "FİNAL", "FİRAR", "FİRMA", "FİŞEK", "FİTİL", "FİTNE", "FİYAT", "FİZİK", "FOSİL",

    "GAFİL", "GALİP", "GARİP", "GEÇİM", "GEÇİŞ", "GEÇİT", "GELİN", "GELİR", "GENİŞ", "GENİZ", "GERGİ", "GEYİK", "GİDER", "GİDİŞ", "GİRİŞ", "GİTAR", "GİYİM", "GİYİŞ", "GİYİT", "GİYSİ", "GİZEM", "GİZLİ", "GORİL", "GOTİK",

    "HACİM", "HACİZ", "HADİS", "HAFİF", "HAKİM", "HAMSİ", "HANGİ", "HAPİS", "HARBİ", "HARİÇ", "HAŞİN", "HATİM", "HAVAİ", "HAYLİ", "HAZİN", "HEKİM", "HEPSİ", "HERİF", "HİCAP", "HİCAZ", "HİCİV", "HİCRİ", "HİLAL", "HİNDİ", "HİPPİ", "HİSAR", "HİSLİ", "HİSSE", "HİTAP", "HİTİT",

    "İBLİS", "İBRAZ", "İBRET", "İBRİK", "İÇERİ", "İÇLİK", "İÇMEK", "İÇSEL", "İÇTEN", "İDAME", "İDARE", "İDARİ", "İDDİA", "İDEAL", "İDMAN", "İDRAK", "İDRAR", "İFADE", "İFFET", "İFLAS", "İFRAZ", "İFTAR", "İHALE", "İHBAR", "İHLAL", "İHLAS", "İHMAL", "İHRAÇ", "İHRAM", "İHSAN", "İHTAR", "İKAME", "İKLİM", "İKRAM", "İKSİR", "İLAVE", "İLERİ", "İLETİ", "İLGEÇ", "İLKEL", "İLLET", "İMDAT", "İMECE", "İMKAN", "İMLEÇ", "İMSAK", "İNANÇ", "İNCİK", "İNCİL", "İNCİR", "İNFAZ", "İNKAR", "İNMEK", "İNÖNÜ", "İNSAF", "İNSAN", "İPLİK", "İPSİZ", "İPTAL", "İPUCU", "İRADE", "İRMİK", "İRONİ", "İSHAL", "İSKAN", "İSLAM", "İSPAT", "İSRAF", "İSTEK", "İSTİF", "İSYAN", "İŞGAL", "İŞLEK", "İŞLEM", "İŞLEV", "İŞSİZ", "İŞTAH", "İTAAT", "İTHAL", "İTHAM", "İTİCİ", "İTİNA", "İTMEK", "İVEDİ", "İVMEK", "İYİCE", "İZMİR", "İZNİK", "İZOLE", "İZZET",

    "JİLET",

    "KABİN", "KABİR", "KADİM", "KADİR", "KAFİR", "KAGİR", "KAHİN", "KAİDE", "KAMİL", "KANİŞ", "KASİS", "KAŞİF", "KATİL", "KATİP", "KAVİM", "KAVİS", "KEBİR", "KEFİL", "KEFİR", "KEKİK", "KEMİK", "KEPİR", "KERİM", "KERİZ", "KESİK", "KESİM", "KESİN", "KESİR", "KESİT", "KESKİ", "KEŞİF", "KEŞİK", "KEŞİŞ", "KEYFİ", "KEYİF", "KISMİ", "KİBAR", "KİBİR", "KİLER", "KİLİM", "KİLİS", "KİLİT", "KİLİZ", "KİMSE", "KİMYA", "KİNCİ", "KİNLİ", "KİRAZ", "KİREÇ", "KİRİL", "KİRİŞ", "KİRLİ", "KİRPİ", "KİRVE", "KİTAP", "KİTLE", "KLİMA", "KLİPS", "KLİŞE", "KOMBİ", "KOMİK", "KONİK", "KOPİL", "KREDİ", "KRİKO", "KROKİ", "KULİS",

    "LAHİT", "LAKİN", "LATİF", "LATİN", "LEHİM", "LEZİZ", "LİDER", "LİKİT", "LİKÖR", "LİMAN", "LİMİT", "LİMON", "LİRİK", "LİSAN", "LİSTE", "LİTRE", "LİVAR", "LİYAN",

    "MADDİ", "MAFİŞ", "MALİK", "MASİF", "MATİZ", "MAVİŞ", "MEBİZ", "MEKİK", "MELİK", "MERİÇ", "MERMİ", "MESAİ", "MESİH", "MEŞİN", "METİN", "MEVKİ", "MEVZİ", "MİDYE", "MİKRO", "MİLAS", "MİLAT", "MİLLİ", "MİMAR", "MİMİK", "MİNİK", "MİRAS", "MİSAL", "MİTOZ", "MİYAV", "MİYAZ", "MİYOP", "MİZAÇ", "MİZAH", "MOBİL", "MOTİF", "MUCİT", "MUHİT", "MÜFİT", "MÜHİM", "MÜLKİ", "MÜMİN", "MÜRİT", "MÜZİK",

    "NADİM", "NADİR", "NAFİZ", "NAKDİ", "NAKİL", "NAKİT", "NANİK", "NARİN", "NASİP", "NAŞİR", "NAZİK", "NEDİM", "NEFİS", "NEHİR", "NEMLİ", "NESİL", "NEZİH", "NİCEL", "NİÇİN", "NİĞDE", "NİHAİ", "NİKAH", "NİKEL", "NİMET", "NİNNİ", "NİSAN", "NİSPİ", "NİŞAN", "NİYAZ", "NİYET", "NİZAM",

    "OKAPİ", "OKSİT", "OPTİK", "OTİZM",

    "ÖNERİ", "ÖTEKİ",

    "PANİK", "PARİS", "PARTİ", "PASİF", "PATİK", "PEŞİN", "PİKAP", "PİLAV", "PİLİÇ", "PİLOT", "PİNTİ", "PİPET", "PİŞİK", "PİŞTİ", "PİTON", "PİYAZ", "PİYES", "PİYON", "PİZZA", "POLİS",

    "RAHİM", "RAHİP", "RAKİP", "RALLİ", "REHİN", "REJİM", "RESİM", "RESMİ", "REŞİT", "REVİR", "REZİL", "RİMEL", "RİNGA", "RİTİM", "RİYAD", "RİYAL", "RUBAİ", "RUTİN", "SABİT",

    "SAFİR",
    "SAHİL",
    "SAHİP",
    "SAHNE",
    "SAKİN",
    "SALİM",
    "SAPIK",
    "SANKİ",
    "SEBİL",
    "SEÇİM",
    "SEDİR",
    "SEFİL",
    "SEKİZ",
    "SELİM",
    "SELVİ",
    "SEMAİ",
    "SEMİH",
    "SEMİZ",
    // "SENİT",
    // "SERGİ",
    // "SERİK",
    // "SERİM",
    // "SERİN",
    // "SERİŞ",
    // "SERVİ",
    // "SESÇİ",
    "SESLİ",
    // "SETİR",
    // "SEVGİ",
    // "SEVİM",
    // "SEVİR",
    // "SEVİŞ",
    // "SEYİR",
    // "SEYİS",
    // "SEYİT",
    // "SEZGİ",
    // "SEZİŞ",
    // "SIHHİ",
    // "SİCİL",
    // "SİCİM",
    // "SİDİK",
    // "SİFİN",
    // "SİFON",
    // "SİĞİL",
    // "SİHİR",
    // "SİİRT",
    // "SİKKE",
    // "SİLAH",
    // "SİLGİ",
    // "SİLİK",
    // "SİLİS",
    // "SİLİŞ",
    // "SİLKİ",
    // "SİLLE",
    // "SİLME",
    // "SİMAV",
    // "SİMGE",
    // "SİMİT",
    // "SİMYA",
    // "SİNEK",
    // "SİNİK",
    // "SİNİR",
    // "SİNİŞ",
    // "SİNLE",
    // "SİNME",
    // "SİNOP",
    // "SİNSİ",
    // "SİNÜS",
    // "SİPER",
    // "SİPSİ",
    // "SİREN",
    // "SİRKE",
    // "SİRMO",
    // "SİROZ",
    // "SİRTO",
    // "SİSLİ",
    // "SİTEM",
    // "SİVAS",
    // "SİVİL",
    // "SİVRİ",
    // "SİYAH",
    // "SİYAK",
    // "SİYEK",
    // "SİYER",
    // "SİYME",
    // "SİZCE",
    // "SKİNK",
    // "SORİT",
    // "SORTİ",
    // "SOSİS",
    // "STİLO",
    // "SÜFLİ",
    // "SÜNNİ",

    // "ŞAFİİ",
    // "ŞAHİN",
    // "ŞAHİT",
    // "ŞAHSİ",
    // "ŞAİBE",
    // "ŞAİRE",
    // "ŞAMİL",
    // "ŞARKİ",
    // "ŞARPİ",
    // "ŞAYİA",
    // "ŞEDİT",
    // "ŞEFİK",
    // "ŞEHİR",
    // "ŞEHİT",
    // "ŞEKİL",
    // "ŞEKLİ",
    // "ŞEMSİ",
    // "ŞEPİT",
    // "ŞERİF",
    // "ŞERİK",
    // "ŞERİR",
    // "ŞERİT",
    // "ŞETİM",
    // "ŞİFON",
    // "ŞİFRE",
    // "ŞİKAR",
    // "ŞİLEM",
    // "ŞİLEP",
    // "ŞİLİN",
    // "ŞİLTE",
    // "ŞİMAL",
    // "ŞİMDİ",
    // "ŞİNİK",
    // "ŞİNTO",
    // "ŞİRAN",
    // "ŞİRİN",
    // "ŞİŞEK",
    // "ŞİŞİK",
    // "ŞİŞKO",
    // "ŞİŞLİ",
    // "ŞİŞME",
    // "ŞÖMİZ",

    // "TABİİ",
    // "TABİP",
    // "TABİR",
    // "TACİK",
    // "TACİL",
    // "TACİR",
    // "TACİZ",
    // "TADİL",
    // "TAHİN",
    // "TAKİM",
    // "TAKİP",
    // "TAKSİ",
    // "TAKTİ",
    // "TALİH",
    // "TALİK",
    // "TALİL",
    // "TALİM",
    // "TALİP",
    // "TAMİK",
    // "TAMİM",
    // "TAMİR",
    // "TANİN",
    // "TAPİR",
    // "TARİF",
    // "TARİH",
    // "TARİK",
    // "TARİZ",
    // "TASDİ",
    // "TASNİ",
    // "TATİL",
    // "TAVİK",
    // "TAVİZ",
    // "TAYİN",
    // "TAYİP",
    // "TAZİM",
    // "TAZİP",
    // "TAZİZ",
    // "TEALİ",
    // "TEATİ",
    // "TECİL",
    // "TECİM",
    // "TEDAİ",
    // "TEDİP",
    // "TEHİR",
    // "TEİZM",
    // "TEKÇİ",
    // "TEKİL",
    // "TEKİN",
    // "TEKİR",
    // "TEKİT",
    // "TEKLİ",
    // "TELİF",
    // "TELİN",
    // "TELİS",
    // "TELLİ",
    // "TELSİ",
    // "TEMİN",
    // "TEMİZ",
    // "TENİS",
    // "TEORİ",
    // "TEPİK",
    // "TEPİR",
    // "TEPİŞ",
    // "TEPKİ",
    // "TEPSİ",
    // "TERBİ",
    // "TERFİ",
    // "TERİM",
    // "TERKİ",
    // "TERLİ",
    // "TERZİ",
    // "TESİR",
    // "TESİS",
    // "TESİT",
    // "TESRİ",
    // "TESTİ",
    // "TEŞCİ",
    // "TEŞRİ",
    // "TEŞYİ",
    // "TETİK",
    // "TETİR",
    // "TEVDİ",
    // "TEVİL",
    // "TEVKİ",
    // "TEVSİ",
    // "TEVZİ",
    // "TEYİT",
    // "TEZLİ",
    // "TIBBİ",
    // "TİFÜS",
    // "TİKEL",
    // "TİLKİ",
    // "TİMÜS",
    // "TİNER",
    // "TİPİK",
    // "TİRAJ",
    // "TİRAN",
    // "TİRAN",
    // "TİRAT",
    // "TİRİT",
    // "TİRİZ",
    // "TİRLE",
    // "TİRSİ",
    // "TİRŞE",
    // "TİTAN",
    // "TİTİZ",
    // "TONİK",
    // "TOPİK",
    // "TORİK",
    // "TRİKO",
    // "TUNİK",
    // "TÜRKİ",
    // "TÜVİT",
    // "TVİST",

    // "UMUMİ",

    // "ÜNİTE",
    // "ÜREMİ",
    // "ÜZERİ",

    // "VACİP",
    // "VAHİM",
    // "VAHİT",
    // "VAHİY",
    // "VAHŞİ",
    // "VAKİT",
    // "VALİZ",
    // "VARİL",
    // "VARİS",
    // "VARİT",
    // "VECİH",
    // "VECİZ",
    // "VEDİA",
    // "VEHİM",
    // "VEKİL",
    // "VERDİ",
    // "VERGİ",
    // "VERİM",
    // "VERİŞ",
    // "VERİT",
    // "VEZİN",
    // "VEZİR",
    // "VİDEO",
    // "VİGLA",
    // "VİLLA",
    // "VİRAJ",
    // "VİRAL",
    // "VİRAN",
    // "VİRÜS",
    // "VİSAL",
    // "VİSKİ",
    // "VİŞNE",
    // "VİTES",
    // "VİTİR",
    // "VİYAK",
    // "VİYOL",
    // "VİZON",
    // "VİZÖR",

    // "YAHNİ",
    // "YAHŞİ",
    // "YAKİN",
    // "YASİN",
    // "YEDİZ",
    // "YEĞİN",
    // "YEĞNİ",
    // "YELİN",
    // "YELLİ",
    // "YEMCİ",
    // "YEMİN",
    // "YEMİŞ",
    // "YENGİ",
    // "YENİK",
    // "YENLİ",
    // "YERGİ",
    // "YERLİ",
    // "YEŞİL",
    // "YEŞİM",
    // "YETİK",
    // "YETİM",
    // "YETKİ",
    // "YEVMİ",
    // "YEYGİ",
    // "YEZİT",
    // "YİĞİT",
    // "YİRİK",
    // "YİRMİ",
    // "YİTİK",
    // "YİTİM",
    // "YİTME",
    // "YİVLİ",
    // "YİYİM",
    // "YİYİŞ",

    // "ZABİT",
    // "ZAHİR",
    // "ZAHİT",
    // "ZALİM",
    // "ZAMİR",
    // "ZARİF",
    // "ZECİR",
    // "ZECRİ",
    // "ZEFİR",
    // "ZEHİR",
    // "ZELİL",
    // "ZEMİN",
    // "ZENCİ",
    // "ZEYİL",
    // "ZIMNİ",
    // "ZİFAF",
    // "ZİFİN",
    // "ZİFİR",
    // "ZİGON",
    // "ZİGOT",
    // "ZİHAF",
    // "ZİHİN",
    // "ZİHNİ",
    // "ZİKİR",
    // "ZİLLİ",
    // "ZİMMİ",
    // "ZİNDE",
    // "ZİRAİ",
    // "ZİRVE",
    // "ZİYAN",
];
export { words };

