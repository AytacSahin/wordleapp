const words = [
    "ABİDE",
    "ABİYE",
    "ACEMİ",
    "AFAKİ",
    "AFİFE",
    "AFİLİ",
    "AFİŞE",
    "AHALİ",
    "AHİZE",
    "AİDAT",
    "AKİDE",
    "AKTİF",
    "ALENİ",
    "ALEVİ",
    "AMİGO",
    "ANEMİ",
    "ANJİN",
    "ANTİK",
    "ANÜRİ",
    "APİKO",
    "APLİK",
    "APOŞİ",
    "APRİL",
    "APSİS",
    "ARABİ",
    "ARAMİ",
    "ARAZİ",
    "ARIZİ",
    "ARİFE",
    "ARİYA",
    "ARİZA",
    "ARSİN",
    "ARŞİV",
    "ASABİ",
    "ASİDE",
    "ASİST",
    "ASTİK",
    "AŞARİ",
    "AŞEVİ",
    "AŞİNA",
    "ATARİ",
    "ATİNA",
    "AVİZE",
    "AYEVİ",
    "AZAMİ",
    "AZERİ",
    "AZİZE",
    "AZNİF",
    "AZOİK",
    "BABAİ",
    "BADİK",
    "BAHAİ",
    "BAHİR",
    "BAHİS",
    "BAHRİ",
    "BAKİR",
    "BALİĞ",
    "BARİT",
    "BARİZ",
    "BASİL",
    "BASİT",
    "BATİK",
    "BAZİK",
    "BAZİT",
    "BEDİİ",
    "BEDİK",
    "BEDİR",
    "BEKÇİ",
    "BEKRİ",
    "BELGİ",
    "BELİĞ",
    "BELİK",
    "BELİT",
    "BELKİ",
    "BELLİ",
    "BENCİ",
    "BENGİ",
    "BENİZ",
    "BENLİ",
    "BERİL",
    "BERRİ",
    "BESİN",
    "BESNİ",
    "BEŞİK",
    "BEŞİZ",
    "BEŞLİ",
    "BETİK",
    "BETİM",
    "BEYİN",
    "BEYİT",
    "BEYZİ",
    "BEZCİ",
    "BEZGİ",
    "BEZİK",
    "BEZİR",
    "BEZİŞ",
    "BEZSİ",
    "BİBER",
    "BİBLO",
    "BİCİK",
    "BİÇEM",
    "BİÇİM",
    "BİÇİŞ",
    "BİÇKİ",
    "BİÇME",
    "BİDAR",
    "BİDAT",
    "BİDON",
    "BİHUŞ",
    "BİKES",
    "BİKİR",
    "BİLAR",
    "BİLEK",
    "BİLET",
    "BİLGE",
    "BİLGİ",
    "BİLİM",
    "BİLİR",
    "BİLİŞ",
    "BİLME",
    "BİLYE",
    "BİNDİ",
    "BİNEK",
    "BİNER",
    "BİNGİ",
    "BİNİŞ",
    "BİNİT",
    "BİNME",
    "BİRAZ",
    "BİRCİ",
    "BİRER",
    "BİREY",
    "BİRİM",
    "BİRLİ",
    "BİRUN",
    "BİŞEK",
    "BİTAP",
    "BİTEK",
    "BİTEY",
    "BİTİK",
    "BİTİM",
    "BİTİŞ",
    "BİTKİ",
    "BİTLİ",
    "BİTME",
    "BİTÜM",
    "BİYEL",
    "BİZAR",
    "BİZCE",
    "BİZON",
    "BOBİN",
    "BORİK",
    "BUTİK",
    "CAHİL",
    "CAİZE",
    "CALİP",
    "CAMİA",
    "CAMİT",
    "CANİP",
    "CAZİP",
    "CEBİN",
    "CEBİR",
    "CEBRİ",
    "CEDİT",
    "CEHİL",
    "CEHRİ",
    "CELİL",
    "CEMİL",
    "CENİN",
    "CEPÇİ",
    "CESİM",
    "CEVİR",
    "CEVİZ",
    "CEVVİ",
    "CEZAİ",
    "CEZİR",
    "CEZRİ",
    "CİBİN",
    "CİBRE",
    "CİCİK",
    "CİCİM",
    "CİCOZ",
    "CİDAL",
    "CİDAR",
    "CİDDİ",
    "CİĞER",
    "CİHAN",
    "CİHAR",
    "CİHAT",
    "CİHAZ",
    "CİHET",
    "CİLVE",
    "CİMRİ",
    "CİNAİ",
    "CİNAS",
    "CİNCİ",
    "CİNLİ",
    "CİNSİ",
    "CİRİM",
    "CİRİT",
    "CİSİM",
    "CİVAN",
    "CİVAR",
    "CİZRE",
    "CİZYE",
    "CUŞİŞ",
    "ÇEBİÇ",
    "ÇECİK",
    "ÇEDİK",
    "ÇEKİÇ",
    "ÇEKİK",
    "ÇEKİM",
    "ÇEKİŞ",
    "ÇELGİ",
    "ÇELİK",
    "ÇELİM",
    "ÇEMİÇ",
    "ÇEMİŞ",
    "ÇENGİ",
    "ÇEPİN",
    "ÇEPNİ",
    "ÇERÇİ",
    "ÇEŞİT",
    "ÇEŞNİ",
    "ÇETİN",
    "ÇEVİK",
    "ÇEVRİ",
    "ÇEYİZ",
    "ÇİÇEK",
    "ÇİFTE",
    "ÇİGAN",
    "ÇİĞDE",
    "ÇİĞİL",
    "ÇİĞİN",
    "ÇİĞİT",
    "ÇİĞLİ",
    "ÇİLEK",
    "ÇİLLİ",
    "ÇİMEK",
    "ÇİMEN",
    "ÇİMME",
    "ÇİNCE",
    "ÇİNKO",
    "ÇİNLİ",
    "ÇİPİL",
    "ÇİRİŞ",
    "ÇİROZ",
    "ÇİŞİK",
    "ÇİTAR",
    "ÇİTEN",
    "ÇİTME",
    "ÇİVİT",
    "ÇİZER",
    "ÇİZGE",
    "ÇİZGİ",
    "ÇİZİK",
    "ÇİZİM",
    "ÇİZİŞ",
    "ÇİZME",
    "DAHİL",
    "DAİMA",
    "DAİMİ",
    "DAİRE",
    "DAKİK",
    "DASİT",
    "DATİF",
    "DEBİL",
    "DEFİN",
    "DEĞİL",
    "DEĞİM",
    "DEĞİN",
    "DEĞİŞ",
    "DEİST",
    "DEİZM",
    "DELGİ",
    "DELHİ",
    "DELİK",
    "DELİL",
    "DEMİN",
    "DEMİR",
    "DEMLİ",
    "DENİM",
    "DENİZ",
    "DENLİ",
    "DERBİ",
    "DERGİ",
    "DERİK",
    "DERİN",
    "DEŞİK",
    "DEVİM",
    "DEVİR",
    "DEVRİ",
    "DEYİM",
    "DEYİŞ",
    "DİBEK",
    "DİCLE",
    "DİDAR",
    "DİDİM",
    "DİDON",
    "DİGOR",
    "DİĞER",
    "DİKÇE",
    "DİKEÇ",
    "DİKEL",
    "DİKEN",
    "DİKEY",
    "DİKİM",
    "DİKİŞ",
    "DİKİT",
    "DİKİZ",
    "DİKME",
    "DİKSE",
    "DİKTA",
    "DİKTE",
    "DİLCİ",
    "DİLEK",
    "DİLİM",
    "DİLİŞ",
    "DİLLİ",
    "DİLME",
    "DİLSİ",
    "DİMAĞ",
    "DİNAR",
    "DİNCE",
    "DİNCİ",
    "DİNEK",
    "DİNEN",
    "DİNGİ",
    "DİNGO",
    "DİNİŞ",
    "DİNLİ",
    "DİNME",
    "DİPLİ",
    "DİREK",
    "DİREN",
    "DİREY",
    "DİRİĞ",
    "DİRİL",
    "DİRİM",
    "DİSKO",
    "DİŞÇİ",
    "DİŞİL",
    "DİŞLİ",
    "DİTME",
    "DİVAL",
    "DİVAN",
    "DİVİK",
    "DİVİT",
    "DİYAR",
    "DİYET",
    "DİYEZ",
    "DİZEK",
    "DİZEL",
    "DİZEM",
    "DİZGE",
    "DİZGİ",
    "DİZİM",
    "DİZİN",
    "DİZİŞ",
    "DİZME",
    "DÖVİZ",
    "DÜNİT",
    "DÜRZİ",
    "EBEDİ",
    "EBELİ",
    "EDEBİ",
    "EDİNÇ",
    "EFRİZ",
    "EĞRİM",
    "EKİCİ",
    "EKİLİ",
    "EKSİK",
    "EKSİN",
    "EKSİZ",
    "EKÜRİ",
    "ELCİK",
    "ELÇİM",
    "ELEJİ",
    "ELGİN",
    "ELİFİ",
    "ELİPS",
    "ELLİK",
    "EMCİK",
    "EMİCİ",
    "EMLİK",
    "EMTİA",
    "EMZİK",
    "ENAYİ",
    "ENGİN",
    "ENSİZ",
    "ENZİM",
    "EPEYİ",
    "ERBİN",
    "ERCİK",
    "ERCİŞ",
    "ERGİN",
    "ERİKA",
    "ERİME",
    "ERİNÇ",
    "ERKİN",
    "ERKLİ",
    "ERLİK",
    "ERMİN",
    "ERMİŞ",
    "EROİN",
    "ERSİZ",
    "ERZİN",
    "ESASİ",
    "ESİRE",
    "ESKİL",
    "ESKİZ",
    "ESPRİ",
    "ESRİK",
    "EŞKİN",
    "EŞLİK",
    "EŞSİZ",
    "ETÇİK",
    "ETÇİL",
    "ETKİN",
    "ETLİK",
    "ETNİK",
    "ETSİZ",
    "EVCİK",
    "EVCİL",
    "EVGİN",
    "EVİYE",
    "EVLİK",
    "EVRİK",
    "EVRİM",
    "EVSİN",
    "EVSİZ",
    "EZANİ",
    "EZELİ",
    "EZGİÇ",
    "EZGİN",
    "EZİCİ",
    "EZİNÇ",
    "EZİNE",
    "FACİA",
    "FAHİŞ",
    "FAHRİ",
    "FAKİH",
    "FAKİR",
    "FANTİ",
    "FARİĞ",
    "FARİL",
    "FASİH",
    "FASİT",
    "FATİH",
    "FECİR",
    "FEDAİ",
    "FEHİM",
    "FENCİ",
    "FENİK",
    "FENNİ",
    "FERDİ",
    "FERİH",
    "FERİK",
    "FERLİ",
    "FESİH",
    "FETİH",
    "FETİŞ",
    "FEVRİ",
    "FEYİZ",
    "FITRİ",
    "FİBER",
    "FİDAN",
    "FİDYE",
    "FİFRE",
    "FİGAN",
    "FİGÜR",
    "FİİLİ",
    "FİKİR",
    "FİKRİ",
    "FİLAN",
    "FİLAR",
    "FİLET",
    "FİLİZ",
    "FİLOZ",
    "FİLSİ",
    "FİLUM",
    "FİNAL",
    "FİNCE",
    "FİNİŞ",
    "FİRAK",
    "FİRAR",
    "FİREZ",
    "FİRİK",
    "FİRMA",
    "FİSKE",
    "FİSTO",
    "FİŞEK",
    "FİŞKA",
    "FİŞLİ",
    "FİTÇİ",
    "FİTİL",
    "FİTİN",
    "FİTNE",
    "FİTRE",
    "FİYAT",
    "FİZİK",
    "FLORİ",
    "FOSİL",
    "FRİGO",
    "FRİSA",
    "GABİN",
    "GADİR",
    "GAFİL",
    "GAİLE",
    "GAİTA",
    "GALİP",
    "GALİZ",
    "GARBİ",
    "GARİP",
    "GASİL",
    "GAŞİY",
    "GAYRİ",
    "GEÇİM",
    "GEÇİŞ",
    "GEÇİT",
    "GEDİK",
    "GEDİZ",
    "GELİN",
    "GELİR",
    "GELİŞ",
    "GENİŞ",
    "GENİZ",
    "GEOİT",
    "GERÇİ",
    "GERGİ",
    "GERİM",
    "GERİŞ",
    "GERİZ",
    "GEVİŞ",
    "GEYİK",
    "GEZİŞ",
    "GİDER",
    "GİDİŞ",
    "GİDON",
    "GİRAY",
    "GİRDİ",
    "GİREN",
    "GİRİM",
    "GİRİŞ",
    "GİRME",
    "GİTAR",
    "GİTME",
    "GİTTİ",
    "GİYİM",
    "GİYİŞ",
    "GİYİT",
    "GİYME",
    "GİYSİ",
    "GİZEM",
    "GİZİL",
    "GİZLİ",
    "GORİL",
    "GOTİK",
    "HABİP",
    "HACİM",
    "HACİZ",
    "HADİM",
    "HADİS",
    "HAFİF",
    "HAKİM",
    "HAKİR",
    "HALİÇ",
    "HALİK",
    "HALİM",
    "HALİS",
    "HAMSİ",
    "HANGİ",
    "HAPİS",
    "HARBİ",
    "HARİÇ",
    "HARİM",
    "HAŞİN",
    "HAŞİŞ",
    "HAŞİV",
    "HATİF",
    "HATİM",
    "HATİP",
    "HATMİ",
    "HAVAİ",
    "HAVİL",
    "HAYDİ",
    "HAYLİ",
    "HAZİN",
    "HECİN",
    "HEDİK",
    "HEKİM",
    "HELİK",
    "HELİS",
    "HEPSİ",
    "HERİF",
    "HERİK",
    "HİCAP",
    "HİCAZ",
    "HİCİV",
    "HİCRİ",
    "HİÇÇİ",
    "HİDİV",
    "HİDRA",
    "HİKEM",
    "HİLAF",
    "HİLAL",
    "HİLAT",
    "HİLYE",
    "HİMEN",
    "HİNDİ",
    "HİNDU",
    "HİPPİ",
    "HİSAR",
    "HİSLİ",
    "HİSSE",
    "HİSSİ",
    "HİTAM",
    "HİTAN",
    "HİTAP",
    "HİTİT",
    "HİZAN",
    "HİZİP",
    "HODRİ",
    "HÜKMİ",
    "İBARE",
    "İBATE",
    "İBDAİ",
    "İBLAĞ",
    "İBLİS",
    "İBRAZ",
    "İBRET",
    "İBRİK",
    "İBZAL",
    "İCBAR",
    "İCMAL",
    "İÇERİ",
    "İÇİCİ",
    "İÇKİN",
    "İÇLEM",
    "İÇLİK",
    "İÇMEK",
    "İÇREK",
    "İÇSEL",
    "İÇSİZ",
    "İÇTEN",
    "İÇYÜZ",
    "İDADİ",
    "İDAME",
    "İDARE",
    "İDARİ",
    "İDDİA",
    "İDEAL",
    "İDMAN",
    "İDRAK",
    "İDRAR",
    "İFADE",
    "İFFET",
    "İFHAM",
    "İFLAH",
    "İFLAS",
    "İFRAĞ",
    "İFRAT",
    "İFRAZ",
    "İFRİT",
    "İFSAT",
    "İFTAR",
    "İĞDİR",
    "İĞDİŞ",
    "İĞFAL",
    "İĞLİK",
    "İHALE",
    "İHATA",
    "İHBAR",
    "İHDAS",
    "İHLAL",
    "İHLAS",
    "İHMAL",
    "İHRAÇ",
    "İHRAM",
    "İHRAZ",
    "İHSAN",
    "İHSAS",
    "İHTAR",
    "İHVAN",
    "İHZAR",
    "İKAME",
    "İKBAL",
    "İKDAM",
    "İKİCİ",
    "İKİLİ",
    "İKLİM",
    "İKMAL",
    "İKRAH",
    "İKRAM",
    "İKRAR",
    "İKRAZ",
    "İKSİR",
    "İLAHE",
    "İLAHİ",
    "İLAHİ",
    "İLAVE",
    "İLBAY",
    "İLENÇ",
    "İLERİ",
    "İLETİ",
    "İLGEÇ",
    "İLHAK",
    "İLHAM",
    "İLHAN",
    "İLKAH",
    "İLKEL",
    "İLKİN",
    "İLLET",
    "İLMEK",
    "İLMİK",
    "İLZAM",
    "İMALE",
    "İMALI",
    "İMAME",
    "İMBAT",
    "İMBİK",
    "İMDAT",
    "İMECE",
    "İMKAN",
    "İMLEÇ",
    "İMLEK",
    "İMLİK",
    "İMREN",
    "İMROZ",
    "İMSAK",
    "İNANÇ",
    "İNCİK",
    "İNCİL",
    "İNCİR",
    "İNDİS",
    "İNFAK",
    "İNFAZ",
    "İNGİN",
    "İNKAR",
    "İNMEK",
    "İNÖNÜ",
    "İNSAF",
    "İNSAN",
    "İNŞAT",
    "İNTAÇ",
    "İNTAK",
    "İNTAN",
    "İNZAL",
    "İPÇİK",
    "İPEKA",
    "İPHAM",
    "İPLİK",
    "İPSİZ",
    "İPTAL",
    "İPUCU",
    "İRADE",
    "İRADİ",
    "İRFAN",
    "İRİCE",
    "İRİTE",
    "İRKME",
    "İRMİK",
    "İRONİ",
    "İRSAL",
    "İRSEN",
    "İRŞAT",
    "İSALE",
    "İSEVİ",
    "İSHAL",
    "İSKAN",
    "İSKOÇ",
    "İSLAM",
    "İSLAV",
    "İSLİM",
    "İSMEN",
    "İSMET",
    "İSNAT",
    "İSPAT",
    "İSPİR",
    "İSPİT",
    "İSRAF",
    "İSTEK",
    "İSTEM",
    "İSTER",
    "İSTİF",
    "İSTİM",
    "İSTOP",
    "İSYAN",
    "İŞEME",
    "İŞGAL",
    "İŞKAL",
    "İŞKİL",
    "İŞLEK",
    "İŞLEM",
    "İŞLEV",
    "İŞLİK",
    "İŞMAR",
    "İŞRET",
    "İŞSİZ",
    "İŞTAH",
    "İŞTEŞ",
    "İŞYAR",
    "İTAAT",
    "İTEĞİ",
    "İTHAF",
    "İTHAL",
    "İTHAM",
    "İTİCİ",
    "İTİLA",
    "İTİNA",
    "İTLAF",
    "İTLİK",
    "İTMAM",
    "İTMEK",
    "İVEDİ",
    "İVESİ",
    "İVMEK",
    "İYİCE",
    "İZABE",
    "İZAFE",
    "İZAFİ",
    "İZALE",
    "İZHAR",
    "İZLEK",
    "İZLEM",
    "İZMİR",
    "İZNİK",
    "İZOLE",
    "İZZET",
    "JİKLE",
    "JİLET",
    "KABİL",
    "KABİL",
    "KABİN",
    "KABİR",
    "KADİM",
    "KADİR",
    "KADİT",
    "KAFİR",
    "KAGİR",
    "KAHİL",
    "KAHİN",
    "KAHİR",
    "KAİDE",
    "KAİME",
    "KALBİ",
    "KAMİL",
    "KANİŞ",
    "KAPİK",
    "KARNİ",
    "KASİS",
    "KASTİ",
    "KAŞİF",
    "KATİL",
    "KATİP",
    "KAVİL",
    "KAVİM",
    "KAVİS",
    "KAVMİ",
    "KEBİR",
    "KEFİL",
    "KEFİR",
    "KEKİK",
    "KELİK",
    "KELLİ",
    "KEMİK",
    "KENDİ",
    "KEPİR",
    "KERİH",
    "KERİM",
    "KERİZ",
    "KERKİ",
    "KERTİ",
    "KESBİ",
    "KESİF",
    "KESİK",
    "KESİM",
    "KESİN",
    "KESİR",
    "KESİŞ",
    "KESİT",
    "KESKİ",
    "KEŞİF",
    "KEŞİK",
    "KEŞİŞ",
    "KEŞKİ",
    "KEYFİ",
    "KEYİF",
    "KISMİ",
    "KİBAR",
    "KİBİR",
    "KİFAF",
    "KİKLA",
    "KİLER",
    "KİLİM",
    "KİLİS",
    "KİLİT",
    "KİLİZ",
    "KİLLİ",
    "KİLSİ",
    "KİLÜS",
    "KİMSE",
    "KİMÜS",
    "KİMYA",
    "KİNCİ",
    "KİNİK",
    "KİNİN",
    "KİNİŞ",
    "KİNLİ",
    "KİRAZ",
    "KİRDE",
    "KİREÇ",
    "KİRİL",
    "KİRİŞ",
    "KİRLİ",
    "KİRPİ",
    "KİRVE",
    "KİSVE",
    "KİTAP",
    "KİTİN",
    "KİTLE",
    "KİZİR",
    "KLİMA",
    "KLİPS",
    "KLİŞE",
    "KOFTİ",
    "KOLİK",
    "KOLİT",
    "KOMBİ",
    "KOMİK",
    "KONİK",
    "KOPİL",
    "KOŞİN",
    "KREDİ",
    "KRİKO",
    "KROKİ",
    "KULİS",
    "KUTSİ",
    "KUZİN",
    "KÜBİK",
    "KÜLLİ",
    "KÜRDİ",
    "KÜRİT",
    "KÜTİN",
    "LAÇİN",
    "LADİK",
    "LADİN",
    "LAFZİ",
    "LAHİT",
    "LAKİN",
    "LASKİ",
    "LATİF",
    "LATİN",
    "LEHİM",
    "LEMİS",
    "LEYLİ",
    "LEZİZ",
    "LİBAS",
    "LİBOŞ",
    "LİBRE",
    "LİDER",
    "LİFLİ",
    "LİGHT",
    "LİKEN",
    "LİKİT",
    "LİKÖR",
    "LİMAN",
    "LİMBO",
    "LİMİT",
    "LİMON",
    "LİNET",
    "LİNİN",
    "LİPİT",
    "LİRİK",
    "LİSAN",
    "LİSTE",
    "LİTRE",
    "LİVAR",
    "LİYAN",
    "LİZOL",
    "LOJİK",
    "MADDİ",
    "MADİK",
    "MAFİŞ",
    "MAGRİ",
    "MAHFİ",
    "MAHİR",
    "MAİLE",
    "MAKSİ",
    "MALİK",
    "MANİA",
    "MANTİ",
    "MARİZ",
    "MARKİ",
    "MASİF",
    "MATİZ",
    "MAVİŞ",
    "MEBİZ",
    "MEBNİ",
    "MEDİH",
    "MEHDİ",
    "MEKİK",
    "MELİK",
    "MENFİ",
    "MERCİ",
    "MERİÇ",
    "MERMİ",
    "MERSİ",
    "MESAİ",
    "MESİH",
    "MEŞİN",
    "METİL",
    "METİN",
    "MEVKİ",
    "MEVZİ",
    "MEYİL",
    "MİDYE",
    "MİKAP",
    "MİKOZ",
    "MİKRO",
    "MİLAS",
    "MİLAT",
    "MİLEL",
    "MİLİM",
    "MİLİS",
    "MİLLİ",
    "MİMAR",
    "MİMİK",
    "MİMLİ",
    "MİNİK",
    "MİNÖR",
    "MİNSK",
    "MİRAÇ",
    "MİRAS",
    "MİRAT",
    "MİRİM",
    "MİRZA",
    "MİSAK",
    "MİSAL",
    "MİSEL",
    "MİSİL",
    "MİSİS",
    "MİTİL",
    "MİTOS",
    "MİTOZ",
    "MİYAR",
    "MİYAV",
    "MİYAZ",
    "MİYOM",
    "MİYOP",
    "MİZAÇ",
    "MİZAH",
    "MİZAN",
    "MOBİL",
    "MOTİF",
    "MUCİP",
    "MUCİR",
    "MUCİT",
    "MUDİL",
    "MUHİK",
    "MUHİL",
    "MUHİP",
    "MUHİT",
    "MUJİK",
    "MUKİM",
    "MUKNİ",
    "MUNİS",
    "MURİS",
    "MUTKİ",
    "MUZİP",
    "MÜFİT",
    "MÜHİM",
    "MÜLKİ",
    "MÜMİN",
    "MÜNŞİ",
    "MÜRAİ",
    "MÜRİT",
    "MÜŞİR",
    "MÜZİÇ",
    "MÜZİK",
    "NAÇİZ",
    "NADİM",
    "NADİR",
    "NAFİA",
    "NAFİZ",
    "NAHİF",
    "NAHİV",
    "NAKDİ",
    "NAKİL",
    "NAKİP",
    "NAKİT",
    "NAKLİ",
    "NAKŞİ",
    "NANİK",
    "NARİN",
    "NASİP",
    "NASİR",
    "NAŞİR",
    "NAZİK",
    "NAZİL",
    "NAZİR",
    "NECİP",
    "NEDİM",
    "NEFİR",
    "NEFİS",
    "NEFİY",
    "NEFTİ",
    "NEHİR",
    "NEHİY",
    "NEMLİ",
    "NESİÇ",
    "NESİH",
    "NESİL",
    "NESİM",
    "NESİR",
    "NEŞİR",
    "NEVİR",
    "NEZİF",
    "NEZİH",
    "NEZİR",
    "NİCEL",
    "NİÇİN",
    "NİFAK",
    "NİĞDE",
    "NİHAİ",
    "NİHAN",
    "NİKAH",
    "NİKAP",
    "NİKEL",
    "NİMET",
    "NİNNİ",
    "NİPEL",
    "NİSAİ",
    "NİSAN",
    "NİSAP",
    "NİSPİ",
    "NİŞAN",
    "NİTEL",
    "NİYAZ",
    "NİYET",
    "NİZAM",
    "NİZİP",
    "OFRİS",
    "OJELİ",
    "OKAPİ",
    "OKSİT",
    "OLEİK",
    "OLEİN",
    "ONİKS",
    "OOSİT",
    "OPTİK",
    "ORCİK",
    "ORİON",
    "ORKİT",
    "OTİST",
    "OTİZM",
    "ÖNERİ",
    "ÖRCİN",
    "ÖTEKİ",
    "ÖZENİ",
    "PANİK",
    "PARİS",
    "PARTİ",
    "PASİF",
    "PATİK",
    "PEÇİÇ",
    "PEKİN",
    "PELİN",
    "PELİT",
    "PENİS",
    "PERKİ",
    "PERMİ",
    "PEŞİN",
    "PEŞLİ",
    "PİGME",
    "PİKAJ",
    "PİKAP",
    "PİKET",
    "PİLAV",
    "PİLİÇ",
    "PİLLİ",
    "PİLOT",
    "PİNEL",
    "PİNES",
    "PİNTİ",
    "PİPET",
    "PİRİT",
    "PİSİK",
    "PİSİN",
    "PİŞEK",
    "PİŞİK",
    "PİŞİM",
    "PİŞME",
    "PİŞTİ",
    "PİTON",
    "PİYAN",
    "PİYAZ",
    "PİYES",
    "PİYON",
    "PİZZA",
    "PLATİ",
    "POLİP",
    "POLİS",
    "POTİN",
    "PRİNT",
    "QUİTO",
    "RAFİT",
    "RAGBİ",
    "RAHİM",
    "RAHİM",
    "RAHİP",
    "RAKİK",
    "RAKİP",
    "RAKİT",
    "RALLİ",
    "RAYİÇ",
    "RECİM",
    "REDİF",
    "REFİK",
    "REHİN",
    "REJİM",
    "REKİZ",
    "REMİL",
    "REMİZ",
    "RESİF",
    "RESİM",
    "RESMİ",
    "REŞİT",
    "REVİR",
    "REVİŞ",
    "REZİL",
    "RİCAL",
    "RİCAT",
    "RİJİT",
    "RİMEL",
    "RİNGA",
    "RİTİM",
    "RİYAD",
    "RİYAL",
    "ROTİL",
    "RUBAİ",
    "RUFAİ",
    "RUNİK",
    "RUTİN",
    "SABİT",
    "SADİK",
    "SAFİR",
    "SAHİH",
    "SAHİL",
    "SAHİP",
    "SAİKA",
    "SAKİL",
    "SAKİM",
    "SAKİN",
    "SAKİT",
    "SALİK",
    "SALİM",
    "SALİP",
    "SANKİ",
    "SARİG",
    "SARİH",
    "SATHİ",
    "SATİR",
    "SEBİL",
    "SEÇİM",
    "SEÇİŞ",
    "SEÇKİ",
    "SEDİR",
    "SEFİH",
    "SEFİL",
    "SEFİR",
    "SEHİM",
    "SEHİV",
    "SEKİL",
    "SEKİŞ",
    "SEKİZ",
    "SEKSİ",
    "SELİM",
    "SELİS",
    "SELVİ",
    "SEMAİ",
    "SEMİH",
    "SEMİZ",
    "SENİR",
    "SENİT",
    "SERGİ",
    "SERİK",
    "SERİM",
    "SERİN",
    "SERİŞ",
    "SERVİ",
    "SESÇİ",
    "SESLİ",
    "SETİK",
    "SETİR",
    "SEVGİ",
    "SEVİM",
    "SEVİR",
    "SEVİŞ",
    "SEYİR",
    "SEYİS",
    "SEYİT",
    "SEZGİ",
    "SEZİŞ",
    "SIHHİ",
    "SİCİL",
    "SİCİM",
    "SİDİK",
    "SİFİN",
    "SİFON",
    "SİĞİL",
    "SİHİR",
    "SİİRT",
    "SİKKE",
    "SİLAH",
    "SİLGİ",
    "SİLİK",
    "SİLİS",
    "SİLİŞ",
    "SİLKİ",
    "SİLLE",
    "SİLME",
    "SİMAV",
    "SİMGE",
    "SİMİT",
    "SİMYA",
    "SİNEK",
    "SİNİK",
    "SİNİR",
    "SİNİŞ",
    "SİNLE",
    "SİNME",
    "SİNOP",
    "SİNSİ",
    "SİNÜS",
    "SİPER",
    "SİPSİ",
    "SİREN",
    "SİRKE",
    "SİRMO",
    "SİROZ",
    "SİRTO",
    "SİSLİ",
    "SİTEM",
    "SİTİL",
    "SİVAS",
    "SİVİL",
    "SİVRİ",
    "SİYAH",
    "SİYAK",
    "SİYEK",
    "SİYER",
    "SİYME",
    "SİZCE",
    "SKİNK",
    "SORİT",
    "SORTİ",
    "SOSİS",
    "STİLO",
    "SÜFLİ",
    "SÜNNİ",
    "ŞAFİİ",
    "ŞAHİN",
    "ŞAHİT",
    "ŞAHSİ",
    "ŞAİBE",
    "ŞAİRE",
    "ŞAMİL",
    "ŞARKİ",
    "ŞARPİ",
    "ŞAYİA",
    "ŞEDİT",
    "ŞEFİK",
    "ŞEHİR",
    "ŞEHİT",
    "ŞEKİL",
    "ŞEKLİ",
    "ŞEMSİ",
    "ŞEPİT",
    "ŞERİF",
    "ŞERİK",
    "ŞERİR",
    "ŞERİT",
    "ŞETİM",
    "ŞİFON",
    "ŞİFRE",
    "ŞİKAR",
    "ŞİLEM",
    "ŞİLEP",
    "ŞİLİN",
    "ŞİLTE",
    "ŞİMAL",
    "ŞİMDİ",
    "ŞİNİK",
    "ŞİNTO",
    "ŞİRAN",
    "ŞİRİN",
    "ŞİŞEK",
    "ŞİŞİK",
    "ŞİŞKO",
    "ŞİŞLİ",
    "ŞİŞME",
    "ŞÖMİZ",
    "TABİİ",
    "TABİP",
    "TABİR",
    "TACİK",
    "TACİL",
    "TACİR",
    "TACİZ",
    "TADİL",
    "TAHİN",
    "TAKİM",
    "TAKİP",
    "TAKSİ",
    "TAKTİ",
    "TALİH",
    "TALİK",
    "TALİL",
    "TALİM",
    "TALİP",
    "TAMİK",
    "TAMİM",
    "TAMİR",
    "TANİN",
    "TAPİR",
    "TARİF",
    "TARİH",
    "TARİK",
    "TARİZ",
    "TASDİ",
    "TASNİ",
    "TATİL",
    "TAVİK",
    "TAVİZ",
    "TAYİN",
    "TAYİP",
    "TAZİM",
    "TAZİP",
    "TAZİZ",
    "TEALİ",
    "TEATİ",
    "TECİL",
    "TECİM",
    "TEDAİ",
    "TEDİP",
    "TEHİR",
    "TEİZM",
    "TEKÇİ",
    "TEKİL",
    "TEKİN",
    "TEKİR",
    "TEKİT",
    "TEKLİ",
    "TELİF",
    "TELİN",
    "TELİS",
    "TELLİ",
    "TELSİ",
    "TEMİN",
    "TEMİZ",
    "TENİS",
    "TEORİ",
    "TEPİK",
    "TEPİR",
    "TEPİŞ",
    "TEPKİ",
    "TEPSİ",
    "TERBİ",
    "TERFİ",
    "TERİM",
    "TERKİ",
    "TERLİ",
    "TERZİ",
    "TESİR",
    "TESİS",
    "TESİT",
    "TESRİ",
    "TESTİ",
    "TEŞCİ",
    "TEŞRİ",
    "TEŞYİ",
    "TETİK",
    "TETİR",
    "TEVDİ",
    "TEVİL",
    "TEVKİ",
    "TEVSİ",
    "TEVZİ",
    "TEYİT",
    "TEZLİ",
    "TIBBİ",
    "TİFÜS",
    "TİKEL",
    "TİLKİ",
    "TİMÜS",
    "TİNER",
    "TİPİK",
    "TİRAJ",
    "TİRAN",
    "TİRAN",
    "TİRAT",
    "TİRİT",
    "TİRİZ",
    "TİRLE",
    "TİRSİ",
    "TİRŞE",
    "TİTAN",
    "TİTİZ",
    "TONİK",
    "TOPİK",
    "TORİK",
    "TRİKO",
    "TUNİK",
    "TÜRKİ",
    "TÜVİT",
    "TVİST",
    "UMUMİ",
    "ÜNİTE",
    "ÜREMİ",
    "ÜZERİ",
    "VACİP",
    "VAHİM",
    "VAHİT",
    "VAHİY",
    "VAHŞİ",
    "VAKİT",
    "VALİZ",
    "VARİL",
    "VARİS",
    "VARİT",
    "VECİH",
    "VECİZ",
    "VEDİA",
    "VEHİM",
    "VEKİL",
    "VERDİ",
    "VERGİ",
    "VERİM",
    "VERİŞ",
    "VERİT",
    "VEZİN",
    "VEZİR",
    "VİDEO",
    "VİGLA",
    "VİLLA",
    "VİRAJ",
    "VİRAL",
    "VİRAN",
    "VİRÜS",
    "VİSAL",
    "VİSKİ",
    "VİŞNE",
    "VİTES",
    "VİTİR",
    "VİYAK",
    "VİYOL",
    "VİZON",
    "VİZÖR",
    "YAHNİ",
    "YAHŞİ",
    "YAKİN",
    "YASİN",
    "YEDİZ",
    "YEĞİN",
    "YEĞNİ",
    "YELİN",
    "YELLİ",
    "YEMCİ",
    "YEMİN",
    "YEMİŞ",
    "YENGİ",
    "YENİK",
    "YENLİ",
    "YERGİ",
    "YERLİ",
    "YEŞİL",
    "YEŞİM",
    "YETİK",
    "YETİM",
    "YETKİ",
    "YEVMİ",
    "YEYGİ",
    "YEZİT",
    "YİĞİT",
    "YİRİK",
    "YİRMİ",
    "YİTİK",
    "YİTİM",
    "YİTME",
    "YİVLİ",
    "YİYİM",
    "YİYİŞ",
    "ZABİT",
    "ZAHİR",
    "ZAHİT",
    "ZALİM",
    "ZAMİR",
    "ZARİF",
    "ZECİR",
    "ZECRİ",
    "ZEFİR",
    "ZEHİR",
    "ZELİL",
    "ZEMİN",
    "ZENCİ",
    "ZEYİL",
    "ZIMNİ",
    "ZİFAF",
    "ZİFİN",
    "ZİFİR",
    "ZİFOS",
    "ZİGON",
    "ZİGOT",
    "ZİHAF",
    "ZİHİN",
    "ZİHNİ",
    "ZİKİR",
    "ZİLLİ",
    "ZİMMİ",
    "ZİNDE",
    "ZİRAİ",
    "ZİRVE",
    "ZİYAN",
    "ZLOTİ",
];
export { words };

