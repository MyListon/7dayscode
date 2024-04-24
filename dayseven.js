// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtracao(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicacao(a, b) {
    return a * b;
}

// Função para dividir dois números
function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    } else {
        return a / b;
    }
}

// Função principal para mostrar as opções e executar as operações
function calculadora() {
    let opcao;
    do {
        console.log("Escolha uma opção:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair");
        opcao = parseInt(prompt("Digite o número da opção desejada:"));

        switch (opcao) {
            case 1:
                let num1 = parseFloat(prompt("Digite o primeiro número:"));
                let num2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado da soma:", soma(num1, num2));
                break;
            case 2:
                num1 = parseFloat(prompt("Digite o primeiro número:"));
                num2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado da subtração:", subtracao(num1, num2));
                break;
            case 3:
                num1 = parseFloat(prompt("Digite o primeiro número:"));
                num2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado da multiplicação:", multiplicacao(num1, num2));
                break;
            case 4:
                num1 = parseFloat(prompt("Digite o primeiro número:"));
                num2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado da divisão:", divisao(num1, num2));
                break;
            case 5:
                console.log("Até a próxima!");
                break;
            default:
                console.log("Opção inválida! Por favor, escolha uma opção válida.");
        }
    } while (opcao !== 5);
}

// Chamar a função principal para iniciar a calculadora
calculadora();
