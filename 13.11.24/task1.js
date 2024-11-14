let currentFontSize = 16;

const text = document.getElementById("text");
const increaseFontButton = document.getElementById("increaseFont");
const decreaseFontButton = document.getElementById("decreaseFont");

increaseFontButton.addEventListener("click", function () {
  currentFontSize += 2;
  text.style.fontSize = currentFontSize + "px";
});

decreaseFontButton.addEventListener("click", function () {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    text.style.fontSize = currentFontSize + "px";
  }
});

const colorInput = document.getElementById("colorInput");
const applyColorButton = document.getElementById("applyColor");

applyColorButton.addEventListener("click", function () {
  const color = colorInput.value;
  if (color) {
    text.style.color = color;
  } else {
    alert("Xahiş edirik, rəng dəyəri daxil edin!");
  }
});

