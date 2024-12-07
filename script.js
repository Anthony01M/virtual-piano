const keys = document.querySelectorAll('.key');
const baseUrl = 'https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/';
const notes = {
    'A0': `${baseUrl}A0.mp3`,
    'A1': `${baseUrl}A1.mp3`,
    'A2': `${baseUrl}A2.mp3`,
    'A3': `${baseUrl}A3.mp3`,
    'A4': `${baseUrl}A4.mp3`,
    'A5': `${baseUrl}A5.mp3`,
    'A6': `${baseUrl}A6.mp3`,
    'A7': `${baseUrl}A7.mp3`,
    'Ab1': `${baseUrl}Ab1.mp3`,
    'Ab2': `${baseUrl}Ab2.mp3`,
    'Ab3': `${baseUrl}Ab3.mp3`,
    'Ab4': `${baseUrl}Ab4.mp3`,
    'Ab5': `${baseUrl}Ab5.mp3`,
    'Ab6': `${baseUrl}Ab6.mp3`,
    'Ab7': `${baseUrl}Ab7.mp3`,
    'B0': `${baseUrl}B0.mp3`,
    'B1': `${baseUrl}B1.mp3`,
    'B2': `${baseUrl}B2.mp3`,
    'B3': `${baseUrl}B3.mp3`,
    'B4': `${baseUrl}B4.mp3`,
    'B5': `${baseUrl}B5.mp3`,
    'B6': `${baseUrl}B6.mp3`,
    'B7': `${baseUrl}B7.mp3`,
    'Bb0': `${baseUrl}Bb0.mp3`,
    'Bb1': `${baseUrl}Bb1.mp3`,
    'Bb2': `${baseUrl}Bb2.mp3`,
    'Bb3': `${baseUrl}Bb3.mp3`,
    'Bb4': `${baseUrl}Bb4.mp3`,
    'Bb5': `${baseUrl}Bb5.mp3`,
    'Bb6': `${baseUrl}Bb6.mp3`,
    'Bb7': `${baseUrl}Bb7.mp3`,
    'C1': `${baseUrl}C1.mp3`,
    'C2': `${baseUrl}C2.mp3`,
    'C3': `${baseUrl}C3.mp3`,
    'C4': `${baseUrl}C4.mp3`,
    'C5': `${baseUrl}C5.mp3`,
    'C6': `${baseUrl}C6.mp3`,
    'C7': `${baseUrl}C7.mp3`,
    'C8': `${baseUrl}C8.mp3`,
    'D1': `${baseUrl}D1.mp3`,
    'D2': `${baseUrl}D2.mp3`,
    'D3': `${baseUrl}D3.mp3`,
    'D4': `${baseUrl}D4.mp3`,
    'D5': `${baseUrl}D5.mp3`,
    'D6': `${baseUrl}D6.mp3`,
    'D7': `${baseUrl}D7.mp3`,
    'Db1': `${baseUrl}Db1.mp3`,
    'Db2': `${baseUrl}Db2.mp3`,
    'Db3': `${baseUrl}Db3.mp3`,
    'Db4': `${baseUrl}Db4.mp3`,
    'Db5': `${baseUrl}Db5.mp3`,
    'Db6': `${baseUrl}Db6.mp3`,
    'Db7': `${baseUrl}Db7.mp3`,
    'Db8': `${baseUrl}Db8.mp3`,
    'E1': `${baseUrl}E1.mp3`,
    'E2': `${baseUrl}E2.mp3`,
    'E3': `${baseUrl}E3.mp3`,
    'E4': `${baseUrl}E4.mp3`,
    'E5': `${baseUrl}E5.mp3`,
    'E6': `${baseUrl}E6.mp3`,
    'E7': `${baseUrl}E7.mp3`,
    'Eb1': `${baseUrl}Eb1.mp3`,
    'Eb2': `${baseUrl}Eb2.mp3`,
    'Eb3': `${baseUrl}Eb3.mp3`,
    'Eb4': `${baseUrl}Eb4.mp3`,
    'Eb5': `${baseUrl}Eb5.mp3`,
    'Eb6': `${baseUrl}Eb6.mp3`,
    'Eb7': `${baseUrl}Eb7.mp3`,
    'F1': `${baseUrl}F1.mp3`,
    'F2': `${baseUrl}F2.mp3`,
    'F3': `${baseUrl}F3.mp3`,
    'F4': `${baseUrl}F4.mp3`,
    'F5': `${baseUrl}F5.mp3`,
    'F6': `${baseUrl}F6.mp3`,
    'F7': `${baseUrl}F7.mp3`,
    'G1': `${baseUrl}G1.mp3`,
    'G2': `${baseUrl}G2.mp3`,
    'G3': `${baseUrl}G3.mp3`,
    'G4': `${baseUrl}G4.mp3`,
    'G5': `${baseUrl}G5.mp3`,
    'G6': `${baseUrl}G6.mp3`,
    'G7': `${baseUrl}G7.mp3`,
    'Gb1': `${baseUrl}Gb1.mp3`,
    'Gb2': `${baseUrl}Gb2.mp3`,
    'Gb3': `${baseUrl}Gb3.mp3`,
    'Gb4': `${baseUrl}Gb4.mp3`,
    'Gb5': `${baseUrl}Gb5.mp3`,
    'Gb6': `${baseUrl}Gb6.mp3`,
    'Gb7': `${baseUrl}Gb7.mp3`
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.dataset.note);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 100);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (notes[key]) {
        playSound(key);
        const pianoKey = document.querySelector(`.key[data-note="${key}"]`);
        if (pianoKey) {
            pianoKey.classList.add('active');
            setTimeout(() => pianoKey.classList.remove('active'), 100);
        }
    }
});

function playSound(note) {
    const audio = new Audio(notes[note]);
    audio.play();
}