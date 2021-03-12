const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    // Jogar a partida
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        // Opcoes do computador
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //Escolha do computador
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // Aqui é onde comparamos as mãos

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    // Imagens atualizadas
                    playerHand.src = `./Nova Pasta/${this.textContent}.png`;
                    computerHand.src = `./Nova Pasta/${computerChoice}.png`;
                }, 2000);



                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
        });
    });

    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // Em situação de empate
        if (playerChoice === computerChoice) {
            winner.textContent = "Tudo empatado!";
            return;
        }
        // Nos casos com pedra
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors'){
                winner.textContent = 'O jogador venceu!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'O computador venceu.. :(';
                cScore++;
                updateScore();
                return;
            };
        };
        // Nos casos com papel
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock'){
                winner.textContent = 'O jogador venceu!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'O computador venceu.. :(';
                cScore++;
                updateScore();
                return;
            };
        };
        // Nos casos com tesoura
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper'){
                winner.textContent = 'O jogador venceu!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'O computador venceu.. :(';
                cScore++;
                updateScore();
                return;
            };
        };
    };
    // Chamar as funções internas
    startGame();
    playMatch();
};

// Chamar a função de startar o jogo
game();

