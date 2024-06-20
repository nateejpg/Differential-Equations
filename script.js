document.addEventListener('DOMContentLoaded', () => {
    const mainCharacter = document.getElementById('main-character');
    const npcCharacter = document.getElementById('npc-character');
    const submitButton01 = document.getElementById('submit-button-01');
    const submitButton02 = document.getElementById('submit-button-02');
    const submitButton03 = document.getElementById('submit-button-03');
    const submitButton04 = document.getElementById('submit-button-04');
    const cattleInput = document.getElementById('cattle-input');
    const investmentInput = document.getElementById('investment-input');
    const rateInput = document.getElementById('rate-input');
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

    let characterPosition = 78;
    let dialogueStep = 0;
    let dialogueActive = false;
    let cattleCount = 0;
    let investmentCount = 0;
    let rateCount = 0;
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
                        submitButton02.addEventListener('click', handleInvestmentInput);
                        break;
                    case 'message-box-input-03':
                        submitButton03.addEventListener('click', handleRateInput);
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
    } else {
        // Check if the main dialogue box is visible
        const mainDialogueBox = document.getElementById('message-box-07');
        if (!mainDialogueBox.classList.contains('hidden')) {
            mainDialogueBox.classList.add('hidden');
        }
    }
}
    

    function handleCattleInput() {
        cattleCount = parseInt(cattleInput.value);

        if (isNaN(cattleCount) || cattleCount <= 0) {
            alert('Please enter a valid number of cattle greater than 0.');
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
            alert('Please enter a valid number greater than 0.');
            return;
        }

        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;

        showDialogue();
    }

    function handleRateInput() {
        rateCount = parseInt(rateInput.value);

        if (isNaN(rateCount) || rateCount <= 0) {
            alert('Please enter a valid number greater than 0.');
            return;
        }

        const currentDialogue = dialogues[dialogueStep - 1];
        const currentMessageBox = document.getElementById(currentDialogue.id);
        currentMessageBox.classList.add('hidden');
        dialogueActive = false;

        showDialogue();
    }

    function handleTimeInput() {
    const timeCount = parseInt(timeInput.value);

    if (isNaN(timeCount) || timeCount <= 0) {
        alert('Please enter a valid number greater than 0.');
        return;
    }

    const cattleCount = parseInt(cattleInput.value);
    const investmentCount = parseInt(investmentInput.value);
    const rateCount = parseFloat(rateInput.value);

    if (isNaN(cattleCount) || cattleCount <= 0 || isNaN(rateCount) || rateCount <= 0) {
        alert('Please enter valid numbers greater than 0 for cattle count and growth rate.');
        return;
    }

    const P0 = cattleCount + investmentCount;
    const r = Math.log(P0 / cattleCount);
    const t = timeCount;

    const P_t = P0 * Math.exp(r * t);

    const mainDialogueBox = document.getElementById('message-box-08');
    mainDialogueBox.querySelector('p').textContent = `Portanto, com a taxa de crescimento de ${(r * 100).toFixed(2)}%, em ${timeCount} anos, você terá aproximadamente ${Math.round(P_t)} vacas.`;

    mainDialogueBox.classList.remove('hidden');
    mainDialogueBox.classList.add('message-box');

    const currentDialogue = dialogues[dialogueStep - 1];
    const currentMessageBox = document.getElementById(currentDialogue.id);
    currentMessageBox.classList.add('hidden');
    dialogueActive = false;

    showDialogue();
}


    document.addEventListener('keydown', moveCharacter);
});
