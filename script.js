let currentAudio = null;

function playSound(soundFile) {
    // Stop previous sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(soundFile);
    currentAudio.play();
}