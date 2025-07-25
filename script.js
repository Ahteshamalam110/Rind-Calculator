const display = document.getElementById('display');

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Evaluate the expression safely
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
