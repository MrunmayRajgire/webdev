let gamePattern = [];

let buttonColours = ['red','blue','green','yellow'];

function nextSequence()
{
    let randomNumber = Math.floor(Math.random() * 4);
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
$('#' + randomChosenColour)