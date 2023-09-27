const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  kickElement: null,
  hihatElement: null,
  snareElement: null,
  wobbleElement: null,
  vocalElement: null,
  gregElement: null,
  
  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  kickAudio: null,
  hihatAudio: null,
  snareAudio: null,
  wobbleAudio: null,
  vocalAudio: null,
  gregAudio: null,

  /**
   * Méthode permettant d'initialiser la sound board
   */
  init: function() {
    console.log('soundboard.init');
    soundboard.definePads();
    soundboard.preloadSamples();
    soundboard.attachEvents();
  },

  /**
   * Méthode permettant de sélectionner dans le DOM
   * les différents éléments pads
   */
  definePads: function() {
    // TODO 2
    soundboard.kickElement = document.querySelector('.pad-1');
    soundboard.hihatElement = document.querySelector('.pad-2');
    soundboard.snareElement = document.querySelector('.pad-3');
    soundboard.wobbleElement = document.querySelector('.pad-4');
    soundboard.vocalElement = document.querySelector('.pad-5');
    soundboard.gregElement = document.querySelector('.pad-6');
    // etc
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.kickAudio = new Audio('assets/audio/kick.wav');
    soundboard.hihatAudio = new Audio('assets/audio/hihat.wav');
    soundboard.snareAudio = new Audio('assets/audio/snare.wav');
    soundboard.wobbleAudio = new Audio('assets/audio/wobble.wav');
    soundboard.vocalAudio = new Audio('assets/audio/voice.wav');
    soundboard.gregAudio = new Audio('assets/audio/greg.mp3');
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "kick" est pressé
   */
  handleKickClick: function() {
    soundboard.kickAudio.currentTime = 0;
    soundboard.kickAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "hi-hat" est appuyé
   */
  handleHihatClick: function() {
    soundboard.hihatAudio.currentTime = 0;
    soundboard.hihatAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "snare" est appuyé
   */
  handleSnareClick: function() {
    soundboard.snareAudio.currentTime = 0;
    soundboard.snareAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "wobble" est appuyé
   */
  handleWobbleClick: function() {
    soundboard.wobbleAudio.currentTime = 0;
    soundboard.wobbleAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "vocal" est appuyé
   */
  handleFxClick: function() {
    soundboard.vocalAudio.currentTime = 0;
    soundboard.vocalAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "greg" est appuyé
   */
  handleGregClick: function() {
    soundboard.gregAudio.currentTime = 0;
    soundboard.gregAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque n'importe quelle touche du clavier est pressée
  */
  handleKeyboard: function(event) {
    
    binded = true; 
    
    switch (event.key) {
      case 'w':
        targetElement = soundboard.kickElement;
        break;
      case 'x':
        targetElement = soundboard.hihatElement;
        break;
      case 'c':
        targetElement = soundboard.snareElement;
        break;
      case 'v':
        targetElement = soundboard.wobbleElement;
        break;
      case 'b':
        targetElement = soundboard.vocalElement;
        break;
      case 'n':
        targetElement = soundboard.gregElement;
        break;
      default:
        binded = false;
    }

    if (targetElement && binded == true) {
      targetElement.classList.add('hovered');
      setTimeout(() => {
        targetElement.classList.remove('hovered');
      }, 200);
      
      targetElement.click();
    }
  },

  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    // TODO 3
    soundboard.kickElement.addEventListener('click', soundboard.handleKickClick);

    soundboard.hihatElement.addEventListener('click', soundboard.handleHihatClick);

    soundboard.snareElement.addEventListener('click', soundboard.handleSnareClick);

    soundboard.wobbleElement.addEventListener('click', soundboard.handleWobbleClick);

    soundboard.vocalElement.addEventListener('click', soundboard.handleFxClick);

    soundboard.gregElement.addEventListener('click', soundboard.handleGregClick);

    document.addEventListener('keydown', soundboard.handleKeyboard);

  },

}