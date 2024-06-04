document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const outputField = document.getElementById('output-field');
    const buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const text = inputField.value;
        const action = button.classList[1];
  
        switch (action) {
          case 'uppercase':
            outputField.textContent = text.toUpperCase();
            outputField.className = 'uppercase';
            break;
          case 'lowercase':
            outputField.textContent = text.toLowerCase();
            outputField.className = ''; // Remove any other classes
            break;
          case 'capitalize':
            outputField.textContent = text
              .toLowerCase()
              .replace(/\b\w/g, char => char.toUpperCase());
            outputField.className = 'capitalize';
            break;
          case 'bold':
            outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold';
            break;
          case 'italic':
            outputField.classList.toggle('italic');
            break;
          case 'underline':
            outputField.classList.toggle('underline');
            break;
          default:
            break;
        }
      });
    });
  });
  