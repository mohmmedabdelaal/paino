/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
export class Beat {
  constructor(soundSrc) {
    this.soundSrc = new Audio(soundSrc);
  }
  play() {
    this.soundSrc.currentTime = 0;
    this.soundSrc.play();
  }
}

/**
 * Button class that keeps track of the button color based on a press
 */
export class Button {
  constructor(color, keyCode) {
    this.element = document.getElementById(keyCode);
    this.color = color;
    this.keyCode = keyCode;
    this.createButtonColorHtml();
    this.createButtonTransaction();
  }

  createButtonColorHtml() {
    this.element.style.borderColor = this.color;
  }
  createButtonTransaction() {
    this.element.addEventListener('transitionend', () => {
      this.deselect();
    });
  }
  select() {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 18px 0px ${this.color}`;
  }
  deselect() {
    this.element.style.backgroundColor = 'transparent';
    this.element.style.boxShadow = 'none';
  }
}
