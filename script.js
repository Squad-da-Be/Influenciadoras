// Dados simulados de vendas
const data = [
    { codigo: "1X5G", nome: "OHLIVIAMARIA10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "21" }, 
    { codigo: "TKIZ", nome: "MAISDEBELEZA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "Z1JU", nome: "VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "MAQS", nome: "GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "NJ5J", nome: "MELHORACHADINHOONLINE10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
    { codigo: "3LDV", nome: "EVOLUIDAPELE10", vendas: "5", comissao: "R$: 108", bonus: "R$: 20", comissao_total:"R$: 128", ranking: "10" }, 
    { codigo: "H5OX", nome: "JESSICANATALIA10", vendas: "14", comissao: "R$: 302,4", bonus: "R$: 70", comissao_total:"R$: 372,4", ranking: "5" }, 
    { codigo: "3W4Z", nome: "TIPSBYMAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "BW6M", nome: "DICASDAHAI10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "DFLW", nome: "CUIDADOSDAISA10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "11" }, 
    { codigo: "KQ67", nome: "PRISCILALIROW10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "21" }, 
    { codigo: "M1V3", nome: "JULIALANDIM10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "DAGE", nome: "THATS10", vendas: "6", comissao: "R$: 129,6", bonus: "R$: 20", comissao_total:"R$: 149,6", ranking: "9" }, 
    { codigo: "HC8W", nome: "BYLUANASANTOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "X6Z1", nome: "ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "17EX", nome: "BIAGIFFONI10", vendas: "3", comissao: "R$: 64,8", bonus: "R$: 0", comissao_total:"R$: 64,8", ranking: "11" }, 
    { codigo: "EJ12", nome: "DUDAMDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "8LXB", nome: "LULINDAILY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "OUZ4", nome: "TAIZELIMA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "L4BE", nome: "TANARAFP10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "OB81", nome: "GARIMPONLINE10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "YP1F", nome: "VICRUZS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "GHTR", nome: "VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "AUQ7", nome: "MACEDAILYY10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "NKZ9", nome: "MALUMEDINA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "FPJX", nome: "NUTRIMILAALMEIDA10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
    { codigo: "LRZU", nome: "BRENDOLETA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "6OS6", nome: "DICASCOMABRU10", vendas: "8", comissao: "R$: 172,8", bonus: "R$: 20", comissao_total:"R$: 192,8", ranking: "7" }, 
    { codigo: "VMVN", nome: "THAISSIMOESADV10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "75IQ", nome: "JOYCECUSTODIO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "P1BK", nome: "RAFAELAULLA10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "UEYY", nome: "BRUNOCASTILHO10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
    { codigo: "118X", nome: "ISABELAFERRER10", vendas: "2", comissao: "R$: 43,2", bonus: "R$: 0", comissao_total:"R$: 43,2", ranking: "14" }, 
    { codigo: "LOCP", nome: "SNAKEPROMOS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "IA49", nome: "CAMILASANTOS10", vendas: "1", comissao: "R$: 21,6", bonus: "R$: 0", comissao_total:"R$: 21,6", ranking: "21" }, 
    { codigo: "TRFZ", nome: "ALINEFUNGACS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "ZHY6", nome: "LARIXDIAS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "L7Y7", nome: "IZABARREIROS10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 
    { codigo: "6PQA", nome: "LAISVELOSO10", vendas: "0", comissao: "R$: 0", bonus: "R$: 0", comissao_total:"R$: 0", ranking: "31" }, 

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
