const words = [
    // A
    "ABİDE", "ABİYE", "ACEMİ", "AFAKİ", "AFİFE", "AFİŞE", "AHALİ", "AHİZE", "AİDAT", "AKİDE", "AKTİF", "ALENİ", "ALEVİ", "AMİGO", "ANEMİ", "ANTİK", "APLİK", "ARABİ", "ARAZİ", "ARİFE", "ARŞİV", "ASABİ", "ASİST", "AŞEVİ", "AŞİNA", "ATARİ", "ATİNA", "AVİZE", "AZAMİ", "AZERİ",
    // B
    "BAHİS", "BARİZ", "BASİT", "BAZİK", "BEKÇİ", "BELİK", "BELKİ", "BELLİ", "BENİZ", "BESİN", "BEŞİK", "BEŞİZ", "BEYİN", "BEYİT", "BİBER", "BİBLO", "BİÇİM", "BİÇİŞ", "BİÇKİ", "BİÇME", "BİDON", "BİLEK", "BİLET", "BİLGE", "BİLGİ", "BİLİM", "BİLYE", "BİNEK", "BİRAZ", "BİREY", "BİRİM", "BİTAP", "BİTİK", "BİTİM", "BİTİŞ", "BİTKİ", "BİTLİ", "BİTME", "BİZON", "BOBİN", "BUTİK",
    // C
    "CAHİL", "CAMİA", "CAZİP", "CEBİR", "CEBRİ", "CELİL", "CEMİL", "CEVİZ", "CİCİM", "CİCOZ", "CİDAR", "CİDDİ", "CİĞER", "CİHAN", "CİHAZ", "CİLVE", "CİMRİ", "CİNLİ", "CİRİT", "CİSİM", "CİVAR", "ÇEKİÇ", "ÇEKİK", "ÇEKİM", "ÇEKİŞ", "ÇELİK", "ÇELİM", "ÇENGİ", "ÇERÇİ", "ÇEŞİT", "ÇETİN", "ÇEVİK", "ÇEYİZ", "ÇİÇEK", "ÇİĞDE", "ÇİLEK", "ÇİLLİ", "ÇİMEN", "ÇİNCE", "ÇİNKO", "ÇİROZ", "ÇİZER", "ÇİZGİ", "ÇİZİK", "ÇİZİM", "ÇİZİŞ", "ÇİZME",
    // D
    "DAHİL", "DAİMA", "DAİMİ", "DAİRE", "DAKİK", "DEFİN", "DEĞİL", "DEĞİM", "DEĞİN", "DEĞİŞ", "DEİST", "DEİZM", "DELGİ", "DELİK", "DELİL", "DEMİN", "DEMİR", "DEMLİ", "DENİZ", "DERBİ", "DERGİ", "DERİN", "DEVİM", "DEVİR", "DEYİM", "DEYİŞ", "DİBEK", "DİCLE", "DİĞER", "DİKEN", "DİKEY", "DİKİM", "DİKİŞ", "DİKİZ", "DİKME", "DİKTA", "DİKTE", "DİLEK", "DİLİM", "DİLLİ", "DİNAR", "DİNCİ", "DİPLİ", "DİREK", "DİREN", "DİRİM", "DİSKO", "DİŞÇİ", "DİŞLİ", "DİVAN", "DİYAR", "DİYET", "DİYEZ", "DİZEL", "DİZEM", "DİZGE", "DİZGİ", "DİZİM", "DİZİN", "DİZİŞ", "DİZME", "DÖVİZ",
    // E
    "EBEDİ", "EDEBİ", "EKİLİ", "EKSİK", "EKSİZ", "EKÜRİ", "ELİPS", "EMİCİ", "EMLİK", "EMTİA", "EMZİK", "ENAYİ", "ENGİN", "ENSİZ", "ENZİM", "ERGİN", "ERİME", "ERKİN", "ERMİŞ", "EROİN", "ESKİZ", "ESPRİ", "EŞLİK", "EŞSİZ", "ETÇİL", "ETKİN", "ETNİK", "EVCİL", "EVRİM", "EVSİZ", "EZELİ", "EZİCİ", "EZİNE",
    // F
    "FACİA", "FAHİŞ", "FAKİR", "FATİH", "FEDAİ", "FENNİ", "FERDİ", "FESİH", "FETİH", "FEVRİ", "FİDAN", "FİDYE", "FİGÜR", "FİKİR", "FİLİZ", "FİNAL", "FİRAR", "FİRMA", "FİŞEK", "FİTİL", "FİTNE", "FİYAT", "FİZİK", "FOSİL",
    // G
    "GAFİL", "GALİP", "GARİP", "GEÇİM", "GEÇİŞ", "GEÇİT", "GELİN", "GELİR", "GENİŞ", "GENİZ", "GERGİ", "GEYİK", "GİDER", "GİDİŞ", "GİRİŞ", "GİTAR", "GİYİM", "GİYİŞ", "GİYSİ", "GİZEM", "GİZLİ", "GORİL", "GOTİK",
    // H
    "HACİM", "HACİZ", "HADİS", "HAFİF", "HAKİM", "HAMSİ", "HANGİ", "HAPİS", "HARBİ", "HARİÇ", "HAŞİN", "HATİM", "HAVAİ", "HAYLİ", "HAZİN", "HEKİM", "HEPSİ", "HERİF", "HİCAP", "HİCAZ", "HİCİV", "HİCRİ", "HİLAL", "HİNDİ", "HİPPİ", "HİSAR", "HİSLİ", "HİSSE", "HİTAP", "HİTİT",
    // İ
    "İBLİS", "İBRAZ", "İBRET", "İBRİK", "İÇERİ", "İÇLİK", "İÇMEK", "İÇSEL", "İÇTEN", "İDAME", "İDARE", "İDARİ", "İDDİA", "İDEAL", "İDMAN", "İDRAK", "İDRAR", "İFADE", "İFFET", "İFLAS", "İFRAZ", "İFTAR", "İHALE", "İHBAR", "İHLAL", "İHLAS", "İHMAL", "İHRAÇ", "İHRAM", "İHSAN", "İHTAR", "İKAME", "İKLİM", "İKRAM", "İKSİR", "İLAVE", "İLERİ", "İLETİ", "İLGEÇ", "İLKEL", "İLLET", "İMDAT", "İMECE", "İMKAN", "İMLEÇ", "İMSAK", "İNANÇ", "İNCİK", "İNCİL", "İNCİR", "İNFAZ", "İNKAR", "İNMEK", "İNÖNÜ", "İNSAF", "İNSAN", "İPLİK", "İPSİZ", "İPTAL", "İPUCU", "İRADE", "İRMİK", "İRONİ", "İSHAL", "İSKAN", "İSLAM", "İSPAT", "İSRAF", "İSTEK", "İSTİF", "İSYAN", "İŞGAL", "İŞLEK", "İŞLEM", "İŞLEV", "İŞSİZ", "İŞTAH", "İTAAT", "İTHAL", "İTHAM", "İTİCİ", "İTİNA", "İTMEK", "İVEDİ", "İVMEK", "İYİCE", "İZMİR", "İZNİK", "İZOLE", "İZZET",
    // J
    "JİLET",
    // K
    "KABİN", "KABİR", "KADİM", "KADİR", "KAFİR", "KAGİR", "KAHİN", "KAİDE", "KAMİL", "KANİŞ", "KASİS", "KAŞİF", "KATİL", "KATİP", "KAVİM", "KAVİS", "KEBİR", "KEFİL", "KEFİR", "KEKİK", "KEMİK", "KEPİR", "KERİM", "KERİZ", "KESİK", "KESİM", "KESİN", "KESİR", "KESİT", "KESKİ", "KEŞİF", "KEŞİK", "KEŞİŞ", "KEYFİ", "KEYİF", "KISMİ", "KİBAR", "KİBİR", "KİLER", "KİLİM", "KİLİS", "KİLİT", "KİLİZ", "KİMSE", "KİMYA", "KİNCİ", "KİNLİ", "KİRAZ", "KİREÇ", "KİRİL", "KİRİŞ", "KİRLİ", "KİRPİ", "KİRVE", "KİTAP", "KİTLE", "KLİMA", "KLİPS", "KLİŞE", "KOMBİ", "KOMİK", "KONİK", "KOPİL", "KREDİ", "KRİKO", "KROKİ", "KULİS",
    // L
    "LAHİT", "LAKİN", "LATİF", "LATİN", "LEHİM", "LEZİZ", "LİDER", "LİKİT", "LİKÖR", "LİMAN", "LİMİT", "LİMON", "LİRİK", "LİSAN", "LİSTE", "LİTRE", "LİVAR", "LİYAN",
    // M
    "MADDİ", "MAFİŞ", "MALİK", "MASİF", "MATİZ", "MAVİŞ", "MEBİZ", "MEKİK", "MELİK", "MERİÇ", "MERMİ", "MESAİ", "MESİH", "MEŞİN", "METİN", "MEVKİ", "MEVZİ", "MİDYE", "MİKRO", "MİLAS", "MİLAT", "MİLLİ", "MİMAR", "MİMİK", "MİNİK", "MİRAS", "MİSAL", "MİTOZ", "MİYAV", "MİYAZ", "MİYOP", "MİZAÇ", "MİZAH", "MOBİL", "MOTİF", "MUCİT", "MUHİT", "MÜFİT", "MÜHİM", "MÜLKİ", "MÜMİN", "MÜRİT", "MÜZİK",
    // N
    "NADİM", "NADİR", "NAFİZ", "NAKDİ", "NAKİL", "NAKİT", "NANİK", "NARİN", "NASİP", "NAŞİR", "NAZİK", "NEDİM", "NEFİS", "NEHİR", "NEMLİ", "NESİL", "NEZİH", "NİCEL", "NİÇİN", "NİĞDE", "NİHAİ", "NİKAH", "NİKEL", "NİMET", "NİNNİ", "NİSAN", "NİSPİ", "NİŞAN", "NİYAZ", "NİYET", "NİZAM",
    // O
    "OKAPİ", "OKSİT", "OPTİK", "OTİZM",
    // Ö ➕
    "ÖBÜRÜ", "ÖDEME", "ÖDLEK", "ÖDÜNÇ", "ÖĞLEN", "ÖKSÜZ", "ÖLÇEK", "ÖLÇÜM", "ÖLÇÜT", "ÖNDER", "ÖNERİ", "ÖNLEM", "ÖNLÜK", "ÖRDEK", "ÖRGÜN", "ÖRGÜT", "ÖRNEK", "ÖTEKİ", "ÖTMEK", "ÖTÜCÜ", "ÖTÜRÜ", "ÖVMEK", "ÖZBEK", "ÖZERK", "ÖZGÜL", "ÖZGÜN", "ÖZGÜR", "ÖZLEM", "ÖZNEL",
    // P
    "PANİK", "PARİS", "PARTİ", "PASİF", "PATİK", "PEŞİN", "PİKAP", "PİLAV", "PİLİÇ", "PİLOT", "PİNTİ", "PİPET", "PİŞİK", "PİŞTİ", "PİTON", "PİYAZ", "PİYES", "PİYON", "PİZZA", "POLİS",
    // R
    "RAHİM", "RAHİP", "RAKİP", "RALLİ", "REHİN", "REJİM", "RESİM", "RESMİ", "REŞİT", "REVİR", "REZİL", "RİMEL", "RİNGA", "RİTİM", "RİYAL", "RUBAİ", "RUTİN", "SABİT",
    // S
    "SAHİL", "SAHİP", "SAHNE", "SAKİN", "SALİM", "SAPIK", "SANKİ", "SEBİL", "SEÇİM", "SEDİR", "SEFİL", "SEKİZ", "SELİM", "SELVİ", "SEMAİ", "SEMİH", "SEMİZ", "SERGİ", "SERİN", "SESLİ", "SEVGİ", "SEYİR", "SEYİS", "SEZGİ", "SEZİŞ", "SIHHİ", "SİCİL", "SİCİM", "SİDİK", "SİFON", "SİĞİL", "SİHİR", "SİİRT", "SİKKE", "SİLAH", "SİLGİ", "SİLİK", "SİLME", "SİMGE", "SİMİT", "SİMYA", "SİNEK", "SİNİR", "SİNME", "SİNOP", "SİNSİ", "SİNÜS", "SİPER", "SİPSİ", "SİREN", "SİRKE", "SİROZ", "SİSLİ", "SİTEM", "SİVAS", "SİVİL", "SİVRİ", "SİYAH", "SOSİS", "SÜNNİ",
    // Ş ➕
    "ŞAFAK", "ŞAHİN", "ŞAHIS", "ŞAHİT", "ŞAHSİ", "ŞANLI", "ŞAPKA", "ŞARAP", "ŞARKI", "ŞAYET", "ŞEHİR", "ŞEHİT", "ŞEKER", "ŞEKİL", "ŞEREF", "ŞERİF", "ŞİFRE", "ŞİLTE", "ŞİMDİ", "ŞINAV", "ŞİRİN", "ŞİŞKO", "ŞOFÖR", "ŞÖLEN", "ŞOPAR", "ŞUBAT",
    // T 
    "TABİİ", "TABİP", "TABİR", "TACİR", "TAHİN", "TAKİP", "TAKSİ", "TALİH", "TALİM", "TALİP", "TAMİR", "TARİF", "TARİH", "TATİL", "TAVİZ", "TAYİN", "TEKİL", "TEKİN", "TEKİR", "TELİF", "TEMİN", "TEMİZ", "TENİS", "TEORİ", "TEPKİ", "TEPSİ", "TERFİ", "TERİM", "TERLİ", "TERZİ", "TESİR", "TESİS", "TESTİ", "TETİK", "TEYİT", "TIBBİ", "TİLKİ", "TİNER", "TİPİK", "TİTAN", "TİTİZ", "TONİK", "TOPİK", "TORİK", "TRİKO",
    // U ➕
    "UCUBE", "UĞRAK", "UĞRAŞ", "UĞRUN", "UKALA", "UMMAN", "UMUMİ", "UNSUR", "USANÇ", "UŞKUN", "UTANÇ", "UYARI", "UYGAR", "UYGUN", "UYGUR", "UYRUK", "UYSAL", "UYUMA", "UZMAN",
    // Ü ➕
    "ÜÇGEN", "ÜCRET", "ÜLSER", "ÜNİTE", "ÜNLEM", "ÜNVAN", "ÜRKEK", "ÜSLUP", "ÜSTAT", "ÜSTÜN", "ÜZERİ", "ÜZGÜN", "ÜZMEK",
    // V ➕
    "VAGON", "VAHİY", "VAHŞİ", "VAKIF", "VAKİT", "VAKUM", "VALİZ", "VAPUR", "VARİL", "VARİS", "VAROŞ", "VAŞAK", "VASAT", "VASIF", "VATAN", "VATKA", "VATOZ", "VEBAL", "VEFAT", "VEGAN", "VEKİL", "VELET", "VENÜS", "VEREM", "VERGİ", "VERİM", "VEZİR", "VEZNE", "VİDEO", "VİLLA", "VİRAJ", "VİRAL", "VİRAN", "VİRÜS", "VİSKİ", "VİŞNE", "VİTES", "VOKAL", "VOLTA", "VÜCUT",
    // Y ➕
    "YABAN", "YAĞIŞ", "YAĞIZ", "YAĞMA", "YAHNİ", "YAHŞİ", "YAHUT", "YAKIN", "YAKIT", "YAKUT", "YALAN", "YALIN", "YALIZ", "YAMAÇ", "YAMAN", "YAMUK", "YANAK", "YANAL", "YANCI", "YANIK", "YANIT", "YANKI", "YANMA", "YANSI", "YAPAY", "YAPIM", "YAPIT", "YARAR", "YAREN", "YARGI", "YARIK", "YARIN", "YARIŞ", "YASAK", "YASAL", "YAŞAM", "YASİN", "YAŞIT", "YAŞLI", "YASSI", "YATAK", "YATAY", "YATIK", "YATIR", "YATSI", "YAVAN", "YAVAŞ", "YAVER", "YAVRU", "YAVUZ", "YAYIN", "YAYLA", "YAZAR", "YAZIK", "YAZIM", "YAZIN", "YAZIŞ", "YAZIT", "YEDEK", "YEĞEN", "YELEK", "YEMEK", "YEMEN", "YEMİN", "YEMİŞ", "YENGE", "YENİK", "YEREL", "YERLİ", "YEŞİL", "YEŞİM", "YETER", "YETİM", "YETKİ", "YIĞIN", "YİĞİT", "YIKIK", "YIKIM", "YIKMA", "YILAN", "YİRMİ", "YİTİK", "YİTİM", "YOBAZ", "YOĞUN", "YOKUŞ", "YOLCU", "YONCA", "YONGA", "YORMA", "YÖRÜK", "YORUM", "YOSUN", "YUDUM", "YUFKA", "YULAF", "YUMAK", "YUMRU", "YUMUK", "YUNAN", "YÜNLÜ", "YUNUS", "YÜREK", "YUTAK", "YÜZDE", "YÜZEY", "YÜZME", "YÜZÜK",
    // Z ➕
    "ZAFER", "ZALİM", "ZAMAN", "ZAMİR", "ZANLI", "ZARAR", "ZARİF", "ZATEN", "ZAYIF", "ZEBRA", "ZEBUR", "ZEHİR", "ZEKAT", "ZEMİN", "ZENCİ", "ZENNE", "ZEVAL", "ZİFİR", "ZİGON", "ZİHİN", "ZİKİR", "ZIMBA", "ZİNDE", "ZIPIR", "ZİRVE", "ZİYAN", "ZOMBİ", "ZORBA", "ZORLA", "ZORLU", "ZÜHAL", "ZÜLÜF", "ZULÜM", "ZÜPPE", "ZURNA",];
export { words };

