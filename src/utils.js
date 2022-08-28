/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
export class Beat {
  constructor(audioSrc) {
    this.audioSrc = new Audio(audioSrc);
  }
  play() {
    this.audioSrc.currentTime = 0;
    this.audioSrc.play();
  }
}

/**
 * Button class that keeps track of the button color based on a press
 */
export class Button {
  constructor(color, keyCode) {
    this.keyCode = keyCode;
    this.color = color;
  }

  setButtonColorInHTML() {}

  createTransitionEndListener() {}

  select() {}

  deselect() {}
}
