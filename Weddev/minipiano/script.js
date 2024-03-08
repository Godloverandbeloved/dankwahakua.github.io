function main() {
    const piano = {
      audio: new Audio("piano_C.mp3"),
      "C": 0,
      "C#": 1,
      "D": 2,
      "D#": 3,
      "E": 4,
      "F": 5,
      "F#": 6,
      "G": 7,
      "G#": 8,
        "A": 9,
        "A#": 10,
        "B": 11,
        "C2": 12,
        "C#2": 13,
      "D2": 14,
      "D#2": 15,
      "E2": 16,
      "F2": 17,
      "F#2": 18,
      "G2": 19,
     "G#2": 20,
      "A2": 21,
      "A#2": 22,
       "B2": 23,
      

      // Add other notes here
      play(note) {
        this.audio.currentTime = 0;
        this.audio.playbackRate = 2 ** (this[note] / 12);
        this.audio.preservesPitch = false;
        this.audio.play();
      },
      pause() {
        this.audio.pause();
      }
    };
  
    const pianoKeys = document.querySelector(".piano");
  
    pianoKeys.addEventListener("mousedown", function(event) {
      const note = event.target.classList[1];
      if (note) {
        piano.play(note);
      }
    });
  
    pianoKeys.addEventListener("mouseup", function() {
      piano.pause();
    });
  }
  
  window.addEventListener("load", main);