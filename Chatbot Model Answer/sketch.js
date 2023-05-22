/*
 * Model answer for chatbot workshop
 */

let speechRec
let speechGen
let timer
let lastTimer

let pleasantries = ["That's nice", "aah-haa", "good", "wow", "oooh"]
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
    //print("too soon")
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
  
  // 1. Same response every time
  //speechGen.speak("That's nice")
  
  // 2. Random response
  //speechGen.speak(random(pleasantries))
  
  // 3. Based on what was said, say something back  
  if (said.includes("hello")) {
    speechGen.speak("Hello human")
  }
  else if (said.includes("have a nice day")) {
    speechGen.speak("You too")    
  }
  else if (said.includes("joke")) {
    speechGen.speak(random(jokes))
  }
  else if (said.includes("i don't know")) {
    if (said.includes(" sticky"))
      speechGen.speak("A stick!")
    else if (said.includes(" hat"))
      speechGen.speak("You wait here. I’ll go on a head.")
    else if (said.includes(" dog"))
      speechGen.speak("A labracadabrador")
  }
  else if (said.includes("what") && said.includes("capital of peru")) {
    speechGen.speak("The capital of Peru is Lima")
  }
  else if (said.includes("who") && said.includes("best programmer")) {
    speechGen.speak("You are the code master")
  }
  else if (said.includes("draw") && said.includes("circle")) {
    circle(200,200,50)
  }
  else {
    speechGen.speak(random(pleasantries))
  }
}

  
function mousePressed() {
  speechGen.listVoices()
  speechGen.setVoice('Google italiano')
  //speech.speak('hi there')
}