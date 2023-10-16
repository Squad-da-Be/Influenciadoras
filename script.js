// Dados simulados de vendas
const data = [
  { codigo: "QXTD", nome:"anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "T5WZ", nome:"elaine10", vendas: "11", comissao: "R$: 242,37", bonus: "R$: 70", comissao_total:"R$: 312,37", ranking: "6" }, 
  { codigo: "AVE7", nome:"dicasdaclarinha10", vendas: "38", comissao: "R$: 846,86", bonus: "R$: 190", comissao_total:"R$: 1036,86", ranking: "4" }, 
  { codigo: "VBQ4", nome:"majestade10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "SSW8", nome:"CHRISMENEZES10", vendas: "64", comissao: "R$: 1366,36", bonus: "R$: 540", comissao_total:"R$: 1906,36", ranking: "3" }, 
  { codigo: "3ERF", nome:"alivia10", vendas: "80", comissao: "R$: 1749,52", bonus: "R$: 540", comissao_total:"R$: 2289,52", ranking: "2" }, 
  { codigo: "OD96", nome:"miihmourao10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "1576", nome:"peace10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "AS61", nome:"manoelarosa10", vendas: "10", comissao: "R$: 215,99", bonus: "R$: 70", comissao_total:"R$: 285,99", ranking: "7" }, 
  { codigo: "HT7F", nome:"JUHVITAMINA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "16" }, 
  { codigo: "UIL2", nome:"beautyrayy10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "12" }, 
  { codigo: "EU3Z", nome:"obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "ICT8", nome:"priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "DRJI", nome:"achadinhos10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "PI7C", nome:"promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "OQT9", nome:"adoramospromocao10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
  { codigo: "62FP", nome:"suellem10", vendas: "8", comissao: "R$: 172,8", bonus: "R$: 20", comissao_total:"R$: 192,8", ranking: "8" }, 
  { codigo: "FSVS", nome:"PRISCILAROLLO10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "12" }, 
  { codigo: "W1DT", nome:"PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "3R4A", nome:"DICABARATEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "DQLM", nome:"OQUEELAAMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "QH6I", nome:"DICASDEBELEZADAGAH10", vendas: "1", comissao: "R$: 10,88", bonus: "R$: 0", comissao_total:"R$: 10,88", ranking: "16" }, 
  { codigo: "NKRO", nome:"BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "6C39", nome:"MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "SM4U", nome:"DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "FAMX", nome:"MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "22XR", nome:"DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "MVJA", nome:"ESTHERGOMES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "34Y7", nome:"MILENAMARTIL10", vendas: "7", comissao: "R$: 142,87", bonus: "R$: 20", comissao_total:"R$: 162,87", ranking: "9" }, 
  { codigo: "6R45", nome:"ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "UEK9", nome:"RESANTANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "X9KE", nome:"ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "7BU7", nome:"BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "LL54", nome:"DICASDANESSA10", vendas: "98", comissao: "R$: 2116,7", bonus: "R$: 540", comissao_total:"R$: 2656,7", ranking: "1" }, 
  { codigo: "HG44", nome:"BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "E5ZJ", nome:"LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "V4C8", nome:"COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "JHDE", nome:"BLOGDICAJU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "FEL1", nome:"DICASBYDEIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "ZW2O", nome:"BLOOGUERICES10", vendas: "2", comissao: "R$: 45,59", bonus: "R$: 0", comissao_total:"R$: 45,59", ranking: "14" }, 
  { codigo: "KFCB", nome:"RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "CNBP", nome:"EMYLOHANA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "HL8B", nome:"JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "1X5G", nome:"OHLIVIAMARIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "TKIZ", nome:"MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "Z1JU", nome:"VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "MAQS", nome:"GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "NJ5J", nome:"MELHORACHADINHOONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "3LDV", nome:"EVOLUIDAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "H5OX", nome:"JESSICANATALIA10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", ranking: "11" }, 
  { codigo: "3W4Z", nome:"TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "BW6M", nome:"DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "DFLW", nome:"CUIDADOSDAISA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "KQ67", nome:"PRISCILALIROW10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "M1V3", nome:"JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "DAGE", nome:"THATS10", vendas: "15", comissao: "R$: 326,39", bonus: "R$: 70", comissao_total:"R$: 396,39", ranking: "5" }, 
  { codigo: "HC8W", nome:"BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "X6Z1", nome:"ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "17EX", nome:"BIAGIFFONI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "EJ12", nome:"DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "8LXB", nome:"LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "OUZ4", nome:"TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "L4BE", nome:"TANARAFP10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "16" }, 
  { codigo: "OB81", nome:"GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "YP1F", nome:"VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "GHTR", nome:"VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "AUQ7", nome:"MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "NKZ9", nome:"MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "FPJX", nome:"NUTRIMILAALMEIDA10", vendas: "7", comissao: "R$: 155,98", bonus: "R$: 20", comissao_total:"R$: 175,98", ranking: "9" }, 
  { codigo: "LRZU", nome:"BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "6OS6", nome:"DICASCOMABRU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "VMVN", nome:"THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "75IQ", nome:"JOYCECUSTODIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "P1BK", nome:"RAFAELAULLA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "16" }, 
  { codigo: "UEYY", nome:"BRUNOCASTILHO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "118X", nome:"ISABELAFERRER10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "LOCP", nome:"SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "IA49", nome:"CAMILASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "TRFZ", nome:"ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "ZHY6", nome:"LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "L7Y7", nome:"IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "6PQA", nome:"LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "R1M9", nome:"ACHADINHOSDAMI10", vendas: "3", comissao: "R$: 54,08", bonus: "R$: 0", comissao_total:"R$: 54,08", ranking: "12" }, 
  { codigo: "YWVX", nome:"BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "9LHY", nome:"SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "HXRJ", nome:"CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "X1RF", nome:"DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "Y232", nome:"DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "G7MK", nome:"ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "62BK", nome:"DOMENICAVANKERCKHOVE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "ZSX5", nome:"BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "6SNV", nome:"GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "17LQ", nome:"NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "UYZR", nome:"PAMELAARGIBAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 
  { codigo: "RPAZ", nome:"ROTINADEPROMOS10", vendas: "2", comissao: "R$: 41,38", bonus: "R$: 0", comissao_total:"R$: 41,38", ranking: "14" }, 
  { codigo: "FQKF", nome:"VICIEINAPROMO10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
  { codigo: "NC2O", nome:"SUTTICAMILA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "20" }, 

 
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
        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Código não encontrado.</p>";
    }
});
