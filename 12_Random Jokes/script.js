const url = 'https://api.chucknorris.io/jokes/random';

document.getElementById('getJoke').addEventListener('click', () => {
  // Use Promises with Fetch API to handle race condition
  Promise.race([fetch(url), fetch(url)])
    .then(response => response.json())
    .then(data => {
      document.getElementById('display-joke').textContent = data.value;
    })
    .catch(error => console.error('Error:', error));
});
