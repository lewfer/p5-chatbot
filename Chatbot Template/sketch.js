/*
 * Template for chatbot workshop
 */

let speechRec
let speechGen
let timer
let lastTimer

let pleasantries = ["That's nice", "aah-haa", "good", "wow", "oooh"]

let jokes = ["What's brown and sticky?", "What did one hat say to the other?", "What do you call a magic dog?"]


function setup() {
  createCanvas(400, 400);
  startRecognition() 
  startGeneration()
  timer = 0
  lastTimer = 0
}

function draw() {
  if (timer%100==0)
    background(random(0,255),random(0,255),random(0,255));
  timer++
}


// The speech recognizer heard something
function gotSpeech()
{
  // Wait a bit from the time the last words were spoken
  if (timer-lastTimer < 150) {
    return
  }
    
  // Get what was said 
  said = speechRec.resultString.toLowerCase()
    
  // Reply to it
  replyTo(said)
    
  // Remember when we replied
  lastTimer = timer
} 

// Reply to what was said
function replyTo(said) {
  print("You said", said)
  
  // Based on what was said, say something back  
  if (said.includes("hello")) {
    speechGen.speak("Hello human")
  }
  else if (said.includes("joke")) {
    speechGen.speak("What's brown and sticky?")
  }
  else if (said.includes("i don't know")) {
    speechGen.speak("A stick!")
  }
  else {
    speechGen.speak(random(pleasantries))
  }
}

  