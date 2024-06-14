document.addEventListener('DOMContentLoaded', (event) => {
    const mainCharacter = document.getElementById('main-character');
    const npcCharacter = document.getElementById('npc-character');
    const dialogues = [
        { id: 'message-box-1', character: 'main' },
        { id: 'message-box-3', character: 'npc' },
        { id: 'message-box-2', character: 'main' },
        { id: 'message-box-4', character: 'npc' }
    ];

    let characterPosition = 85; // Starting position as a percentage
    let dialogueStep = 0;

    // Move character function
    function moveCharacter(event) {
        if ((event.key === 'a' || event.key === 'ArrowLeft') && characterPosition > 30) {
            characterPosition -= 1;
        } else if ((event.key === 'd' || event.key === 'ArrowRight') && characterPosition < 85) {
            characterPosition += 1;
        }

        mainCharacter.style.left = characterPosition + '%';

        // Check if main character reaches the NPC
        if (characterPosition <= 50) {
            document.addEventListener('click', showDialogue);
        }
    }

    function showDialogue() {
        if (dialogueStep < dialogues.length) {
            const currentDialogue = dialogues[dialogueStep];
            const messageBox = document.getElementById(currentDialogue.id);

            messageBox.classList.remove('hidden');
            messageBox.classList.add('message-box');

            dialogueStep++;
            if (dialogueStep < dialogues.length) {
                setTimeout(() => {
                    messageBox.classList.add('hidden');
                }, 2000); // Hide message box after 2 seconds
            } else {
                document.removeEventListener('click', showDialogue);
            }
        }
    }

    // Event listener for keypress
    document.addEventListener('keydown', moveCharacter);
});
