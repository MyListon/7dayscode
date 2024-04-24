// Função para remover um item da lista de compras
function removerItem(lista, item) {
    const index = lista.indexOf(item);
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(item + " foi removido da lista de compras.");
    } else {
        console.log("Não foi possível encontrar o item dentro da lista!");
    }
}

// Função principal para adicionar itens à lista de compras
function listaDeCompras() {
    const lista = [];
    let adicionar = true;

    while (adicionar) {
        const opcao = prompt("Você deseja adicionar uma comida na lista de compras? (sim/não)");

        if (opcao.toLowerCase() === "sim") {
            const item = prompt("Digite o nome da comida:");
            lista.push(item);
            console.log(item + " foi adicionado à lista de compras.");
        } else if (opcao.toLowerCase() === "não") {
            adicionar = false;
        } else {
            console.log("Opção inválida. Por favor, responda com 'sim' ou 'não'.");
        }

        // Verificar se a lista não está vazia para permitir a remoção de itens
        if (lista.length > 0) {
            const remover = prompt("Você deseja remover algum item da lista de compras? (sim/não)");

            if (remover.toLowerCase() === "sim") {
                console.log("Itens na lista de compras:");
                console.log(lista);
                const itemRemover = prompt("Digite o nome do item que deseja remover:");
                removerItem(lista, itemRemover);
            } else if (remover.toLowerCase() === "não") {
                // Não fazer nada, continuar com o próximo ciclo
            } else {
                console.log("Opção inválida. Por favor, responda com 'sim' ou 'não'.");
            }
        } else {
            console.log("A lista de compras está vazia.");
        }
    }
}

// Executar a função principal
listaDeCompras();
