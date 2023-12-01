// Dados simulados de vendas
const data = [
 { codigo: "QXTD", nome:"anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "11", Junho: "2", Julho: "3", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "T5WZ", nome:"elaine10", vendas: "86", comissao: "R$: 1380,76", bonus: "R$: 610", comissao_total:"R$: 1990,76", Abril: "0",Maio: "2", Junho: "7", Julho: "17", Agosto: "30", Setembro: "17", Outubro:"18",ranking: "7" }, 	
 { codigo: "AVE7", nome:"dicasdaclarinha10", vendas: "45", comissao: "R$: 755,92", bonus: "R$: 260", comissao_total:"R$: 1015,92", Abril: "255",Maio: "202", Junho: "120", Julho: "72", Agosto: "25", Setembro: "21", Outubro:"45",ranking: "12" }, 	
 { codigo: "VBQ4", nome:"majestade10", vendas: "7", comissao: "R$: 116,03", bonus: "R$: 40", comissao_total:"R$: 156,03", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "36" }, 	
 { codigo: "SSW8", nome:"CHRISMENEZES10", vendas: "169", comissao: "R$: 2968,1", bonus: "R$: 610", comissao_total:"R$: 3578,1", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "108", Setembro: "176", Outubro:"110",ranking: "2" }, 	
 { codigo: "3ERF", nome:"alivia10", vendas: "339", comissao: "R$: 4921,1", bonus: "R$: 610", comissao_total:"R$: 5531,1", Abril: "32",Maio: "25", Junho: "1", Julho: "2", Agosto: "37", Setembro: "194", Outubro:"186",ranking: "1" }, 	
 { codigo: "OD96", nome:"miihmourao10", vendas: "60", comissao: "R$: 899,83", bonus: "R$: 610", comissao_total:"R$: 1509,83", Abril: "0",Maio: "18", Junho: "16", Julho: "63", Agosto: "16", Setembro: "5", Outubro:"3",ranking: "9" }, 	
 { codigo: "1576", nome:"peace10", vendas: "7", comissao: "R$: 115,22", bonus: "R$: 40", comissao_total:"R$: 155,22", Abril: "1",Maio: "15", Junho: "4", Julho: "8", Agosto: "1", Setembro: "0", Outubro:"1",ranking: "36" }, 	
 { codigo: "AS61", nome:"manoelarosa10", vendas: "127", comissao: "R$: 2235,35", bonus: "R$: 610", comissao_total:"R$: 2845,35", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "45", Setembro: "56", Outubro:"29",ranking: "3" }, 	
 { codigo: "HT7F", nome:"JUHVITAMINA10", vendas: "5", comissao: "R$: 78,26", bonus: "R$: 40", comissao_total:"R$: 118,26", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"1",ranking: "43" }, 	
 { codigo: "UIL2", nome:"beautyrayy10", vendas: "6", comissao: "R$: 69,23", bonus: "R$: 40", comissao_total:"R$: 109,23", Abril: "0",Maio: "0", Junho: "2", Julho: "7", Agosto: "3", Setembro: "4", Outubro:"3",ranking: "39" }, 	
 { codigo: "EU3Z", nome:"obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "ICT8", nome:"priirubio10", vendas: "2", comissao: "R$: 29,76", bonus: "R$: 0", comissao_total:"R$: 29,76", Abril: "3",Maio: "0", Junho: "1", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "53" }, 	
 { codigo: "DRJI", nome:"achadinhos10", vendas: "5", comissao: "R$: 51,1", bonus: "R$: 40", comissao_total:"R$: 91,1", Abril: "0",Maio: "2", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "43" }, 	
 { codigo: "PI7C", nome:"promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OQT9", nome:"adoramospromocao10", vendas: "1", comissao: "R$: 21,59", bonus: "R$: 0", comissao_total:"R$: 21,59", Abril: "7",Maio: "0", Junho: "1", Julho: "26", Agosto: "10", Setembro: "2", Outubro:"4",ranking: "56" }, 	
 { codigo: "62FP", nome:"suellem10", vendas: "35", comissao: "R$: 590,28", bonus: "R$: 260", comissao_total:"R$: 850,28", Abril: "0",Maio: "22", Junho: "13", Julho: "9", Agosto: "5", Setembro: "19", Outubro:"26",ranking: "14" }, 	
 { codigo: "FSVS", nome:"PRISCILAROLLO10", vendas: "17", comissao: "R$: 305,16", bonus: "R$: 140", comissao_total:"R$: 445,16", Abril: "2",Maio: "27", Junho: "26", Julho: "25", Agosto: "20", Setembro: "4", Outubro:"9",ranking: "19" }, 	
 { codigo: "W1DT", nome:"PROMOLOUCAS10", vendas: "1", comissao: "R$: 5,48", bonus: "R$: 0", comissao_total:"R$: 5,48", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "3R4A", nome:"DICABARATEZA10", vendas: "13", comissao: "R$: 149,05", bonus: "R$: 140", comissao_total:"R$: 289,05", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "24" }, 	
 { codigo: "DQLM", nome:"OQUEELAAMA10", vendas: "14", comissao: "R$: 204,88", bonus: "R$: 140", comissao_total:"R$: 344,88", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "7", Setembro: "7", Outubro:"0",ranking: "23" }, 	
 { codigo: "QH6I", nome:"DICASDEBELEZADAGAH10", vendas: "18", comissao: "R$: 229,83", bonus: "R$: 140", comissao_total:"R$: 369,83", Abril: "0",Maio: "0", Junho: "1", Julho: "1", Agosto: "8", Setembro: "1", Outubro:"1",ranking: "18" }, 	
 { codigo: "NKRO", nome:"BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "6C39", nome:"MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "SM4U", nome:"DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "FAMX", nome:"MARCELAPAIVA10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "22XR", nome:"DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "MVJA", nome:"ESTHERGOMES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "0", Setembro: "1", Outubro:"0",ranking: "64" }, 	
 { codigo: "34Y7", nome:"MILENAMARTIL10", vendas: "70", comissao: "R$: 1128,06", bonus: "R$: 610", comissao_total:"R$: 1738,06", Abril: "0",Maio: "0", Junho: "0", Julho: "22", Agosto: "49", Setembro: "24", Outubro:"12",ranking: "8" }, 	
 { codigo: "6R45", nome:"ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "UEK9", nome:"RESANTANA10", vendas: "9", comissao: "R$: 151,11", bonus: "R$: 40", comissao_total:"R$: 191,11", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "4", Setembro: "2", Outubro:"0",ranking: "33" }, 	
 { codigo: "X9KE", nome:"ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "7BU7", nome:"BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "29", Agosto: "12", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "LL54", nome:"DICASDANESSA10", vendas: "93", comissao: "R$: 1610,09", bonus: "R$: 610", comissao_total:"R$: 2220,09", Abril: "0",Maio: "0", Junho: "0", Julho: "100", Agosto: "394", Setembro: "295", Outubro:"162",ranking: "6" }, 	
 { codigo: "HG44", nome:"BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "E5ZJ", nome:"LUIZACORTI10", vendas: "6", comissao: "R$: 109,73", bonus: "R$: 40", comissao_total:"R$: 149,73", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "3", Setembro: "0", Outubro:"0",ranking: "39" }, 	
 { codigo: "V4C8", nome:"COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "JHDE", nome:"BLOGDICAJU10", vendas: "6", comissao: "R$: 61,53", bonus: "R$: 40", comissao_total:"R$: 101,53", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "6", Outubro:"1",ranking: "39" }, 	
 { codigo: "FEL1", nome:"DICASBYDEIA10", vendas: "7", comissao: "R$: 105,42", bonus: "R$: 40", comissao_total:"R$: 145,42", Abril: "0",Maio: "0", Junho: "0", Julho: "3", Agosto: "9", Setembro: "1", Outubro:"1",ranking: "36" }, 	
 { codigo: "ZW2O", nome:"BLOOGUERICES10", vendas: "13", comissao: "R$: 204,52", bonus: "R$: 140", comissao_total:"R$: 344,52", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"2",ranking: "24" }, 	
 { codigo: "KFCB", nome:"RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "CNBP", nome:"EMYLOHANA10", vendas: "1", comissao: "R$: 7,29", bonus: "R$: 0", comissao_total:"R$: 7,29", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"0",ranking: "56" }, 	
 { codigo: "HL8B", nome:"JULIADEOLINDO10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "1X5G", nome:"OHLIVIAMARIA10", vendas: "8", comissao: "R$: 143,92", bonus: "R$: 40", comissao_total:"R$: 183,92", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "35" }, 	
 { codigo: "TKIZ", nome:"MAISDEBELEZA10", vendas: "5", comissao: "R$: 84,78", bonus: "R$: 40", comissao_total:"R$: 124,78", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "43" }, 	
 { codigo: "Z1JU", nome:"VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "MAQS", nome:"GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE10", vendas: "5", comissao: "R$: 82,74", bonus: "R$: 40", comissao_total:"R$: 122,74", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "3", Setembro: "3", Outubro:"0",ranking: "43" }, 	
 { codigo: "3LDV", nome:"EVOLUIDAPELE10", vendas: "17", comissao: "R$: 232,52", bonus: "R$: 140", comissao_total:"R$: 372,52", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "35", Setembro: "16", Outubro:"0",ranking: "19" }, 	
 { codigo: "H5OX", nome:"JESSICANATALIA10", vendas: "29", comissao: "R$: 491,96", bonus: "R$: 260", comissao_total:"R$: 751,96", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "7", Setembro: "22", Outubro:"9",ranking: "15" }, 	
 { codigo: "3W4Z", nome:"TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "BW6M", nome:"DICASDAHAI10", vendas: "4", comissao: "R$: 68,36", bonus: "R$: 0", comissao_total:"R$: 68,36", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "49" }, 	
 { codigo: "DFLW", nome:"CUIDADOSDAISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "10", Setembro: "7", Outubro:"0",ranking: "64" }, 	
 { codigo: "KQ67", nome:"PRISCILALIROW10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "13", Setembro: "2", Outubro:"1",ranking: "64" }, 	
 { codigo: "M1V3", nome:"JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "DAGE", nome:"THATS10", vendas: "40", comissao: "R$: 703,1", bonus: "R$: 260", comissao_total:"R$: 963,1", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "27", Setembro: "20", Outubro:"20",ranking: "13" }, 	
 { codigo: "HC8W", nome:"BYLUANASANTOS10", vendas: "24", comissao: "R$: 402,98", bonus: "R$: 260", comissao_total:"R$: 662,98", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "16" }, 	
 { codigo: "X6Z1", nome:"ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "17EX", nome:"BIAGIFFONI10", vendas: "105", comissao: "R$: 1757,82", bonus: "R$: 610", comissao_total:"R$: 2367,82", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "5" }, 	
 { codigo: "EJ12", nome:"DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "8LXB", nome:"LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OUZ4", nome:"TAIZELIMA10", vendas: "3", comissao: "R$: 55,78", bonus: "R$: 0", comissao_total:"R$: 55,78", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "50" }, 	
 { codigo: "L4BE", nome:"TANARAFP10", vendas: "1", comissao: "R$: 7,29", bonus: "R$: 0", comissao_total:"R$: 7,29", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",ranking: "56" }, 	
 { codigo: "OB81", nome:"GARIMPONLINE10", vendas: "13", comissao: "R$: 189,24", bonus: "R$: 140", comissao_total:"R$: 329,24", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "24" }, 	
 { codigo: "YP1F", nome:"VICRUZS10", vendas: "60", comissao: "R$: 1212,99", bonus: "R$: 610", comissao_total:"R$: 1822,99", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "9" }, 	
 { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY10", vendas: "5", comissao: "R$: 94,89", bonus: "R$: 40", comissao_total:"R$: 134,89", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "43" }, 	
 { codigo: "AUQ7", nome:"MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "NKZ9", nome:"MALUMEDINA10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "FPJX", nome:"NUTRIMILAALMEIDA10", vendas: "10", comissao: "R$: 179,01", bonus: "R$: 140", comissao_total:"R$: 319,01", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "5", Setembro: "4", Outubro:"12",ranking: "29" }, 	
 { codigo: "LRZU", nome:"BRENDOLETA10", vendas: "1", comissao: "R$: 24,28", bonus: "R$: 0", comissao_total:"R$: 24,28", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "1", Outubro:"0",ranking: "56" }, 	
 { codigo: "6OS6", nome:"DICASCOMABRU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "8", Outubro:"0",ranking: "64" }, 	
 { codigo: "VMVN", nome:"THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "64" }, 	
 { codigo: "75IQ", nome:"JOYCECUSTODIO10", vendas: "10", comissao: "R$: 121,06", bonus: "R$: 140", comissao_total:"R$: 261,06", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "5", Outubro:"0",ranking: "29" }, 	
 { codigo: "P1BK", nome:"RAFAELAULLA10", vendas: "3", comissao: "R$: 43,13", bonus: "R$: 0", comissao_total:"R$: 43,13", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",ranking: "50" }, 	
 { codigo: "UEYY", nome:"BRUNOCASTILHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "7", Setembro: "3", Outubro:"3",ranking: "64" }, 	
 { codigo: "118X", nome:"ISABELAFERRER10", vendas: "3", comissao: "R$: 39,67", bonus: "R$: 0", comissao_total:"R$: 39,67", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"4",ranking: "50" }, 	
 { codigo: "LOCP", nome:"SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "IA49", nome:"CAMILASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"0",ranking: "64" }, 	
 { codigo: "TRFZ", nome:"ALINEFUNGACS10", vendas: "12", comissao: "R$: 231,15", bonus: "R$: 140", comissao_total:"R$: 371,15", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "27" }, 	
 { codigo: "ZHY6", nome:"LARIXDIAS10", vendas: "5", comissao: "R$: 85,45", bonus: "R$: 40", comissao_total:"R$: 125,45", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "43" }, 	
 { codigo: "L7Y7", nome:"IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "64" }, 	
 { codigo: "6PQA", nome:"LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "R1M9", nome:"ACHADINHOSDAMI10", vendas: "10", comissao: "R$: 170,91", bonus: "R$: 140", comissao_total:"R$: 310,91", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"9",ranking: "29" }, 	
 { codigo: "YWVX", nome:"BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "9LHY", nome:"SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "HXRJ", nome:"CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "X1RF", nome:"DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "Y232", nome:"DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "G7MK", nome:"ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "62BK", nome:"DOMENICA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "ZSX5", nome:"BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "6SNV", nome:"GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "64" }, 	
 { codigo: "17LQ", nome:"NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "UYZR", nome:"PAMELAARGIBAY10", vendas: "50", comissao: "R$: 492,83", bonus: "R$: 610", comissao_total:"R$: 1102,83", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "11" }, 	
 { codigo: "RPAZ", nome:"ROTINADEPROMOS10", vendas: "10", comissao: "R$: 178,09", bonus: "R$: 140", comissao_total:"R$: 318,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",ranking: "29" }, 	
 { codigo: "FQKF", nome:"VICIEINAPROMO10", vendas: "23", comissao: "R$: 403,66", bonus: "R$: 260", comissao_total:"R$: 663,66", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",ranking: "17" }, 	
 { codigo: "NC2O", nome:"SUTTICAMILA10", vendas: "11", comissao: "R$: 180,36", bonus: "R$: 140", comissao_total:"R$: 320,36", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"14",ranking: "28" }, 	
 { codigo: "Y8YV", nome:"MAIRAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "64" }, 	
 { codigo: "BTFS", nome:"MILAMUNIZ10", vendas: "16", comissao: "R$: 305,81", bonus: "R$: 140", comissao_total:"R$: 445,81", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "22" }, 	
 { codigo: "Z8JJ", nome:"PROMOCAOSO10", vendas: "17", comissao: "R$: 253,19", bonus: "R$: 140", comissao_total:"R$: 393,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",ranking: "19" }, 	
 { codigo: "LT1I", nome:"CAPOBIANNCO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "AGK6", nome:"KELLYSILVA10", vendas: "6", comissao: "R$: 109,73", bonus: "R$: 40", comissao_total:"R$: 149,73", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "39" }, 	
 { codigo: "Y61F", nome:"RENATAALBERT10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "FIWX", nome:"THAISCARMO10", vendas: "9", comissao: "R$: 169,17", bonus: "R$: 40", comissao_total:"R$: 209,17", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "33" }, 	
 { codigo: "PUCP", nome:"ACHADINHOSYOU10", vendas: "118", comissao: "R$: 1684,78", bonus: "R$: 610", comissao_total:"R$: 2294,78", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",ranking: "4" }, 	
 { codigo: "MRKT", nome:"SOLDAPRAIA10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "53" }, 	
 { codigo: "GEQM", nome:"MICHELLYARRUDA10", vendas: "2", comissao: "R$: 37,77", bonus: "R$: 0", comissao_total:"R$: 37,77", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "53" }, 	
 { codigo: "Z4RI", nome:"JULIAMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OIBG", nome:"FERNANDALONGO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "1XFM", nome:"CHRISEVERT10", vendas: "9", comissao: "R$: 135,01", bonus: "R$: 40", comissao_total:"R$: 175,01", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "33" }, 	
 { codigo: "89B9", nome:"JULYANACALENTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "PRJF", nome:"ANAPAULA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "13RO", nome:"ANESOUZA10", vendas: "2", comissao: "R$: 29,23", bonus: "R$: 12,14", comissao_total:"R$: 41,37", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "53" }, 	
 { codigo: "UFTC", nome:"JOSIELY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "93RS", nome:"FABIANACOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "6QVX", nome:"AMANDAZAFRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "X365", nome:"CURTEPROMO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "ZXJN", nome:"NEGRAVI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "63RN", nome:"ALICESANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "COK1", nome:"ALINETREVISI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "WWHM", nome:"AMANDALIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "ZRY7", nome:"ANALU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "QFO6", nome:"BARBARAPIRANI10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "9P91", nome:"BEAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "JC6M", nome:"CLAUBOGALHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "NZ97", nome:"CRISNASCIMENTO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "WLQB", nome:"EDUARDARAMALHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OQ2I", nome:"NINELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "WJQV", nome:"FERNANDALEAL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "3IDG", nome:"GABICORREA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "XF2S", nome:"HANNAKATIELI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "RVBH", nome:"PROMOSDAHEIDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "M23A", nome:"ISLANYAPEREIRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "CI6D", nome:"ITALAMACHADO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "5C78", nome:"LARIMENEGAZ10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OBUN", nome:"LARISSALOPES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "GTFI", nome:"LEANDREZASILVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "FTMP", nome:"LILISPERIDIAO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "2Z18", nome:"LORENALEONI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "4AGF", nome:"LUIZAVINHOLI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "N1VG", nome:"MARIAATHAYDE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "FL8B", nome:"DUDALEONCIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "3PZZ", nome:"MARIAHELOISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "KOO7", nome:"TRANSICAOECORAGEM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "TBCP", nome:"MARINASAVINO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "AGIV", nome:"NAIENNENOGUEIRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "ZPET", nome:"NATHALIAGIOLARNO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "BPO9", nome:"PALOMAPENNA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "56" }, 	
 { codigo: "7MFN", nome:"CASADARAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "RK9L", nome:"BECAOLIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "F7E1", nome:"SIMONESCHUMER10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "OE7B", nome:"TAINAAMORIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "HONQ", nome:"THAINAGABRIELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "T2Y1", nome:"THATAMASK10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "Q7RI", nome:"VANESSABELLE10", vendas: "4", comissao: "R$: 53,96", bonus: "R$: 0", comissao_total:"R$: 53,96", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "49" }, 	
 { codigo: "WNQY", nome:"VANESSAMATOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "6HRI", nome:"WANESSACASTRO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	
 { codigo: "WCPT", nome:"PROMOSDAYAS10", vendas: "6", comissao: "R$: 80,95", bonus: "R$: 0", comissao_total:"R$: 80,95", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "39" }, 	
 { codigo: "JOTG", nome:"PROMODEAMIGA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "64" }, 	

 
    // Adicione os dados restantes da sua planilha
];
// Elementos do DOM
const codigoInput = document.getElementById("codigoInput");
const buscarButton = document.getElementById("buscarButton");
const resultadoDiv = document.getElementById("resultado");
// Event listener para o botão de busca
buscarButton.addEventListener("click", () => {
    const codigo = codigoInput.value;
    // Procurando o produto pelo código
    const produto = data.find(item => item.codigo === codigo);
    if (produto) {
        // Exibindo os detalhes do produto se encontrado
        resultadoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Vendas:</strong> ${produto.vendas}</p>
            <p><strong>Comissão:</strong> ${produto.comissao}</p>
            <p><strong>Bônus:</strong> ${produto.bonus}</p>
            <p><strong>Comissão final:</strong> ${produto.comissao_total}</p>
            <p><strong>Sua posição no ranking mensal é:</strong> ${produto.ranking}</p>
            <br>
            <br>
           <style>
           .linha-tracada {
           text-align: center;
           border-bottom: 1px dashed #000; /* 1px de largura, tracejada, cor preta */
           }
           </style>

<p class="linha-tracada"><strong>Histórico de Pedidos</strong></p>

  <br>
  
  <p><strong>Abril: </strong> ${produto.Abril}</p>
  <p><strong>Maio: </strong> ${produto.Maio}</p>
  <p><strong>Junho: </strong> ${produto.Junho}</p>
  <p><strong>Julho: </strong> ${produto.Julho}</p>
  <p><strong>Agosto: </strong> ${produto.Agosto}</p>
  <p><strong>Setembro: </strong> ${produto.Setembro}</p>
  <p><strong>Outubro: </strong> ${produto.Outubro}</p>



        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Código não encontrado.</p>";
    }
});
