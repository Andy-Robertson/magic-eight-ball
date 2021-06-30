// Assign shake-btn and display to array shakeButton and screen
let shakeButton = document.getElementById("shake-btn");
let screen = document.getElementById("display");

// Adds event listener to the shakeButton
shakeButton.addEventListener("click", () => {
  generateMessage();
});

// Declares the message variable used to store the corresponding output string

// Picks the message depending on the random number generated

const generateMessage = () => {
  let message = "";
  // Generates a random number between 0 and 19;
  let randomMessageNumber = Math.round(Math.random() * 19);

  switch (randomMessageNumber) {
    case 0:
      message = "It is Certain.";
      break;
    case 1:
      message = "It is decidedly so.";
      break;
    case 2:
      message = "Without a doubt.";
      break;
    case 3:
      message = "Yes definitely.";
      break;
    case 4:
      message = "You may rely on it.";
      break;
    case 5:
      message = "As I see it, yes.";
      break;
    case 6:
      message = "Most likely.";
      break;
    case 7:
      message = "Outlook good.";
      break;
    case 8:
      message = "Yes.";
      break;
    case 9:
      message = "Signs point to yes.";
      break;
    case 10:
      message = "Reply hazy, try again.";
      break;
    case 11:
      message = "Ask again later.";
      break;
    case 12:
      message = "Better not tell you now.";
      break;
    case 13:
      message = "Cannot predict now.";
      break;
    case 14:
      message = "Concentrate and ask again.";
      break;
    case 15:
      message = "Don't count on it.";
      break;
    case 16:
      message = "My reply is no.";
      break;
    case 17:
      message = "My sources say no.";
      break;
    case 18:
      message = "Outlook not so good.";
      break;
    case 19:
      message = "Very doubtful.";
      break;
  }

  return message;
};

console.log(message);
