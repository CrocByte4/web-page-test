// function to get the user's name
function getName() {
  let myName = prompt("Who dares enter my domain?");

  document.write(myName);
}

// function to get the age of the user, and responding based on this
function getAge() {
  let age = prompt("For how long have you lived, mortal?");

  let message;

  if (age <= 3) {
    message = "Your skills are impressive, for a baby";
  } else if (age <= 11) {
    message = "The young shall be spared my long and boring backstory";
  } else if (age <= 17) {
    message =
      "Eat your five fruits and vegetables, you cant live off cake alone";
  } else if (age <= 29) {
    message =
      "You are the prime age for cake testing, get in touch for a free sample";
  } else {
    message = "LAAAAAMME. Get outta here ! ! !";
  }

  document.write(message);
}

// function to get the time from the user
function getTime() {
  let time = prompt("What time is it (0-23)");

  let message;

  if (time <= 11) {
    message = "Good morning";
  } else if (time <= 16) {
    message = "Good afternoon";
  } else if (time <= 23) {
    message = "Good evening";
  } else {
    message = "Wait, do you live on saturn or something?";
  }

  document.write(message);
}

// function to get passcode from user (84Y8IG1)
function enterPasscode() {
  let answer;

  //while answer is incorrect, keep asking
  while (answer != `84Y8IG1`) {
    answer = prompt("Please enter the passcode");

    if (answer != `84Y8IG1`) {
      alert("Passcode incorrect! Please enter the correct passcode");
    } else {
      alert("Passcode verified");
    }
  }
}
