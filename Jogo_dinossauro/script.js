const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
var isJumping = false;
let dinoPosition = 0;

function handleKeyup(event) {
    let keyPressed = event.keyCode;
    if (keyPressed === 32) {
        if (!isJumping) {
            jump();
        }
    }
}


function jump() {
    isJumping = true;
    //função para executar o codigo dentro de um certo intervalo definido
    let upInterval = setInterval(() => {
        if (dinoPosition >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (dinoPosition <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    dinoPosition -= 20;
                    dino.style.bottom = dinoPosition + 'px';
                }
            }, 20);
        } else {
            dinoPosition += 20;
            dino.style.bottom = dinoPosition + 'px';
        }
    }, 20);
};

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    if(randomTime < 1000) randomTime = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && dinoPosition < 60) {
            //regiao onde o cacto encosta no dinossauro, ou seja, game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Game Over </h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
};

document.addEventListener('keyup', handleKeyup);


createCactus();