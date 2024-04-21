// Função para gerar um número aleatório entre 0 e 10
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
  }
  
  // Número aleatório entre 0 e 10
  let numeroAdivinhar = gerarNumeroAleatorio();
  
  // Número de tentativas
  let tentativas = 3;
  
  // Loop para as tentativas
  while (tentativas > 0) {
    // Pergunta ao usuário qual número ele deseja chutar
    let chute = parseInt(prompt("Chute um número entre 0 e 10:"));
  
    // Verifica se o chute está correto
    if (chute === numeroAdivinhar) {
      alert("Parabéns! Você acertou o número!");
      break; // Sai do loop se o número for acertado
    } else {
      tentativas--; // Reduz o número de tentativas restantes
      if (tentativas > 0) {
        alert(`Número errado. Você tem mais ${tentativas} tentativa(s)`);
      } else {
        alert(`Número errado. Suas tentativas acabaram. O número era ${numeroAdivinhar}.`);
      }
    }
  }
  