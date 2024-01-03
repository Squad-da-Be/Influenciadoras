// Dados simulados de vendas
const data = [
 { codigo: "QXTD", nome:"anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "11", Junho: "2", Julho: "3", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "T5WZ", nome:"elaine10", vendas: "17", comissao: "R$: 269,82", bonus: "R$: 70", comissao_total:"R$: 339,82", Abril: "0",Maio: "2", Junho: "7", Julho: "17", Agosto: "30", Setembro: "17", Outubro:"18",Novembro:"86",ranking: "16" }, 
 { codigo: "AVE7", nome:"dicasdaclarinha10", vendas: "15", comissao: "R$: 240,14", bonus: "R$: 70", comissao_total:"R$: 310,14", Abril: "255",Maio: "202", Junho: "120", Julho: "72", Agosto: "25", Setembro: "21", Outubro:"45",Novembro:"45",ranking: "18" }, 
 { codigo: "VBQ4", nome:"majestade10", vendas: "10", comissao: "R$: 151,2", bonus: "R$: 70", comissao_total:"R$: 221,2", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",Novembro:"7",ranking: "20" }, 
 { codigo: "SSW8", nome:"CHRISMENEZES10", vendas: "141", comissao: "R$: 2330,19", bonus: "R$: 510", comissao_total:"R$: 2840,19", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "108", Setembro: "176", Outubro:"110",Novembro:"170",ranking: "4" }, 
 { codigo: "3ERF", nome:"alivia10", vendas: "173", comissao: "R$: 2800,73", bonus: "R$: 510", comissao_total:"R$: 3310,73", Abril: "32",Maio: "25", Junho: "1", Julho: "2", Agosto: "37", Setembro: "194", Outubro:"186",Novembro:"339",ranking: "1" }, 
 { codigo: "OD96", nome:"miihmourao10", vendas: "50", comissao: "R$: 809,46", bonus: "R$: 510", comissao_total:"R$: 1319,46", Abril: "0",Maio: "18", Junho: "16", Julho: "63", Agosto: "16", Setembro: "5", Outubro:"3",Novembro:"60",ranking: "7" }, 
 { codigo: "1576", nome:"peace10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "15", Junho: "4", Julho: "8", Agosto: "1", Setembro: "0", Outubro:"1",Novembro:"7",ranking: "67" }, 
 { codigo: "AS61", nome:"manoelarosa10", vendas: "24", comissao: "R$: 395,02", bonus: "R$: 190", comissao_total:"R$: 585,02", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "45", Setembro: "56", Outubro:"29",Novembro:"127",ranking: "10" }, 
 { codigo: "HT7F", nome:"JUHVITAMINA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"1",Novembro:"5",ranking: "44" }, 
 { codigo: "UIL2", nome:"beautyrayy10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "2", Julho: "7", Agosto: "3", Setembro: "4", Outubro:"3",Novembro:"6",ranking: "67" }, 
 { codigo: "EU3Z", nome:"obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "ICT8", nome:"priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "3",Maio: "0", Junho: "1", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"2",ranking: "67" }, 
 { codigo: "DRJI", nome:"achadinhos10", vendas: "3", comissao: "R$: 48,57", bonus: "R$: 0", comissao_total:"R$: 48,57", Abril: "0",Maio: "2", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",Novembro:"5",ranking: "32" }, 
 { codigo: "PI7C", nome:"promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OQT9", nome:"adoramospromocao10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "7",Maio: "0", Junho: "1", Julho: "26", Agosto: "10", Setembro: "2", Outubro:"4",Novembro:"1",ranking: "67" }, 
 { codigo: "62FP", nome:"suellem10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "22", Junho: "13", Julho: "9", Agosto: "5", Setembro: "19", Outubro:"26",Novembro:"35",ranking: "44" }, 
 { codigo: "FSVS", nome:"PRISCILAROLLO10", vendas: "16", comissao: "R$: 253,63", bonus: "R$: 70", comissao_total:"R$: 323,63", Abril: "2",Maio: "27", Junho: "26", Julho: "25", Agosto: "20", Setembro: "4", Outubro:"9",Novembro:"17",ranking: "17" }, 
 { codigo: "W1DT", nome:"PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "67" }, 
 { codigo: "3R4A", nome:"DICABARATEZA10", vendas: "2", comissao: "R$: 32,38", bonus: "R$: 0", comissao_total:"R$: 32,38", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "2", Setembro: "0", Outubro:"0",Novembro:"13",ranking: "38" }, 
 { codigo: "DQLM", nome:"OQUEELAAMA10", vendas: "65", comissao: "R$: 1068,49", bonus: "R$: 510", comissao_total:"R$: 1578,49", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "7", Setembro: "7", Outubro:"0",Novembro:"14",ranking: "5" }, 
 { codigo: "QH6I", nome:"DICASDEBELEZADAGAH10", vendas: "21", comissao: "R$: 361,57", bonus: "R$: 190", comissao_total:"R$: 551,57", Abril: "0",Maio: "0", Junho: "1", Julho: "1", Agosto: "8", Setembro: "1", Outubro:"1",Novembro:"18",ranking: "12" }, 
 { codigo: "NKRO", nome:"BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "1", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "6C39", nome:"MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "SM4U", nome:"DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "FAMX", nome:"MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "67" }, 
 { codigo: "22XR", nome:"DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "MVJA", nome:"ESTHERGOMES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "0", Setembro: "1", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "34Y7", nome:"MILENAMARTIL10", vendas: "22", comissao: "R$: 356,16", bonus: "R$: 190", comissao_total:"R$: 546,16", Abril: "0",Maio: "0", Junho: "0", Julho: "22", Agosto: "49", Setembro: "24", Outubro:"12",Novembro:"70",ranking: "11" }, 
 { codigo: "6R45", nome:"ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "UEK9", nome:"RESANTANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "4", Setembro: "2", Outubro:"0",Novembro:"9",ranking: "67" }, 
 { codigo: "X9KE", nome:"ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "LL54", nome:"DICASDANESSA10", vendas: "21", comissao: "R$: 339,97", bonus: "R$: 190", comissao_total:"R$: 529,97", Abril: "0",Maio: "0", Junho: "0", Julho: "100", Agosto: "394", Setembro: "295", Outubro:"162",Novembro:"93",ranking: "12" }, 
 { codigo: "HG44", nome:"BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "E5ZJ", nome:"LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "3", Setembro: "0", Outubro:"0",Novembro:"6",ranking: "67" }, 
 { codigo: "V4C8", nome:"COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "JHDE", nome:"BLOGDICAJU10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "6", Outubro:"1",Novembro:"6",ranking: "44" }, 
 { codigo: "FEL1", nome:"DICASBYDEIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "3", Agosto: "9", Setembro: "1", Outubro:"1",Novembro:"7",ranking: "67" }, 
 { codigo: "ZW2O", nome:"BLOOGUERICES10", vendas: "3", comissao: "R$: 48,57", bonus: "R$: 0", comissao_total:"R$: 48,57", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"2",Novembro:"13",ranking: "32" }, 
 { codigo: "KFCB", nome:"RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "CNBP", nome:"EMYLOHANA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"0",Novembro:"1",ranking: "44" }, 
 { codigo: "HL8B", nome:"JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "67" }, 
 { codigo: "1X5G", nome:"OHLIVIAMARIA10", vendas: "2", comissao: "R$: 32,38", bonus: "R$: 0", comissao_total:"R$: 32,38", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "3", Outubro:"0",Novembro:"8",ranking: "38" }, 
 { codigo: "TKIZ", nome:"MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"5",ranking: "67" }, 
 { codigo: "Z1JU", nome:"VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "MAQS", nome:"GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "3", Setembro: "3", Outubro:"0",Novembro:"5",ranking: "67" }, 
 { codigo: "3LDV", nome:"EVOLUIDAPELE10", vendas: "3", comissao: "R$: 48,57", bonus: "R$: 0", comissao_total:"R$: 48,57", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "35", Setembro: "16", Outubro:"0",Novembro:"17",ranking: "32" }, 
 { codigo: "H5OX", nome:"JESSICANATALIA10", vendas: "7", comissao: "R$: 113,32", bonus: "R$: 20", comissao_total:"R$: 133,32", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "7", Setembro: "22", Outubro:"9",Novembro:"29",ranking: "23" }, 
 { codigo: "3W4Z", nome:"TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "BW6M", nome:"DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",Novembro:"4",ranking: "67" }, 
 { codigo: "DFLW", nome:"CUIDADOSDAISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "10", Setembro: "7", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "KQ67", nome:"PRISCILALIROW10", vendas: "1", comissao: "R$: 32,4", bonus: "R$: 0", comissao_total:"R$: 32,4", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "13", Setembro: "2", Outubro:"1",Novembro:"0",ranking: "44" }, 
 { codigo: "M1V3", nome:"JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "DAGE", nome:"THATS10", vendas: "61", comissao: "R$: 987,54", bonus: "R$: 510", comissao_total:"R$: 1497,54", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "27", Setembro: "20", Outubro:"20",Novembro:"41",ranking: "6" }, 
 { codigo: "HC8W", nome:"BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"24",ranking: "67" }, 
 { codigo: "X6Z1", nome:"ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "17EX", nome:"BIAGIFFONI10", vendas: "144", comissao: "R$: 2347,43", bonus: "R$: 510", comissao_total:"R$: 2857,43", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",Novembro:"106",ranking: "3" }, 
 { codigo: "EJ12", nome:"DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "8LXB", nome:"LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OUZ4", nome:"TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"3",ranking: "67" }, 
 { codigo: "L4BE", nome:"TANARAFP10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",Novembro:"1",ranking: "67" }, 
 { codigo: "OB81", nome:"GARIMPONLINE10", vendas: "12", comissao: "R$: 194,27", bonus: "R$: 70", comissao_total:"R$: 264,27", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"13",ranking: "19" }, 
 { codigo: "YP1F", nome:"VICRUZS10", vendas: "159", comissao: "R$: 2574,08", bonus: "R$: 510", comissao_total:"R$: 3084,08", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"60",ranking: "2" }, 
 { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY10", vendas: "6", comissao: "R$: 97,14", bonus: "R$: 20", comissao_total:"R$: 117,14", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"5",ranking: "25" }, 
 { codigo: "AUQ7", nome:"MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "NKZ9", nome:"MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "67" }, 
 { codigo: "FPJX", nome:"NUTRIMILAALMEIDA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "5", Setembro: "4", Outubro:"12",Novembro:"10",ranking: "44" }, 
 { codigo: "LRZU", nome:"BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "1", Outubro:"0",Novembro:"1",ranking: "67" }, 
 { codigo: "6OS6", nome:"DICASCOMABRU10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "8", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "VMVN", nome:"THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",Novembro:"0",ranking: "67" }, 
 { codigo: "75IQ", nome:"JOYCECUSTODIO10", vendas: "5", comissao: "R$: 80,95", bonus: "R$: 20", comissao_total:"R$: 100,95", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "5", Outubro:"0",Novembro:"10",ranking: "29" }, 
 { codigo: "P1BK", nome:"RAFAELAULLA10", vendas: "2", comissao: "R$: 32,38", bonus: "R$: 0", comissao_total:"R$: 32,38", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",Novembro:"0",ranking: "38" }, 
 { codigo: "UEYY", nome:"BRUNOCASTILHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "7", Setembro: "3", Outubro:"3",Novembro:"0",ranking: "67" }, 
 { codigo: "118X", nome:"ISABELAFERRER10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"4",Novembro:"3",ranking: "67" }, 
 { codigo: "LOCP", nome:"SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "IA49", nome:"CAMILASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "TRFZ", nome:"ALINEFUNGACS10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"12",ranking: "44" }, 
 { codigo: "ZHY6", nome:"LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"5",ranking: "67" }, 
 { codigo: "L7Y7", nome:"IZABARREIROS10", vendas: "10", comissao: "R$: 156,49", bonus: "R$: 70", comissao_total:"R$: 226,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",Novembro:"0",ranking: "20" }, 
 { codigo: "6PQA", nome:"LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "R1M9", nome:"ACHADINHOSDAMI10", vendas: "5", comissao: "R$: 80,95", bonus: "R$: 20", comissao_total:"R$: 100,95", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"9",Novembro:"10",ranking: "29" }, 
 { codigo: "YWVX", nome:"BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "9LHY", nome:"SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "HXRJ", nome:"CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "X1RF", nome:"DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "Y232", nome:"DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "G7MK", nome:"ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "62BK", nome:"DOMENICA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "ZSX5", nome:"BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "6SNV", nome:"GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",Novembro:"0",ranking: "67" }, 
 { codigo: "17LQ", nome:"NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "UYZR", nome:"PAMELAARGIBAY10", vendas: "32", comissao: "R$: 518,05", bonus: "R$: 190", comissao_total:"R$: 708,05", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",Novembro:"48",ranking: "8" }, 
 { codigo: "RPAZ", nome:"ROTINADEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",Novembro:"10",ranking: "67" }, 
 { codigo: "FQKF", nome:"VICIEINAPROMO10", vendas: "3", comissao: "R$: 48,57", bonus: "R$: 0", comissao_total:"R$: 48,57", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",Novembro:"23",ranking: "32" }, 
 { codigo: "NC2O", nome:"SUTTICAMILA10", vendas: "6", comissao: "R$: 97,14", bonus: "R$: 20", comissao_total:"R$: 117,14", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"14",Novembro:"11",ranking: "25" }, 
 { codigo: "Y8YV", nome:"MAIRAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",Novembro:"0",ranking: "67" }, 
 { codigo: "BTFS", nome:"MILAMUNIZ10", vendas: "6", comissao: "R$: 103,62", bonus: "R$: 20", comissao_total:"R$: 123,62", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"16",ranking: "25" }, 
 { codigo: "Z8JJ", nome:"PROMOCAOSO10", vendas: "2", comissao: "R$: 32,38", bonus: "R$: 0", comissao_total:"R$: 32,38", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",Novembro:"16",ranking: "38" }, 
 { codigo: "LT1I", nome:"CAPOBIANNCO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "AGK6", nome:"KELLYSILVA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"6",ranking: "44" }, 
 { codigo: "Y61F", nome:"RENATAALBERT10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "FIWX", nome:"THAISCARMO10", vendas: "2", comissao: "R$: 32,38", bonus: "R$: 0", comissao_total:"R$: 32,38", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"9",ranking: "38" }, 
 { codigo: "PUCP", nome:"ACHADINHOSYOU10", vendas: "9", comissao: "R$: 145,7", bonus: "R$: 20", comissao_total:"R$: 165,7", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",Novembro:"118",ranking: "22" }, 
 { codigo: "MRKT", nome:"SOLDAPRAIA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"2",ranking: "44" }, 
 { codigo: "GEQM", nome:"MICHELLYARRUDA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"2",ranking: "44" }, 
 { codigo: "Z4RI", nome:"JULIAMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OIBG", nome:"FERNANDALONGO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "1XFM", nome:"CHRISEVERT10", vendas: "7", comissao: "R$: 107,93", bonus: "R$: 20", comissao_total:"R$: 127,93", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"9",ranking: "23" }, 
 { codigo: "89B9", nome:"JULYANACALENTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "PRJF", nome:"ANAPAULA10", vendas: "29", comissao: "R$: 464,09", bonus: "R$: 190", comissao_total:"R$: 654,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "9" }, 
 { codigo: "13RO", nome:"ANESOUZA10", vendas: "3", comissao: "R$: 48,57", bonus: "R$: 0", comissao_total:"R$: 48,57", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"2",ranking: "32" }, 
 { codigo: "UFTC", nome:"JOSIELY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "93RS", nome:"FABIANACOSTA10", vendas: "1", comissao: "R$: 16,19", bonus: "R$: 0", comissao_total:"R$: 16,19", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "6QVX", nome:"AMANDAZAFRA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "X365", nome:"CURTEPROMO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "ZXJN", nome:"NEGRAVI10", vendas: "2", comissao: "R$: 26,98", bonus: "R$: 0", comissao_total:"R$: 26,98", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "38" }, 
 { codigo: "63RN", nome:"ALICESANTOS10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "COK1", nome:"ALINETREVISI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "WWHM", nome:"AMANDALIMA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "ZRY7", nome:"ANALU10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "QFO6", nome:"BARBARAPIRANI10", vendas: "20", comissao: "R$: 279,72", bonus: "R$: 190", comissao_total:"R$: 469,72", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "14" }, 
 { codigo: "9P91", nome:"BEAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "JC6M", nome:"CLAUBOGALHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "NZ97", nome:"CRISNASCIMENTO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "WLQB", nome:"EDUARDARAMALHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OQ2I", nome:"NINELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "WJQV", nome:"FERNANDALEAL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "3IDG", nome:"GABICORREA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "XF2S", nome:"HANNAKATIELI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "RVBH", nome:"PROMOSDAHEIDY10", vendas: "20", comissao: "R$: 251,84", bonus: "R$: 190", comissao_total:"R$: 441,84", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "14" }, 
 { codigo: "M23A", nome:"ISLANYAPEREIRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "CI6D", nome:"ITALAMACHADO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "5C78", nome:"LARIMENEGAZ10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OBUN", nome:"LARISSALOPES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "GTFI", nome:"LEANDREZASILVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "FTMP", nome:"LILISPERIDIAO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "2Z18", nome:"LORENALEONI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "4AGF", nome:"LUIZAVINHOLI10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "N1VG", nome:"MARIAATHAYDE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "FL8B", nome:"DUDALEONCIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "3PZZ", nome:"MARIAHELOISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "KOO7", nome:"TRANSICAOECORAGEM10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "TBCP", nome:"MARINASAVINO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "AGIV", nome:"NAIENNENOGUEIRA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "ZPET", nome:"NATHALIAGIOLARNO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "BPO9", nome:"PALOMAPENNA10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"1",ranking: "44" }, 
 { codigo: "7MFN", nome:"CASADARAY10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "RK9L", nome:"BECAOLIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "F7E1", nome:"SIMONESCHUMER10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "OE7B", nome:"TAINAAMORIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "HONQ", nome:"THAINAGABRIELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "T2Y1", nome:"THATAMASK10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "Q7RI", nome:"VANESSABELLE10", vendas: "3", comissao: "R$: 40,47", bonus: "R$: 0", comissao_total:"R$: 40,47", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"4",ranking: "32" }, 
 { codigo: "WNQY", nome:"VANESSAMATOS10", vendas: "1", comissao: "R$: 13,49", bonus: "R$: 0", comissao_total:"R$: 13,49", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "44" }, 
 { codigo: "6HRI", nome:"WANESSACASTRO10", vendas: "5", comissao: "R$: 67,46", bonus: "R$: 20", comissao_total:"R$: 87,46", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "29" }, 
 { codigo: "WCPT", nome:"PROMOSDAYAS10", vendas: "6", comissao: "R$: 80,95", bonus: "R$: 20", comissao_total:"R$: 100,95", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"6",ranking: "25" }, 
 { codigo: "JOTG", nome:"PROMODEAMIGA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "EP87", nome:"EMILYNDURAN10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "5LYS", nome:"KATIACANELA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "YRUX", nome:"GABYVETTORE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "PAUT", nome:"JACQUELINEZIDIOTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "H74L", nome:"MABENTANCOR10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "QBSR", nome:"RAQUELSPORCH10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 { codigo: "MO7O", nome:"PALLOMAOLIVEIRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",Novembro:"0",ranking: "67" }, 
 

 
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
  <p><strong>Novembro: </strong> ${produto.Novembro}</p>

        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Código não encontrado.</p>";
    }
});
