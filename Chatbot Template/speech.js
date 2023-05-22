let speaking = false
let listening = false

// Start the speech recognition
function startRecognition() {
  speechRec = new p5.SpeechRec()       // speech recognition object (will prompt for mic access)
  speechRec.onResult = gotSpeech       // say what function to call when we hear something
  speechRec.onEnd = restartRecognition // what to happen when the speech recognition stops
  continuous = false
  interim = false
  speechRec.start(continuous, interim) // start listening
  listening = true
}

// Restart the speech recognition
function restartRecognition(){
  //print("restart")
  speechRec.start();
  listening = false
}


function startGeneration() {
  speechGen = new p5.Speech(); // speech synthesis object
}