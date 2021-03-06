const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const palyBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        //Add a eventlistener to the play button
        palyBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')

        hands.forEach( hand => {
            hand.addEventListener('animationend', function(){
                 this.style.animation = '';
            });
        });
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 1000);

                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";
            });
        });
    };

    // Update score 
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Compare choices
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')

        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }
        // Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';          
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }
    startGame();
    playMatch();
};
game();