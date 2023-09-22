// Dados simulados de vendas
const data = [
  { codigo: "QXTD", nome: "anabeltrandicas10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "T5WZ", nome: "elaine10", vendas: "12", comissao: "R$: 263,97", bonus: "R$: 70", comissao_total:"R$: 333,97", ranking: "8" }, 
  { codigo: "AVE7", nome: "dicasdaclarinha10", vendas: "6", comissao: "R$: 129,59", bonus: "R$: 20", comissao_total:"R$: 149,59", ranking: "13" }, 
  { codigo: "VBQ4", nome: "majestade10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "SSW8", nome: "CHRISMENEZES10", vendas: "129", comissao: "R$: 2783,79", bonus: "R$: 540", comissao_total:"R$: 3323,79", ranking: "3" }, 
  { codigo: "3ERF", nome: "alivia10", vendas: "145", comissao: "R$: 3142,94", bonus: "R$: 540", comissao_total:"R$: 3682,94", ranking: "2" }, 
  { codigo: "OD96", nome: "miihmourao10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", ranking: "16" }, 
  { codigo: "1576", nome: "peace10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "AS61", nome: "manoelarosa10", vendas: "47", comissao: "R$: 1015,15", bonus: "R$: 190", comissao_total:"R$: 1205,15", ranking: "4" }, 
  { codigo: "HT7F", nome: "JUHVITAMINA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "UIL2", nome: "beautyrayy10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "18" }, 
  { codigo: "EU3Z", nome: "obatempromo10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "ICT8", nome: "priirubio10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "DRJI", nome: "achadinhos10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "PI7C", nome: "promosualinda10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "OQT9", nome: "adoramospromocao10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "62FP", nome: "suellem10", vendas: "11", comissao: "R$: 237,6", bonus: "R$: 70", comissao_total:"R$: 307,6", ranking: "9" }, 
  { codigo: "FSVS", nome: "PRISCILAROLLO10", vendas: "3", comissao: "R$: 57,69", bonus: "R$: 0", comissao_total:"R$: 57,69", ranking: "18" }, 
  { codigo: "W1DT", nome: "PROMOLOUCAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "3R4A", nome: "DICABARATEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "DQLM", nome: "OQUEELAAMA10", vendas: "7", comissao: "R$: 155,98", bonus: "R$: 20", comissao_total:"R$: 175,98", ranking: "12" }, 
  { codigo: "QH6I", nome: "DICASDEBELEZADAGAH10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "30" }, 
  { codigo: "NKRO", nome: "BRUNABEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "6C39", nome: "MELANDRADE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "SM4U", nome: "DIADEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "FAMX", nome: "MARCELAPAIVA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "22XR", nome: "DICASENTREDICAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "MVJA", nome: "ESTHERGOMES10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "30" }, 
  { codigo: "34Y7", nome: "MILENAMARTIL10", vendas: "19", comissao: "R$: 412,79", bonus: "R$: 70", comissao_total:"R$: 482,79", ranking: "5" }, 
  { codigo: "6R45", nome: "ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "UEK9", nome: "RESANTANA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "X9KE", nome: "ACHADOSDEPRECINHOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "7BU7", nome: "BIALOU10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "LL54", nome: "DICASDANESSA10", vendas: "223", comissao: "R$: 4849,57", bonus: "R$: 540", comissao_total:"R$: 5389,57", ranking: "1" }, 
  { codigo: "HG44", nome: "BLOGDABELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "E5ZJ", nome: "LUIZACORTI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "V4C8", nome: "COISASDATAY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "JHDE", nome: "BLOGDICAJU10", vendas: "4", comissao: "R$: 86,4", bonus: "R$: 0", comissao_total:"R$: 86,4", ranking: "16" }, 
  { codigo: "FEL1", nome: "DICASBYDEIA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "ZW2O", nome: "BLOOGUERICES10", vendas: "2", comissao: "R$: 45,59", bonus: "R$: 0", comissao_total:"R$: 45,59", ranking: "21" }, 
  { codigo: "KFCB", nome: "RICHELEMELO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "CNBP", nome: "EMYLOHANA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "30" }, 
  { codigo: "HL8B", nome: "JULIADEOLINDO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "1X5G", nome: "OHLIVIAMARIA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "TKIZ", nome: "MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "Z1JU", nome: "VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "MAQS", nome: "GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "NJ5J", nome: "MELHORACHADINHOONLINE10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "3LDV", nome: "EVOLUIDAPELE10", vendas: "11", comissao: "R$: 237,6", bonus: "R$: 70", comissao_total:"R$: 307,6", ranking: "9" }, 
  { codigo: "H5OX", nome: "JESSICANATALIA10", vendas: "19", comissao: "R$: 410,4", bonus: "R$: 70", comissao_total:"R$: 480,4", ranking: "5" }, 
  { codigo: "3W4Z", nome: "TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "BW6M", nome: "DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "DFLW", nome: "CUIDADOSDAISA10", vendas: "5", comissao: "R$: 110,39", bonus: "R$: 20", comissao_total:"R$: 130,39", ranking: "14" }, 
  { codigo: "KQ67", nome: "PRISCILALIROW10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "30" }, 
  { codigo: "M1V3", nome: "JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "DAGE", nome: "THATS10", vendas: "13", comissao: "R$: 283,19", bonus: "R$: 70", comissao_total:"R$: 353,19", ranking: "7" }, 
  { codigo: "HC8W", nome: "BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "X6Z1", nome: "ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "17EX", nome: "BIAGIFFONI10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "18" }, 
  { codigo: "EJ12", nome: "DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "8LXB", nome: "LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "OUZ4", nome: "TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "L4BE", nome: "TANARAFP10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "30" }, 
  { codigo: "OB81", nome: "GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "YP1F", nome: "VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "GHTR", nome: "VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "AUQ7", nome: "MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "NKZ9", nome: "MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "FPJX", nome: "NUTRIMILAALMEIDA10", vendas: "5", comissao: "R$: 112,78", bonus: "R$: 20", comissao_total:"R$: 132,78", ranking: "14" }, 
  { codigo: "LRZU", nome: "BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "6OS6", nome: "DICASCOMABRU10", vendas: "8", comissao: "R$: 172,8", bonus: "R$: 20", comissao_total:"R$: 192,8", ranking: "11" }, 
  { codigo: "VMVN", nome: "THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "75IQ", nome: "JOYCECUSTODIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "P1BK", nome: "RAFAELAULLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "UEYY", nome: "BRUNOCASTILHO10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "118X", nome: "ISABELAFERRER10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "LOCP", nome: "SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "IA49", nome: "CAMILASANTOS10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "21" }, 
  { codigo: "TRFZ", nome: "ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "ZHY6", nome: "LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "L7Y7", nome: "IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 
  { codigo: "6PQA", nome: "LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "35" }, 

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
