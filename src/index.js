import '../assets/css/style.css';
import sound1 from '../assets/sound/Cymbal Suspended 2.mp3';
import sound2 from '../assets/sound/Piano Chord 209.mp3';
import sound3 from '../assets/sound/Piano Chord 208.mp3';
import sound4 from '../assets/sound/Drum Sticks Hit 3.mp3';
import sound5 from '../assets/sound/Drum Snare Roll.mp3';
import sound6 from '../assets/sound/PREL Musical 57.mp3';
import sound7 from '../assets/sound/Drum Snare Roll.mp3';
import sound8 from '../assets/sound/Musical Compos 33.mp3';
import sound9 from '../assets/sound/Musical Orches 4.mp3';
import { Beat, Button } from './utils';

/**
 * TODO: Create a keydown listener to track what keys are hit
 * TODO: Create a Beat class to represent the beat object in utils.js
 * TODO: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * TODO: Button pt1: Initialize color and element values
 * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * TODO: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
  65: {
    beat: new Beat(sound1),
    button: new Button('#00fffe', 65),
  },
  83: {
    beat: new Beat(sound2),
    button: new Button('#00fffe', 83),
  },
  68: {
    beat: new Beat(sound3),
    button: new Button('#00fffe', 68),
  },
  70: {
    beat: new Beat(sound4),
    button: new Button('#FF00FF', 70),
  },
  71: {
    beat: new Beat(sound9),
    button: new Button('#FF00FF', 71),
  },
  72: {
    beat: new Beat(sound5),
    button: new Button('#FF00FF', 72),
  },
  74: {
    beat: new Beat(sound6),
    button: new Button('#FF00FF', 74),
  },
  75: {
    beat: new Beat(sound7),
    button: new Button('#FFFFFF', 75),
  },
  76: {
    beat: new Beat(sound8),
    button: new Button('#FFFFFF', 76),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
const triggerBeat = ({ keyCode }) => {
  let code = keyCode;
  if (code in beats) {
    beats[code].button.select();
    beats[code].beat.play();
  }
};

document.addEventListener('keydown', triggerBeat);

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
