// Dados simulados de vendas
const data = [
    { codigo: "QXTD", nome: "anabeltrandicas10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "T5WZ", nome: "elaine10", vendas: "30", comissao: "R$: 647,97" }, 
    { codigo: "AVE7", nome: "dicasdaclarinha10", vendas: "24", comissao: "R$: 518,376" }, 
    { codigo: "VBQ4", nome: "majestade10", vendas: "2", comissao: "R$: 43,198" }, 
    { codigo: "SSW8", nome: "CHRISMENEZES10", vendas: "96", comissao: "R$: 2087,99399999999" }, 
    { codigo: "3ERF", nome: "alivia10", vendas: "8", comissao: "R$: 172,792" }, 
    { codigo: "OD96", nome: "miihmourao10", vendas: "16", comissao: "R$: 345,583999999999" }, 
    { codigo: "1576", nome: "peace10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "AS61", nome: "manoelarosa10", vendas: "41", comissao: "R$: 885,559" }, 
    { codigo: "ROXJ", nome: "diariobelezaemfoco10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "HT7F", nome: "JUHVITAMINA10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "TUH4", nome: "juh10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "81J2", nome: "achadinhosssgabi10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UIL2", nome: "beautyrayy10", vendas: "3", comissao: "R$: 64,797" }, 
    { codigo: "EU3Z", nome: "obatempromo10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "HLSC", nome: "quebarato10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ICT8", nome: "priirubio10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "LOCH", nome: "deboracarlos10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "L21O", nome: "marjoreserena10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DRJI", nome: "achadinhos10", vendas: "2", comissao: "R$: 43,198" }, 
    { codigo: "FCFQ", nome: "aninhaskin", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "PI7C", nome: "promosualinda10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "I274", nome: "achadosdanessa10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "OQT9", nome: "adoramospromocao10", vendas: "10", comissao: "R$: 215,99" }, 
    { codigo: "62FP", nome: "suellem10", vendas: "5", comissao: "R$: 108" }, 
    { codigo: "4VDN", nome: "isis10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "6YVH", nome: "LARAAKEL10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ASU4", nome: "QUALAPROMODEHOJE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "EY6Z", nome: "ANA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "FSVS", nome: "PRISCILAROLLO10", vendas: "19", comissao: "R$: 431,979999999999" }, 
    { codigo: "W1DT", nome: "PROMOLOUCAS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "3R4A", nome: "DICABARATEZA10", vendas: "2", comissao: "R$: 43,2" }, 
    { codigo: "DQLM", nome: "OQUEELAAMA10", vendas: "7", comissao: "R$: 151,2" }, 
    { codigo: "BXDC", nome: "DICASDAPATHY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "QH6I", nome: "DICASDEBELEZADAGAH10", vendas: "7", comissao: "R$: 151,2" }, 
    { codigo: "NKRO", nome: "BRUNABEAUTY10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "6C39", nome: "MELANDRADE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "SM4U", nome: "DIADEBELEZA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "VMZE", nome: "DICASDATAMI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "FAMX", nome: "MARCELAPAIVA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "22XR", nome: "DICASENTREDICAS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "Q4Z1", nome: "SABRINAPAIM10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "74T5", nome: "TAYSAVILA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "MVJA", nome: "ESTHERGOMES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "34Y7", nome: "MILENAMARTIL10", vendas: "39", comissao: "R$: 853,198" }, 
    { codigo: "9NHS", nome: "ANADAMASCENO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "6R45", nome: "ROTINADEUMAPELE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UEK9", nome: "RESANTANA10", vendas: "4", comissao: "R$: 86,4" }, 
    { codigo: "X9KE", nome: "ACHADOSDEPRECINHOS10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "7BU7", nome: "BIALOU10", vendas: "12", comissao: "R$: 259,2" }, 
    { codigo: "LL54", nome: "DICASDANESSA10", vendas: "369", comissao: "R$: 7996,129" }, 
    { codigo: "HG44", nome: "BLOGDABELEZA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "E5ZJ", nome: "LUIZACORTI10", vendas: "2", comissao: "R$: 43,2" }, 
    { codigo: "VEJG", nome: "ESSANOSSAPELE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UCX7", nome: "BELEZACOMGIO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "V4C8", nome: "COISASDATAY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "JHDE", nome: "BLOGDICAJU10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "FEL1", nome: "DICASBYDEIA10", vendas: "9", comissao: "R$: 194,399999999999" }, 
    { codigo: "XC5T", nome: "METADEAR10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ZW2O", nome: "BLOOGUERICES10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "KFCB", nome: "RICHELEMELO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "GGHB", nome: "LARISSAOLY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ZG8N", nome: "DUDACARVALHO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "JWUE", nome: "NATHBARROS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ED58", nome: "LELESILVA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "CNBP", nome: "EMYLOHANA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "HL8B", nome: "JULIADEOLINDO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8J78", nome: "RITUALSKINCAREARI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "XA6P", nome: "MARIAHMARTINEZ10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "1X5G", nome: "OHLIVIAMARIA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "TKIZ", nome: "MAISDEBELEZA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "Z1JU", nome: "VALERIARODRIGUES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "MAQS", nome: "GAROTAPODEROSA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "NJ5J", nome: "MELHORACHADINHOONLINE10", vendas: "2", comissao: "R$: 43,2" }, 
    { codigo: "3LDV", nome: "EVOLUIDAPELE10", vendas: "33", comissao: "R$: 712,8" }, 
    { codigo: "H5OX", nome: "JESSICANATALIA10", vendas: "7", comissao: "R$: 151,2" }, 
    { codigo: "3W4Z", nome: "TIPSBYMAI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "BW6M", nome: "DICASDAHAI10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "DFLW", nome: "CUIDADOSDAISA10", vendas: "9", comissao: "R$: 194,399999999999" }, 
    { codigo: "KQ67", nome: "PRISCILALIROW10", vendas: "13", comissao: "R$: 280,8" }, 
    { codigo: "M1V3", nome: "JULIALANDIM10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "34CR", nome: "THAIZAOLIVEIRA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DAGE", nome: "THATS10", vendas: "22", comissao: "R$: 475,2" }, 
    { codigo: "HC8W", nome: "BYLUANASANTOS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "X6Z1", nome: "ACHADINHOSDAINDY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "17EX", nome: "BIAGIFFONI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "EJ12", nome: "DUDAMDAILY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8LXB", nome: "LULINDAILY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8Y7O", nome: "GABICAMARGO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "OUZ4", nome: "TAIZELIMA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "L4BE", nome: "TANARAFP10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "OWI7", nome: "KETH10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "JRH2", nome: "VINNI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "9BHQ", nome: "BIANCAIZALBERTI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "NHBR", nome: "INDY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "K98K", nome: "SOFI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "SM2H", nome: "SUBLI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "Z8OW", nome: "", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "THB3", nome: "NATHMOURA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "HK6R", nome: "BEAUTIESANDMAKES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "INQ8", nome: "HANNAKATIELI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "T3GP", nome: "LELEDOGMA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "C8HI", nome: "ACHADOSDALILIGARCIA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DK47", nome: "NICOLERILOS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UBLN", nome: "MARIAZEVEDO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8AI1", nome: "BIFAO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "85DF", nome: "MANUVAGUEIRO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "5JHL", nome: "DRIMARTINS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "MFBO", nome: "RAFABORIN10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "SS4A", nome: "BEMINA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "TEYV", nome: "MANU10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "W91G", nome: "NATIGUITLER10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "5TUD", nome: "JOALVES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "BR7X", nome: "FADABRANQUINHO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "257K", nome: "RHAMI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "1H25", nome: "DICASDEPELES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "PWNL", nome: "DUDADAIER10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "3LUE", nome: "JOSIELYSOUSA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "USIH", nome: "JUSCYNAIRA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "KC68", nome: "THUANYPLAZZI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "SXTO", nome: "NANI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "O7TR", nome: "CAROLA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "QHXK", nome: "NATHSELEPRIM10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "NVN5", nome: "BRUNOALVES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "EIZT", nome: "MARCELA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "YTGW", nome: "LEIDIFELICIO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "EZB1", nome: "LARISOARES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UL3L", nome: "INAEBEATRIZ10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ZE6S", nome: "LIVIAMOLETI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "BFHV", nome: "APOLO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "XFL2", nome: "CAMILLACOSTA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "2FPI", nome: "LARISSACOZER10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "OUPJ", nome: "ALEDIORIO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DTD1", nome: "BIAMARTINEZ10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "1RTE", nome: "MIILENAMISS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "MK13", nome: "KAIQUEALMEIDA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "RTEC", nome: "BRUNACARVALHO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "O5AA", nome: "DAFNEMELO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DRA3", nome: "DEYSEANACLETO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "TPGU", nome: "ALEXANDRE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "GYD3", nome: "SARAHDORNELLES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "55WW", nome: "ALANA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "A5NQ", nome: "GIOVIEIRA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "81LV", nome: "LAURINHA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "DZYO", nome: "CAROLGAMA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "YF99", nome: "MARIARAUJO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "X6K9", nome: "DRINACCARATO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "IQ2V", nome: "LILIVELOSO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "TYG5", nome: "GABIRIBEIRO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ME3S", nome: "MANUCIT10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "VSYK", nome: "ISABINOW10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "M4SK", nome: "LESOARES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "KCT3", nome: "HOLANDEUSO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "A65A", nome: "JULLIACASTRO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "S7FK", nome: "FLAVIANUNES10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "FB6Z", nome: "DICANANET10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "ET1G", nome: "NATACHASOUSA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "IXT2", nome: "LIARAHORIE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "D516", nome: "JULIAFACO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "4W44", nome: "CAMILAMORENA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UKCU", nome: "FABIANALANO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "CMY9", nome: "MARYALMEIDA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "CO6R", nome: "SABRINAMELO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "V287", nome: "CUIDADOSDACAMI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8QQ3", nome: "RAFAELASANTOS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "FVV9", nome: "SKINCAREDEHOJE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "O5KC", nome: "CAROLMONTEIRO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "JK6X", nome: "DICASDALINI10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "PXXM", nome: "NOSSAPELEIMPERFEITA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "1I3B", nome: "RAFATEIXEIRA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "9MAM", nome: "SARAHMONACO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "YGAV", nome: "GABRIELAFERNANDA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "8WDN", nome: "STARSPINK10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "OB81", nome: "GARIMPONLINE10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "YP1F", nome: "VICRUZS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "GHTR", nome: "VAHTORQUATOBEAUTY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "AUQ7", nome: "MACEDAILYY10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "NKZ9", nome: "MALUMEDINA10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "FPJX", nome: "NUTRIMILAALMEIDA10", vendas: "4", comissao: "R$: 86,4" }, 
    { codigo: "LRZU", nome: "BRENDOLETA10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "6OS6", nome: "DICASCOMABRU10", vendas: "1", comissao: "R$: 21,6" }, 
    { codigo: "VMVN", nome: "THAISSIMOESADV10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "75IQ", nome: "JOYCECUSTODIO10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "P1BK", nome: "RAFAELAULLA10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "UEYY", nome: "BRUNOCASTILHO10", vendas: "4", comissao: "R$: 86,4" }, 
    { codigo: "118X", nome: "ISABELAFERRER10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "LOCP", nome: "SNAKEPROMOS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "IA49", nome: "CAMILASANTOS10", vendas: "0", comissao: "R$: 0" }, 
    { codigo: "TRFZ", nome: "ALINEFUNGACS10", vendas: "0", comissao: "R$: 0" }, 
 
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
            <p><strong>Comissão(sem bônus):</strong> ${produto.comissao}</p>

        `;
    } else {
        // Exibindo mensagem se o produto não for encontrado
        resultadoDiv.innerHTML = "<p>Produto não encontrado.</p>";
    }
});

// Função para formatar a data e hora no formato desejado
function formatarDataHora(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}

// Função para atualizar a data e hora da última atualização
function atualizarDataHora() {
    const ultimaAtualizacao = document.getElementById('ultimaAtualizacao');
    const dataHoraAtual = new Date();
    const dataHoraFormatada = formatarDataHora(dataHoraAtual);
    ultimaAtualizacao.textContent = `Última atualização: ${dataHoraFormatada}`;
}

// Atualizar a data e hora a cada minuto (60.000 milissegundos)
atualizarDataHora();
setInterval(atualizarDataHora, 60000);


