// Objeto para armazenar as categorias de alimentos
const categorias = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: [] // Categoria para alimentos que não se encaixam em nenhuma das categorias pré-definidas
};

// Função para adicionar um alimento à lista de compras
function adicionarNaLista(alimento, categoria) {
    categoria = categoria.toLowerCase(); // Convertendo a categoria para minúsculas
    if (categorias.hasOwnProperty(categoria)) {
        categorias[categoria].push(alimento);
    } else {
        categorias.outros.push(alimento);
    }
}

// Função para exibir a lista de compras
function exibirLista() {
    console.log("Lista de compras:");
    for (const categoria in categorias) {
        if (categorias[categoria].length > 0) {
            console.log(`    ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${categorias[categoria].join(', ')}`);
        }
    }
}

// Função principal
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntar() {
        readline.question('Deseja adicionar um alimento à lista de compras? (sim/não): ', resposta => {
            if (resposta.toLowerCase() === 'sim') {
                readline.question('Qual alimento deseja adicionar? ', alimento => {
                    readline.question('Em qual categoria se encaixa? (frutas, laticínios, congelados, doces, outros): ', categoria => {
                        adicionarNaLista(alimento, categoria);
                        perguntar(); // Perguntar novamente
                    });
                });
            } else if (resposta.toLowerCase() === 'não') {
                exibirLista(); // Exibir a lista final
                readline.close();
            } else {
                console.log('Resposta inválida. Por favor, responda com "sim" ou "não".');
                perguntar(); // Perguntar novamente
            }
        });
    }

    perguntar(); // Iniciar o processo de perguntas
}

main(); // Iniciar o programa
