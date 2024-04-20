const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log("Bem-vindo ao jogo de escolha de carreira em programação!");

  rl.question("Você quer seguir para área de Front-End ou área de Back-End? (Front-End/Back-End) ", (area) => {
    if (area.toLowerCase() === 'front-end') {
      frontEnd();
    } else if (area.toLowerCase() === 'back-end') {
      backEnd();
    } else {
      console.log("Escolha inválida. Por favor, escolha entre Front-End e Back-End.");
      startGame();
    }
  });
}

function frontEnd() {
  rl.question("Você quer aprender React ou Vue? (React/Vue) ", (framework) => {
    console.log(`Você escolheu aprender ${framework}.`);

    rl.question("Você quer se especializar em Front-End ou se tornar Fullstack? (Especializar/Fullstack) ", (choice) => {
      if (choice.toLowerCase() === 'especializar') {
        console.log("Ótima escolha! Você está se especializando em Front-End.");
      } else if (choice.toLowerCase() === 'fullstack') {
        console.log("Legal! Você está se desenvolvendo para se tornar Fullstack.");
      } else {
        console.log("Escolha inválida. Por favor, escolha entre Especializar e Fullstack.");
      }

      chooseTechnologies();
    });
  });
}

function backEnd() {
  rl.question("Você quer aprender C# ou Java? (C#/Java) ", (language) => {
    console.log(`Você escolheu aprender ${language}.`);

    rl.question("Você quer se especializar em Back-End ou se tornar Fullstack? (Especializar/Fullstack) ", (choice) => {
      if (choice.toLowerCase() === 'especializar') {
        console.log("Ótima escolha! Você está se especializando em Back-End.");
      } else if (choice.toLowerCase() === 'fullstack') {
        console.log("Legal! Você está se desenvolvendo para se tornar Fullstack.");
      } else {
        console.log("Escolha inválida. Por favor, escolha entre Especializar e Fullstack.");
      }

      chooseTechnologies();
    });
  });
}

function chooseTechnologies() {
  rl.question("Quais são as tecnologias nas quais você gostaria de se especializar ou conhecer? (Digite uma tecnologia por vez. Digite 'ok' para finalizar.) ", (technology) => {
    if (technology.toLowerCase() !== 'ok') {
      console.log(`Você inseriu ${technology}.`);

      // Aqui você pode adicionar lógica adicional, como fornecer informações sobre a tecnologia inserida

      chooseTechnologies();
    } else {
      console.log("Ótimo! Você finalizou suas escolhas.");
      rl.close();
    }
  });
}

startGame();
