var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var starOpacity = Math.random();
  starArray.push({ x: x, y: y, radius: radius, hue: hue, sat: sat, opacity: starOpacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

var valentinePrompt = document.getElementById("valentinePrompt");
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var heartsContainer = document.getElementById("heartsContainer");

var yesScale = 1;
var heartsStarted = false;
var noLastX = null;
var noLastY = null;

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach(function (line, index) {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 24);
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

  context.shadowColor = "rgba(45, 45, 255, 1)";
  context.shadowBlur = 8;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;

  if (frameNumber < 250) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 250 && frameNumber < 500) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
    opacity = opacity - 0.01;
  }

  if (frameNumber === 500) {
    opacity = 0;
  }
  if (frameNumber > 500 && frameNumber < 750) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    } else {
      context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width / 2, canvas.height / 2);
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 750 && frameNumber < 1000) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    } else {
      context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width / 2, canvas.height / 2);
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber === 1000) {
    opacity = 0;
  }
  if (frameNumber > 1000 && frameNumber < 1250) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("to be alive, and to get to spend this life with you", canvas.width / 2, canvas.height / 2);
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1250 && frameNumber < 1500) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("to be alive, and to get to spend this life with you", canvas.width / 2, canvas.height / 2);
    opacity = opacity - 0.01;
  }

  if (frameNumber === 1500) {
    opacity = 0;
  }
  if (frameNumber > 1500 && frameNumber < 1750) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("is so incredibly, unfathomably unlikely", canvas.width / 2, canvas.height / 2);
    opacity = opacity + 0.01;
  }
  if (frameNumber >= 1750 && frameNumber < 2000) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";
    context.fillText("is so incredibly, unfathomably unlikely", canvas.width / 2, canvas.height / 2);
    opacity = opacity - 0.01;
  }

  if (frameNumber === 2000) {
    opacity = 0;
  }
  if (frameNumber > 2000 && frameNumber < 2250) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    } else {
      context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width / 2, canvas.height / 2);
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 2250 && frameNumber < 2500) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    } else {
      context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width / 2, canvas.height / 2);
    }

    opacity = opacity - 0.01;
  }

  if (frameNumber === 2500) {
    opacity = 0;
  }
  if (frameNumber > 2500 && frameNumber < 99999) {
    context.fillStyle = "rgba(45, 45, 255, " + opacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["I love you so much Christine, more than", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
    } else {
      context.fillText("I love you so much Christine, more than all the time and space in the universe can contain", canvas.width / 2, canvas.height / 2);
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 2750 && frameNumber < 99999) {
    context.fillStyle = "rgba(45, 45, 255, " + secondOpacity + ")";

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, canvas.height / 2 + 60, fontSize, lineHeight);
    } else {
      context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width / 2, canvas.height / 2 + 50);
    }

    secondOpacity = secondOpacity + 0.01;
  }

  if (frameNumber >= 3000 && frameNumber < 99999) {
    context.fillStyle = "rgba(45, 45, 255, " + thirdOpacity + ")";
    context.fillText("Happy Valentine's Day <3", canvas.width / 2, canvas.height / 2 + 120);
    thirdOpacity = thirdOpacity + 0.01;
    valentinePrompt.style.display = "block";
  }

  context.shadowColor = "transparent";
  context.shadowBlur = 0;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
}

function spawnHeartBurst(count) {
  for (var i = 0; i < count; i++) {
    var heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "\u2764";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 0.4 + "s";
    heart.style.fontSize = 18 + Math.random() * 28 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(function (heartNode) {
      if (heartNode && heartNode.parentNode) {
        heartNode.parentNode.removeChild(heartNode);
      }
    }, 3200, heart);
  }
}

function randomizeNoButtonPosition() {
  var margin = 16;
  var rect = noButton.getBoundingClientRect();
  var maxX = Math.max(margin, window.innerWidth - rect.width - margin);
  var maxY = Math.max(margin, window.innerHeight - rect.height - margin);
  var yesRect = yesButton.getBoundingClientRect();
  var randomX = margin;
  var randomY = margin;
  var tries = 0;

  function overlapsYes(x, y) {
    var noLeft = x;
    var noTop = y;
    var noRight = x + rect.width;
    var noBottom = y + rect.height;

    return !(noRight < yesRect.left || noLeft > yesRect.right || noBottom < yesRect.top || noTop > yesRect.bottom);
  }

  do {
    randomX = getRandom(margin, Math.floor(maxX));
    randomY = getRandom(margin, Math.floor(maxY));
    tries++;
  } while (
    (
      overlapsYes(randomX, randomY) ||
      (noLastX !== null && Math.abs(randomX - noLastX) < 24 && Math.abs(randomY - noLastY) < 24)
    ) &&
    tries < 60
  );

  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
  noLastX = randomX;
  noLastY = randomY;
}

yesButton.addEventListener("click", function () {
  spawnHeartBurst(24);
  if (!heartsStarted) {
    heartsStarted = true;
    setInterval(function () {
      spawnHeartBurst(8);
    }, 1200);
  }
});

noButton.addEventListener("click", function () {
  // Grow from the current size by 25% each click.
  yesScale = yesScale * 1.25;
  yesButton.style.transform = "scale(" + yesScale + ")";
  randomizeNoButtonPosition();
});

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

  if (noButton.style.position === "fixed") {
    randomizeNoButtonPosition();
  }
});

window.requestAnimationFrame(draw);
