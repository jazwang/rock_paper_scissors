const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const startBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        startBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";  //reset animation
            });
        });

        

        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function() {
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;

                const computerOption = Math.floor(Math.random() * 3);
                const computerChoice =computerOptions[computerOption];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
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
        if(playerChoice === computerChoice)
        {
            winner.textContent = "Tie!";
        }
        else if (playerChoice === 'rock')
        {
            if (computerChoice === 'paper')
            {
                winner.textContent = "Computer wins!";
                cScore ++;
            }
            else
            {
                winner.textContent = "You win!";
                pScore ++;
            }
            return;
        }
        else if (playerChoice === 'paper')
        {
            if (computerChoice === 'scissors')
            {
                winner.textContent = "Computer wins!";
                cScore ++;
            }
            else
            {
                winner.textContent = "You win!";
                pScore ++;
            }
        }
        else
        {
            if (computerChoice === 'rock')
            {
                winner.textContent = "Computer wins!";
                cScore++;
            }
            else
            {
                winner.textContent = "You win!";
                pScore++;
            }
        }
        updateScore();

    }


    startGame();
    playMatch();
}

game();