document.addEventListener('DOMContentLoaded', () => {
    const mainCharacter = document.getElementById('main-character');
    const submitButton01 = document.getElementById('submit-button-01');
    const submitButton02 = document.getElementById('submit-button-02');
    const submitButton03 = document.getElementById('submit-button-03');
    const submitButton04 = document.getElementById('submit-button-04');
    const submitButton05 = document.getElementById('submit-button-05');
    const cattleInput = document.getElementById('cattle-input');
    const investmentInput = document.getElementById('investment-input');
    const oldInput = document.getElementById('old-input');
    const timeInput = document.getElementById('time-input');

    const dialogues = [
        { id: 'message-box-01', character: 'npc' },
        { id: 'message-box-02', character: 'main' },
        { id: 'message-box-03', character: 'main' },
        { id: 'message-box-04', character: 'npc' },
        { id: 'message-box-05', character: 'main' },
        { id: 'message-box-06', character: 'npc' },
        { id: 'message-box-07', character: 'main' },
        { id: 'message-box-input-01', character: 'input' },
        { id: 'message-box-input-02', character: 'input' },
        { id: 'message-box-input-03', character: 'input' },
        { id: 'message-box-input-04', character: 'input' },
        { id: 'message-box-08', character: 'main' },
        { id: 'message-box-09', character: 'npc' },
        { id: 'message-box-10', character: 'main' },
        { id: 'message-box-11', character: 'npc' },
        { id: 'message-box-12', character: 'main' },
        { id: 'message-box-13', character: 'main' },
        { id: 'message-box-14', character: 'main' },
        { id: 'message-box-15', character: 'main' },
        { id: 'message-box-16', character: 'npc' },
        { id: 'message-box-17', character: 'main' },
        { id: 'message-box-18', character: 'npc' },
        { id: 'message-box-19', character: 'main' },
    ];

    const audio = document.getElementById('myAudio')

    audio.volume = 0.15,

    document.body.addEventListener("mousemove", function(){
        audio.play();
    })

    let characterPosition = 78;
    let dialogueStep = 0;
    let dialogueActive = false;
    let cattleCount = 0;
    let oldCount = 0;
    let investmentCount = 0;
    let timeCount = 0;

    function moveCharacter(event) {
        if (dialogueActive) return;

        if ((event.key === 'a' || event.key === 'ArrowLeft' || event.key === 'A') && characterPosition > 30) {
            characterPosition -= 1;
        } else if ((event.key === 'd' || event.key === 'ArrowRight' || event.key === 'D') && characterPosition < 85) {
            characterPosition += 1;
        }

        mainCharacter.style.left = characterPosition + '%';

        if (characterPosition <= 33 && dialogueStep === 0) {
            showDialogue();
        }
    }

    function showDialogue() {
        if (dialogueStep < dialogues.length) {
            const currentDialogue = dialogues[dialogueStep];
            const messageBox = document.getElementById(currentDialogue.id);

            messageBox.classList.remove('hidden');
            messageBox.classList.add('message-box');

            dialogueStep++;
            dialogueActive = true;

            if (currentDialogue.character !== 'input') {
                document.addEventListener('click', hideDialogue);
            } else {
                switch (currentDialogue.id) {
                    case 'message-box-input-01':
                        submitButton01.addEventListener('click', handleCattleInput);
                        break;
                    case 'message-box-input-02':
                        submitButton02.addEventListener('click', handleOldInput);
                        break;
                    case 'message-box-input-03':
                        submitButton03.addEventListener('click', handleInvestmentInput);
                        break;
                    case 'message-box-input-04':
                        submitButton04.addEventListener('click', handleTimeInput);
                        break;
                }
            }
        }
    }

    function hideDialogue(event) {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
            const previousDialogue = dialogues[dialogueStep - 1];
            const previousMessageBox = document.getElementById(previousDialogue.id);

            previousMessageBox.classList.add('hidden');
            dialogueActive = false;

            if (dialogueStep < dialogues.length) {
                document.removeEventListener('click', hideDialogue);
                showDialogue();
            } else {
                document.removeEventListener('click', hideDialogue);
            }
        }
    }

    cattleInput.addEventListener('keydown', (event)=> {
            if(event.key == 'Enter'){
                submitButton01.click();
            }
     })

    oldInput.addEventListener('keydown', (event)=> {
            if(event.key == 'Enter'){
                submitButton02.click();
            }
     })
 
     investmentInput.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            submitButton03.click();
        }
     })
     
     timeInput.addEventListener('keydown', (event) => {
        if(event.key == "Enter"){
            submitButton04.click();
        }
     })

     cattleCount = 0
     oldCount = 0

    function handleCattleInput() {
        cattleCount = parseInt(cattleInput.value);

        if (isNaN(cattleCount) || cattleCount <= 0) {
            alert('Por favor, insira um número diferente de 0.');
            return;
        }

        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;

        showDialogue();
    }

    function handleOldInput() {
        oldCount = parseInt(oldInput.value);

        if (isNaN(oldCount) || oldCount <= 0) {
            alert('Por favor, insira um número diferente de 0.');
            return;
        }

        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;

        showDialogue();
    }
    function handleInvestmentInput() {
        investmentCount = parseInt(investmentInput.value);

        if (isNaN(investmentCount) || investmentCount <= 0) {
            alert('Por favor, insira um número diferente de 0.');
            return;
        }

        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;

        showDialogue();
    }


    function handleTimeInput() {
         timeCount = parseInt(timeInput.value);
    
        if (isNaN(timeCount) || timeCount <= 0) {
            alert('Por favor, insira um número diferente de 0.');
            return;
        }

        const razao = cattleCount / oldCount;
        const P0 = cattleCount + investmentCount;
        const rateCount = Math.log(razao);
        const t = timeCount;
        const P_t = P0 * Math.exp(rateCount * t);
    
        const mainDialogueBox = document.getElementById('message-box-08');
        mainDialogueBox.querySelector('p').textContent = `Portanto, com uma taxa de crescimento anual de ${(rateCount * 100).toFixed(2)}%, em ${timeCount} ano(s), você terá aproximadamente ${Math.round(P_t)} vacas.`;
    
        mainDialogueBox.classList.remove('hidden');
        mainDialogueBox.classList.add('message-box');
    
        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;
    
        showDialogue();
    }

    document.getElementById('help-popup').addEventListener('click', function(){
        const helpContent = document.getElementById('help-content');
        helpContent.classList.toggle('hidden');
    })

    document.getElementById('reset-game').addEventListener('click', function(){
        window.location.reload();
    })
    
    function goBackDialogue() {
        if (dialogueStep > 1) {
            const currentDialogue = dialogues[dialogueStep - 1];
            const previousDialogue = dialogues[dialogueStep - 2];
            const currentMessageBox = document.getElementById(currentDialogue.id);
            const previousMessageBox = document.getElementById(previousDialogue.id);
            currentMessageBox.classList.add('hidden');
            previousMessageBox.classList.remove('hidden');
            previousMessageBox.classList.add('message-box');

            dialogueStep--;
            dialogueActive = true;

            if (previousDialogue.character !== 'input') {
                document.addEventListener('click', hideDialogue);
            }
        }
    }

    const resolutionAlert = document.getElementById('resolution-alert');

    function checkResolution() {
        if (window.innerWidth <= 1023) {
            resolutionAlert.style.display = 'block';
        } else {
            resolutionAlert.style.display = 'none';
        }
    }

    checkResolution();

    window.addEventListener('resize', checkResolution);

    document.addEventListener('keydown', moveCharacter);
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        goBackDialogue();
    });

});
