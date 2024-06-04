const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Awesome', 'Confusing', 'Simple', 'Weird'];
const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000; // Delay between current and next word

let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function type() {
  if (charIndex < words[wordIndex].length) {
    if (!isErasing && cursor.classList.contains('typing')) {
      cursor.classList.remove('typing');
    }
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.add('typing');
    isErasing = true;
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (isErasing && cursor.classList.contains('typing')) {
      cursor.classList.remove('typing');
    }
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    isErasing = false;
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) setTimeout(type, newWordDelay);
});
