let answer = "";
let data; // variable for the json data
let inputField; //the user input field
let sendBttn; // the button to send input to the bot
function preload(){
  data = loadJSON("bot.json"); // load the json file
}

function setup() {
  createCanvas(400, 400);
  console.log(data);
  
  inputField = createInput(""); // create the input field
  inputField.size(width/2,40);
  inputField.position(width/4,height/4)
  sendBttn = createButton("SEND");
  sendBttn.size(100,30);
  sendBttn.position(width/4,height/4+50);
  sendBttn.mousePressed(answerMe); // when the button is pressed, callback function will be triggered
}
function answerMe(){
  // get the input
  let inputStr = inputField.value();
  inputStr = inputStr.toLowerCase();
  console.log(inputStr);
  // loop through the brain array and through each triggers array
  
  // if there is a match, select randomly from the responses
  
  // break out of the loop
  loop1: for(let i = 0; i<data.brain.length;i++){
  loop2: for(let j=0; j<data.brain[i].triggers.length; j++){
      // check if the user input contains the key phrase
      if(inputStr.indexOf(data.brain[i].triggers[j])!==-1){
        answer = random(data.brain[i].responses);
        
        break loop1;
      }else{
        answer = random(data.catchall);
      }
        
      }
    }
  
}


function draw() {
  background(159,43,104);
  textAlign(CENTER);
  text(answer,width/2,height/2);
}