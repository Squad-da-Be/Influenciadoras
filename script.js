// Dados simulados de vendas
const data = [
 { codigo: "QXTD", nome:"anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "11", Junho: "2", Julho: "3", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "T5WZ", nome:"elaine10", vendas: "39", comissao: "R$: 600,74", bonus: "R$: 260", comissao_total:"R$: 860,74", Abril: "0",Maio: "2", Junho: "7", Julho: "17", Agosto: "30", Setembro: "17", Outubro:"18",ranking: "8" }, 
 { codigo: "AVE7", nome:"dicasdaclarinha10", vendas: "5", comissao: "R$: 65,85", bonus: "R$: 40", comissao_total:"R$: 105,85", Abril: "255",Maio: "202", Junho: "120", Julho: "72", Agosto: "25", Setembro: "21", Outubro:"45",ranking: "24" }, 
 { codigo: "VBQ4", nome:"majestade10", vendas: "3", comissao: "R$: 51,27", bonus: "R$: 0", comissao_total:"R$: 51,27", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "35" }, 
 { codigo: "SSW8", nome:"CHRISMENEZES10", vendas: "82", comissao: "R$: 1368,75", bonus: "R$: 610", comissao_total:"R$: 1978,75", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "108", Setembro: "176", Outubro:"110",ranking: "3" }, 
 { codigo: "3ERF", nome:"alivia10", vendas: "176", comissao: "R$: 2975,29", bonus: "R$: 610", comissao_total:"R$: 3585,29", Abril: "32",Maio: "25", Junho: "1", Julho: "2", Agosto: "37", Setembro: "194", Outubro:"186",ranking: "1" }, 
 { codigo: "OD96", nome:"miihmourao10", vendas: "6", comissao: "R$: 107,05", bonus: "R$: 40", comissao_total:"R$: 147,05", Abril: "0",Maio: "18", Junho: "16", Julho: "63", Agosto: "16", Setembro: "5", Outubro:"3",ranking: "22" }, 
 { codigo: "1576", nome:"peace10", vendas: "5", comissao: "R$: 85,46", bonus: "R$: 40", comissao_total:"R$: 125,46", Abril: "1",Maio: "15", Junho: "4", Julho: "8", Agosto: "1", Setembro: "0", Outubro:"1",ranking: "24" }, 
 { codigo: "AS61", nome:"manoelarosa10", vendas: "91", comissao: "R$: 1559,79", bonus: "R$: 610", comissao_total:"R$: 2169,79", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "45", Setembro: "56", Outubro:"29",ranking: "2" }, 
 { codigo: "HT7F", nome:"JUHVITAMINA10", vendas: "3", comissao: "R$: 51,27", bonus: "R$: 0", comissao_total:"R$: 51,27", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"1",ranking: "35" }, 
 { codigo: "UIL2", nome:"beautyrayy10", vendas: "4", comissao: "R$: 68,36", bonus: "R$: 0", comissao_total:"R$: 68,36", Abril: "0",Maio: "0", Junho: "2", Julho: "7", Agosto: "3", Setembro: "4", Outubro:"3",ranking: "31" }, 
 { codigo: "EU3Z", nome:"obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "ICT8", nome:"priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "3",Maio: "0", Junho: "1", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "DRJI", nome:"achadinhos10", vendas: "2", comissao: "R$: 24,38", bonus: "R$: 0", comissao_total:"R$: 24,38", Abril: "0",Maio: "2", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "PI7C", nome:"promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "1",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "OQT9", nome:"adoramospromocao10", vendas: "1", comissao: "R$: 21,59", bonus: "R$: 0", comissao_total:"R$: 21,59", Abril: "7",Maio: "0", Junho: "1", Julho: "26", Agosto: "10", Setembro: "2", Outubro:"4",ranking: "50" }, 
 { codigo: "62FP", nome:"suellem10", vendas: "33", comissao: "R$: 558,71", bonus: "R$: 260", comissao_total:"R$: 818,71", Abril: "0",Maio: "22", Junho: "13", Julho: "9", Agosto: "5", Setembro: "19", Outubro:"26",ranking: "9" }, 
 { codigo: "FSVS", nome:"PRISCILAROLLO10", vendas: "3", comissao: "R$: 67,56", bonus: "R$: 0", comissao_total:"R$: 67,56", Abril: "2",Maio: "27", Junho: "26", Julho: "25", Agosto: "20", Setembro: "4", Outubro:"9",ranking: "35" }, 
 { codigo: "W1DT", nome:"PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "3R4A", nome:"DICABARATEZA10", vendas: "3", comissao: "R$: 51,27", bonus: "R$: 0", comissao_total:"R$: 51,27", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "35" }, 
 { codigo: "DQLM", nome:"OQUEELAAMA10", vendas: "1", comissao: "R$: 7,29", bonus: "R$: 0", comissao_total:"R$: 7,29", Abril: "0",Maio: "0", Junho: "0", Julho: "8", Agosto: "7", Setembro: "7", Outubro:"0",ranking: "50" }, 
 { codigo: "QH6I", nome:"DICASDEBELEZADAGAH10", vendas: "5", comissao: "R$: 85,45", bonus: "R$: 40", comissao_total:"R$: 125,45", Abril: "0",Maio: "0", Junho: "1", Julho: "1", Agosto: "8", Setembro: "1", Outubro:"1",ranking: "24" }, 
 { codigo: "NKRO", nome:"BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "6C39", nome:"MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "SM4U", nome:"DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "FAMX", nome:"MARCELAPAIVA10", vendas: "2", comissao: "R$: 24,38", bonus: "R$: 0", comissao_total:"R$: 24,38", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "22XR", nome:"DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "MVJA", nome:"ESTHERGOMES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "0", Setembro: "1", Outubro:"0",ranking: "58" }, 
 { codigo: "34Y7", nome:"MILENAMARTIL10", vendas: "42", comissao: "R$: 668,82", bonus: "R$: 260", comissao_total:"R$: 928,82", Abril: "0",Maio: "0", Junho: "0", Julho: "22", Agosto: "49", Setembro: "24", Outubro:"12",ranking: "7" }, 
 { codigo: "6R45", nome:"ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "UEK9", nome:"RESANTANA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", Abril: "0",Maio: "0", Junho: "0", Julho: "4", Agosto: "4", Setembro: "2", Outubro:"0",ranking: "50" }, 
 { codigo: "X9KE", nome:"ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "7BU7", nome:"BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "29", Agosto: "12", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "LL54", nome:"DICASDANESSA10", vendas: "78", comissao: "R$: 1369,08", bonus: "R$: 610", comissao_total:"R$: 1979,08", Abril: "0",Maio: "0", Junho: "0", Julho: "100", Agosto: "394", Setembro: "295", Outubro:"162",ranking: "5" }, 
 { codigo: "HG44", nome:"BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "E5ZJ", nome:"LUIZACORTI10", vendas: "5", comissao: "R$: 85,45", bonus: "R$: 40", comissao_total:"R$: 125,45", Abril: "0",Maio: "0", Junho: "0", Julho: "2", Agosto: "3", Setembro: "0", Outubro:"0",ranking: "24" }, 
 { codigo: "V4C8", nome:"COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "JHDE", nome:"BLOGDICAJU10", vendas: "4", comissao: "R$: 38,96", bonus: "R$: 0", comissao_total:"R$: 38,96", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "6", Outubro:"1",ranking: "31" }, 
 { codigo: "FEL1", nome:"DICASBYDEIA10", vendas: "4", comissao: "R$: 68,36", bonus: "R$: 0", comissao_total:"R$: 68,36", Abril: "0",Maio: "0", Junho: "0", Julho: "3", Agosto: "9", Setembro: "1", Outubro:"1",ranking: "31" }, 
 { codigo: "ZW2O", nome:"BLOOGUERICES10", vendas: "7", comissao: "R$: 113,43", bonus: "R$: 40", comissao_total:"R$: 153,43", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "2", Outubro:"2",ranking: "20" }, 
 { codigo: "KFCB", nome:"RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "CNBP", nome:"EMYLOHANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"0",ranking: "58" }, 
 { codigo: "HL8B", nome:"JULIADEOLINDO10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "50" }, 
 { codigo: "1X5G", nome:"OHLIVIAMARIA10", vendas: "7", comissao: "R$: 119,64", bonus: "R$: 40", comissao_total:"R$: 159,64", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "20" }, 
 { codigo: "TKIZ", nome:"MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "Z1JU", nome:"VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "MAQS", nome:"GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "3", Setembro: "3", Outubro:"0",ranking: "42" }, 
 { codigo: "3LDV", nome:"EVOLUIDAPELE10", vendas: "11", comissao: "R$: 188", bonus: "R$: 140", comissao_total:"R$: 328", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "35", Setembro: "16", Outubro:"0",ranking: "13" }, 
 { codigo: "H5OX", nome:"JESSICANATALIA10", vendas: "11", comissao: "R$: 178,2", bonus: "R$: 140", comissao_total:"R$: 318,2", Abril: "0",Maio: "0", Junho: "0", Julho: "1", Agosto: "7", Setembro: "22", Outubro:"9",ranking: "13" }, 
 { codigo: "3W4Z", nome:"TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "BW6M", nome:"DICASDAHAI10", vendas: "4", comissao: "R$: 68,36", bonus: "R$: 0", comissao_total:"R$: 68,36", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "0", Outubro:"0",ranking: "31" }, 
 { codigo: "DFLW", nome:"CUIDADOSDAISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "10", Setembro: "7", Outubro:"0",ranking: "58" }, 
 { codigo: "KQ67", nome:"PRISCILALIROW10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "13", Setembro: "2", Outubro:"1",ranking: "58" }, 
 { codigo: "M1V3", nome:"JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "DAGE", nome:"THATS10", vendas: "19", comissao: "R$: 295,33", bonus: "R$: 140", comissao_total:"R$: 435,33", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "27", Setembro: "20", Outubro:"20",ranking: "11" }, 
 { codigo: "HC8W", nome:"BYLUANASANTOS10", vendas: "22", comissao: "R$: 376", bonus: "R$: 260", comissao_total:"R$: 636", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "10" }, 
 { codigo: "X6Z1", nome:"ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "17EX", nome:"BIAGIFFONI10", vendas: "81", comissao: "R$: 1373,78", bonus: "R$: 610", comissao_total:"R$: 1983,78", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "4" }, 
 { codigo: "EJ12", nome:"DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "8LXB", nome:"LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "OUZ4", nome:"TAIZELIMA10", vendas: "3", comissao: "R$: 55,78", bonus: "R$: 0", comissao_total:"R$: 55,78", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "35" }, 
 { codigo: "L4BE", nome:"TANARAFP10", vendas: "1", comissao: "R$: 7,29", bonus: "R$: 0", comissao_total:"R$: 7,29", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",ranking: "50" }, 
 { codigo: "OB81", nome:"GARIMPONLINE10", vendas: "2", comissao: "R$: 14,58", bonus: "R$: 0", comissao_total:"R$: 14,58", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "YP1F", nome:"VICRUZS10", vendas: "5", comissao: "R$: 75,65", bonus: "R$: 40", comissao_total:"R$: 115,65", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "24" }, 
 { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "AUQ7", nome:"MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "NKZ9", nome:"MALUMEDINA10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "0", Outubro:"0",ranking: "50" }, 
 { codigo: "FPJX", nome:"NUTRIMILAALMEIDA10", vendas: "8", comissao: "R$: 141,24", bonus: "R$: 40", comissao_total:"R$: 181,24", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "5", Setembro: "4", Outubro:"12",ranking: "18" }, 
 { codigo: "LRZU", nome:"BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "1", Setembro: "1", Outubro:"0",ranking: "58" }, 
 { codigo: "6OS6", nome:"DICASCOMABRU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "2", Setembro: "8", Outubro:"0",ranking: "58" }, 
 { codigo: "VMVN", nome:"THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "58" }, 
 { codigo: "75IQ", nome:"JOYCECUSTODIO10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "5", Outubro:"0",ranking: "42" }, 
 { codigo: "P1BK", nome:"RAFAELAULLA10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"1",ranking: "50" }, 
 { codigo: "UEYY", nome:"BRUNOCASTILHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "7", Setembro: "3", Outubro:"3",ranking: "58" }, 
 { codigo: "118X", nome:"ISABELAFERRER10", vendas: "3", comissao: "R$: 39,67", bonus: "R$: 0", comissao_total:"R$: 39,67", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"4",ranking: "35" }, 
 { codigo: "LOCP", nome:"SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "IA49", nome:"CAMILASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "2", Outubro:"0",ranking: "58" }, 
 { codigo: "TRFZ", nome:"ALINEFUNGACS10", vendas: "3", comissao: "R$: 51,27", bonus: "R$: 0", comissao_total:"R$: 51,27", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "35" }, 
 { codigo: "ZHY6", nome:"LARIXDIAS10", vendas: "5", comissao: "R$: 85,45", bonus: "R$: 40", comissao_total:"R$: 125,45", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "24" }, 
 { codigo: "L7Y7", nome:"IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "3", Outubro:"0",ranking: "58" }, 
 { codigo: "6PQA", nome:"LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "R1M9", nome:"ACHADINHOSDAMI10", vendas: "10", comissao: "R$: 170,91", bonus: "R$: 140", comissao_total:"R$: 310,91", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "1", Outubro:"9",ranking: "15" }, 
 { codigo: "YWVX", nome:"BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "9LHY", nome:"SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "HXRJ", nome:"CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "X1RF", nome:"DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "Y232", nome:"DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "G7MK", nome:"ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "62BK", nome:"DOMENICA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "ZSX5", nome:"BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "6SNV", nome:"GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "58" }, 
 { codigo: "17LQ", nome:"NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "UYZR", nome:"PAMELAARGIBAY10", vendas: "12", comissao: "R$: 116,88", bonus: "R$: 140", comissao_total:"R$: 256,88", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "12" }, 
 { codigo: "RPAZ", nome:"ROTINADEPROMOS10", vendas: "6", comissao: "R$: 102,55", bonus: "R$: 40", comissao_total:"R$: 142,55", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",ranking: "22" }, 
 { codigo: "FQKF", nome:"VICIEINAPROMO10", vendas: "5", comissao: "R$: 80,16", bonus: "R$: 40", comissao_total:"R$: 120,16", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",ranking: "24" }, 
 { codigo: "NC2O", nome:"SUTTICAMILA10", vendas: "8", comissao: "R$: 141,24", bonus: "R$: 40", comissao_total:"R$: 181,24", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"14",ranking: "18" }, 
 { codigo: "Y8YV", nome:"MAIRAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"1",ranking: "58" }, 
 { codigo: "BTFS", nome:"MILAMUNIZ10", vendas: "10", comissao: "R$: 170,91", bonus: "R$: 140", comissao_total:"R$: 310,91", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "15" }, 
 { codigo: "Z8JJ", nome:"PROMOCAOSO10", vendas: "10", comissao: "R$: 175,41", bonus: "R$: 140", comissao_total:"R$: 315,41", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"2",ranking: "15" }, 
 { codigo: "LT1I", nome:"CAPOBIANNCO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "AGK6", nome:"KELLYSILVA10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "Y61F", nome:"RENATAALBERT10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "FIWX", nome:"THAISCARMO10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "50" }, 
 { codigo: "PUCP", nome:"ACHADINHOSYOU10", vendas: "62", comissao: "R$: 1015,15", bonus: "R$: 610", comissao_total:"R$: 1625,15", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"3",ranking: "6" }, 
 { codigo: "MRKT", nome:"SOLDAPRAIA10", vendas: "2", comissao: "R$: 34,18", bonus: "R$: 0", comissao_total:"R$: 34,18", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "42" }, 
 { codigo: "GEQM", nome:"MICHELLYARRUDA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "Z4RI", nome:"JULIAMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "OIBG", nome:"FERNANDALONGO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "1XFM", nome:"CHRISEVERT10", vendas: "6", comissao: "R$: 102,54", bonus: "R$: 40", comissao_total:"R$: 142,54", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "22" }, 
 { codigo: "89B9", nome:"JULYANACALENTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "PRJF", nome:"ANAPAULA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "13RO", nome:"ANESOUZA10", vendas: "1", comissao: "R$: 17,09", bonus: "R$: 0", comissao_total:"R$: 17,09", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "50" }, 
 { codigo: "UFTC", nome:"JOSIELY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "93RS", nome:"FABIANACOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", Abril: "0",Maio: "0", Junho: "0", Julho: "0", Agosto: "0", Setembro: "0", Outubro:"0",ranking: "58" }, 
 { codigo: "6QVX", nome:"AMANDAZAFRA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "58" }, 
 { codigo: "X365", nome:"CURTEPROMO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "58" }, 
 { codigo: "ZXJN", nome:"NEGRAVI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "58" }, 


 
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
