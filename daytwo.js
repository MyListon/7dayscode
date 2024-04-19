// Função para pedir uma pergunta e retornar a resposta
function perguntarPergunta(pergunta) {
    return prompt(pergunta);
}

// Função para exibir a mensagem final e perguntar se a pessoa gosta de estudar a linguagem
function exibirMensagem(nome, idade, linguagem) {
    console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
    var resposta = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));
    if (resposta === 1) {
        console.log("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (resposta === 2) {
        console.log("Ahh que pena... Já tentou aprender outras linguagens?");
    } else {
        console.log("Resposta inválida. Por favor, responda com o número 1 para SIM ou 2 para NÃO.");
    }
}

// Perguntar o nome, idade e linguagem de programação
var nome = perguntarPergunta("Qual o seu nome?");
var idade = perguntarPergunta("Quantos anos você tem?");
var linguagem = perguntarPergunta("Qual linguagem de programação você está estudando?");

// Exibir a mensagem final e perguntar se gosta de estudar a linguagem
exibirMensagem(nome, idade, linguagem);