// Dados simulados de vendas
const data = [
  { codigo: "QXTD", nome: "anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "T5WZ", nome: "elaine10", vendas: "17", comissao: "R$: 376,46", bonus: "R$: 70", comissao_total:"R$: 446,46", ranking: "10" }, 
  { codigo: "AVE7", nome: "dicasdaclarinha10", vendas: "21", comissao: "R$: 453,58", bonus: "R$: 190", comissao_total:"R$: 643,58", ranking: "7" }, 
  { codigo: "VBQ4", nome: "majestade10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "SSW8", nome: "CHRISMENEZES10", vendas: "176", comissao: "R$: 3807,99", bonus: "R$: 540", comissao_total:"R$: 4347,99", ranking: "3" }, 
  { codigo: "3ERF", nome: "alivia10", vendas: "195", comissao: "R$: 4215,78", bonus: "R$: 540", comissao_total:"R$: 4755,78", ranking: "2" }, 
  { codigo: "OD96", nome: "miihmourao10", vendas: "5", comissao: "R$: 108", bonus: "R$: 20", comissao_total:"R$: 128", ranking: "16" }, 
  { codigo: "1576", nome: "peace10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "AS61", nome: "manoelarosa10", vendas: "56", comissao: "R$: 1209,54", bonus: "R$: 540", comissao_total:"R$: 1749,54", ranking: "4" }, 
  { codigo: "HT7F", nome: "JUHVITAMINA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "UIL2", nome: "beautyrayy10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", ranking: "19" }, 
  { codigo: "EU3Z", nome: "obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ICT8", nome: "priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DRJI", nome: "achadinhos10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "PI7C", nome: "promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "OQT9", nome: "adoramospromocao10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "62FP", nome: "suellem10", vendas: "20", comissao: "R$: 434,4", bonus: "R$: 190", comissao_total:"R$: 624,4", ranking: "8" }, 
  { codigo: "FSVS", nome: "PRISCILAROLLO10", vendas: "4", comissao: "R$: 79,29", bonus: "R$: 0", comissao_total:"R$: 79,29", ranking: "19" }, 
  { codigo: "W1DT", nome: "PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "3R4A", nome: "DICABARATEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DQLM", nome: "OQUEELAAMA10", vendas: "7", comissao: "R$: 155,98", bonus: "R$: 20", comissao_total:"R$: 175,98", ranking: "13" }, 
  { codigo: "QH6I", nome: "DICASDEBELEZADAGAH10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "NKRO", nome: "BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "6C39", nome: "MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "SM4U", nome: "DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "FAMX", nome: "MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "22XR", nome: "DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "MVJA", nome: "ESTHERGOMES10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "34Y7", nome: "MILENAMARTIL10", vendas: "24", comissao: "R$: 520,79", bonus: "R$: 190", comissao_total:"R$: 710,79", ranking: "5" }, 
  { codigo: "6R45", nome: "ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "UEK9", nome: "RESANTANA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "X9KE", nome: "ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "7BU7", nome: "BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "LL54", nome: "DICASDANESSA10", vendas: "295", comissao: "R$: 6404,69", bonus: "R$: 540", comissao_total:"R$: 6944,69", ranking: "1" }, 
  { codigo: "HG44", nome: "BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "E5ZJ", nome: "LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "V4C8", nome: "COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "JHDE", nome: "BLOGDICAJU10", vendas: "6", comissao: "R$: 129,6", bonus: "R$: 20", comissao_total:"R$: 149,6", ranking: "15" }, 
  { codigo: "FEL1", nome: "DICASBYDEIA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "ZW2O", nome: "BLOOGUERICES10", vendas: "2", comissao: "R$: 45,59", bonus: "R$: 0", comissao_total:"R$: 45,59", ranking: "25" }, 
  { codigo: "KFCB", nome: "RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "CNBP", nome: "EMYLOHANA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "HL8B", nome: "JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "1X5G", nome: "OHLIVIAMARIA10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "TKIZ", nome: "MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "Z1JU", nome: "VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "MAQS", nome: "GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "NJ5J", nome: "MELHORACHADINHOONLINE10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "3LDV", nome: "EVOLUIDAPELE10", vendas: "16", comissao: "R$: 345,6", bonus: "R$: 70", comissao_total:"R$: 415,6", ranking: "11" }, 
  { codigo: "H5OX", nome: "JESSICANATALIA10", vendas: "22", comissao: "R$: 475,2", bonus: "R$: 190", comissao_total:"R$: 665,2", ranking: "6" }, 
  { codigo: "3W4Z", nome: "TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "BW6M", nome: "DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DFLW", nome: "CUIDADOSDAISA10", vendas: "7", comissao: "R$: 153,59", bonus: "R$: 20", comissao_total:"R$: 173,59", ranking: "13" }, 
  { codigo: "KQ67", nome: "PRISCILALIROW10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "M1V3", nome: "JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "DAGE", nome: "THATS10", vendas: "20", comissao: "R$: 434,39", bonus: "R$: 190", comissao_total:"R$: 624,39", ranking: "8" }, 
  { codigo: "HC8W", nome: "BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "X6Z1", nome: "ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "17EX", nome: "BIAGIFFONI10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "EJ12", nome: "DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "8LXB", nome: "LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "OUZ4", nome: "TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "L4BE", nome: "TANARAFP10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "OB81", nome: "GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "YP1F", nome: "VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "GHTR", nome: "VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "AUQ7", nome: "MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "NKZ9", nome: "MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "FPJX", nome: "NUTRIMILAALMEIDA10", vendas: "5", comissao: "R$: 112,78", bonus: "R$: 20", comissao_total:"R$: 132,78", ranking: "16" }, 
  { codigo: "LRZU", nome: "BRENDOLETA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "6OS6", nome: "DICASCOMABRU10", vendas: "8", comissao: "R$: 172,8", bonus: "R$: 20", comissao_total:"R$: 192,8", ranking: "12" }, 
  { codigo: "VMVN", nome: "THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "75IQ", nome: "JOYCECUSTODIO10", vendas: "5", comissao: "R$: 142,28", bonus: "R$: 20", comissao_total:"R$: 162,28", ranking: "16" }, 
  { codigo: "P1BK", nome: "RAFAELAULLA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "UEYY", nome: "BRUNOCASTILHO10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "118X", nome: "ISABELAFERRER10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "LOCP", nome: "SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "IA49", nome: "CAMILASANTOS10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "25" }, 
  { codigo: "TRFZ", nome: "ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ZHY6", nome: "LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "L7Y7", nome: "IZABARREIROS10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "21" }, 
  { codigo: "6PQA", nome: "LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "R1M9", nome: "ACHADINHOSDAMI10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "32" }, 
  { codigo: "YWVX", nome: "BELLAEISABELLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "9LHY", nome: "SAMIRESCOSTA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "HXRJ", nome: "CARLASERVULO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "X1RF", nome: "DENISERAMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "Y232", nome: "DEBORAFISTAROL10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "G7MK", nome: "ANINHAPELOSINI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "62BK", nome: "DOMENICAVANKERCKHOVE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "ZSX5", nome: "BIABENETTE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "6SNV", nome: "GABRIELAFRAGOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "17LQ", nome: "NATALIAROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 
  { codigo: "UYZR", nome: "PAMELAARGIBAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "39" }, 

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
