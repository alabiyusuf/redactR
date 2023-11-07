const redactBtn = document.getElementById('redact');
redactBtn.addEventListener('click', redactFxn);

function redactFxn() {
  const msg = document.getElementById('msg').value;
  const output = document.getElementById('output');
  const redactWords = document.getElementById('redactWords').value;

  if (msg && !redactWords) {
    output.innerHTML = msg;
  } else if (!msg && !redactWords) {
    output.innerHTML = 'Please enter your message and the words to redact.';
  } else {
    // <!-- [a - zA - Z]-->;
    const regex = new RegExp(redactWords, 'gi');
    output.innerHTML = msg.replaceAll(regex, '***');
  }
}
