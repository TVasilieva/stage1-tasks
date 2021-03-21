function getFullscreenElement() {
    return document.fullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen().catch(console.log);
    }
}
/* Fullscreen mode*/

// 
// const PIANO = document.getElementById('piano');

// const startSound = (event) => {
//     event.target.classList.add('active');
// }

// const stopSound = (event) => {
//     event.target.classList.remove('active');
// }

// const startCorrespondOver = (event) => {
//     if (event.target.classList.contains('piano-key')) {
//         event.target.classList.add('active');
//     }
//     COLLECTION.forEach((elem) => {
//         elem.addEventListener('mouseover', startSound);
//         elem.addEventListener('mouseout', stopSound);
//     });
// }

// const stopCorrespondOver = () => {
//     COLLECTION.forEach((elem) => {
//         elem.classList.remove('active');
//         elem.removeEventListener('mouseover', startSound)
//         elem.removeEventListener('mouseout', stopSound)
//     });
// }

// PIANO.addEventListener('mousedown', startCorrespondOver, false);
// PIANO.addEventListener('mouseup', stopCorrespondOver);

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const pianoBtn = document.querySelector(`.piano-key[data-key="${e.which}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    pianoBtn.classList.add('playing');
  });

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.piano-key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('click', playAudio));

  function playAudio(e) {
      let key = e.target;
      const letter = document.getElementById(key.dataset.letter)
      if(!letter) return;
      letter.currentTime = 0;
      letter.play();
      key.classList.add('active');
  }

  
