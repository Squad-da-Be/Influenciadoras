// Dados simulados de vendas
const data = [
  { codigo: "QXTD", cupom: "anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "T5WZ", cupom: "elaine10", vendas: "17", comissao: "R$: 376,46", bonus: "R$: 70", comissao_total:"R$: 446,46", ranking: "10" }, 
  { codigo: "AVE7", cupom: "dicasdaclarinha10", vendas: "21", comissao: "R$: 453,58", bonus: "R$: 190", comissao_total:"R$: 643,58", ranking: "7" }, 
  { codigo: "VBQ4", cupom: "majestade10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "SSW8", cupom: "CHRISMENEZES10", vendas: "177", comissao: "R$: 3829,59", bonus: "R$: 540", comissao_total:"R$: 4369,59", ranking: "3" }, 
  { codigo: "3ERF", cupom: "alivia10", vendas: "195", comissao: "R$: 4215,78", bonus: "R$: 540", comissao_total:"R$: 4755,78", ranking: "2" }, 
  { codigo: "OD96", cupom: "miihmourao10", vendas: "5", comissao: "R$: 108", bonus: "R$: 20", comissao_total:"R$: 128", ranking: "16" }, 
  { codigo: "1576", cupom: "peace10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "AS61", cupom: "manoelarosa10", vendas: "56", comissao: "R$: 1209,54", bonus: "R$: 540", comissao_total:"R$: 1749,54", ranking: "4" }, 
  { codigo: "HT7F", cupom: "JUHVITAMINA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "UIL2", cupom: "beautyrayy10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", ranking: "19" }, 
  { codigo: "EU3Z", cupom: "obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ICT8", cupom: "priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DRJI", cupom: "achadinhos10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "PI7C", cupom: "promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "OQT9", cupom: "adoramospromocao10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "62FP", cupom: "suellem10", vendas: "19", comissao: "R$: 410,4", bonus: "R$: 70", comissao_total:"R$: 480,4", ranking: "9" }, 
  { codigo: "FSVS", cupom: "PRISCILAROLLO10", vendas: "4", comissao: "R$: 79,29", bonus: "R$: 0", comissao_total:"R$: 79,29", ranking: "19" }, 
  { codigo: "W1DT", cupom: "PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "3R4A", cupom: "DICABARATEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DQLM", cupom: "OQUEELAAMA10", vendas: "7", comissao: "R$: 155,98", bonus: "R$: 20", comissao_total:"R$: 175,98", ranking: "13" }, 
  { codigo: "QH6I", cupom: "DICASDEBELEZADAGAH10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "NKRO", cupom: "BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "6C39", cupom: "MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "SM4U", cupom: "DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "FAMX", cupom: "MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "22XR", cupom: "DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "MVJA", cupom: "ESTHERGOMES10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "34Y7", cupom: "MILENAMARTIL10", vendas: "24", comissao: "R$: 520,79", bonus: "R$: 190", comissao_total:"R$: 710,79", ranking: "5" }, 
  { codigo: "6R45", cupom: "ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "UEK9", cupom: "RESANTANA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "X9KE", cupom: "ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "7BU7", cupom: "BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "LL54", cupom: "DICASDANESSA10", vendas: "295", comissao: "R$: 6404,69", bonus: "R$: 540", comissao_total:"R$: 6944,69", ranking: "1" }, 
  { codigo: "HG44", cupom: "BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "E5ZJ", cupom: "LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "V4C8", cupom: "COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "JHDE", cupom: "BLOGDICAJU10", vendas: "6", comissao: "R$: 129,6", bonus: "R$: 20", comissao_total:"R$: 149,6", ranking: "15" }, 
  { codigo: "FEL1", cupom: "DICASBYDEIA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "ZW2O", cupom: "BLOOGUERICES10", vendas: "2", comissao: "R$: 45,59", bonus: "R$: 0", comissao_total:"R$: 45,59", ranking: "25" }, 
  { codigo: "KFCB", cupom: "RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "CNBP", cupom: "EMYLOHANA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "HL8B", cupom: "JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "1X5G", cupom: "OHLIVIAMARIA10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "TKIZ", cupom: "MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "Z1JU", cupom: "VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "MAQS", cupom: "GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "NJ5J", cupom: "MELHORACHADINHOONLINE10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "3LDV", cupom: "EVOLUIDAPELE10", vendas: "16", comissao: "R$: 345,6", bonus: "R$: 70", comissao_total:"R$: 415,6", ranking: "11" }, 
  { codigo: "H5OX", cupom: "JESSICANATALIA10", vendas: "22", comissao: "R$: 475,2", bonus: "R$: 190", comissao_total:"R$: 665,2", ranking: "6" }, 
  { codigo: "3W4Z", cupom: "TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "BW6M", cupom: "DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DFLW", cupom: "CUIDADOSDAISA10", vendas: "7", comissao: "R$: 153,59", bonus: "R$: 20", comissao_total:"R$: 173,59", ranking: "13" }, 
  { codigo: "KQ67", cupom: "PRISCILALIROW10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "M1V3", cupom: "JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DAGE", cupom: "THATS10", vendas: "20", comissao: "R$: 434,39", bonus: "R$: 190", comissao_total:"R$: 624,39", ranking: "8" }, 
  { codigo: "HC8W", cupom: "BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "X6Z1", cupom: "ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "17EX", cupom: "BIAGIFFONI10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "EJ12", cupom: "DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "8LXB", cupom: "LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "OUZ4", cupom: "TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "L4BE", cupom: "TANARAFP10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "OB81", cupom: "GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "YP1F", cupom: "VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "GHTR", cupom: "VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "AUQ7", cupom: "MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "NKZ9", cupom: "MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "FPJX", cupom: "NUTRIMILAALMEIDA10", vendas: "5", comissao: "R$: 112,78", bonus: "R$: 20", comissao_total:"R$: 132,78", ranking: "16" }, 
  { codigo: "LRZU", cupom: "BRENDOLETA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "6OS6", cupom: "DICASCOMABRU10", vendas: "8", comissao: "R$: 172,8", bonus: "R$: 20", comissao_total:"R$: 192,8", ranking: "12" }, 
  { codigo: "VMVN", cupom: "THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "75IQ", cupom: "JOYCECUSTODIO10", vendas: "5", comissao: "R$: 142,28", bonus: "R$: 20", comissao_total:"R$: 162,28", ranking: "16" }, 
  { codigo: "P1BK", cupom: "RAFAELAULLA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "UEYY", cupom: "BRUNOCASTILHO10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "118X", cupom: "ISABELAFERRER10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "LOCP", cupom: "SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "IA49", cupom: "CAMILASANTOS10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "TRFZ", cupom: "ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ZHY6", cupom: "LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "L7Y7", cupom: "IZABARREIROS10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "6PQA", cupom: "LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "R1M9", cupom: "ACHADINHOSDAMI10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "YWVX", cupom: "BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "9LHY", cupom: "SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "HXRJ", cupom: "CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "X1RF", cupom: "DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "Y232", cupom: "DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "G7MK", cupom: "ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "62BK", cupom: "DOMENICAVANKERCKHOVE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ZSX5", cupom: "BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "6SNV", cupom: "GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "17LQ", cupom: "NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "UYZR", cupom: "PAMELAARGIBAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "RPAZ", cupom: "ROTINADEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "FQKF", cupom: "VICIEINAPROMO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 

 
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
