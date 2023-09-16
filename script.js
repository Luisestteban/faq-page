// Obtén todos los elementos de clase "toggle-answer"
const toggleButtons = document.querySelectorAll('.toggle-answer');

// Agrega un evento clic a cada botón
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Encuentra el elemento "p" (respuesta) hermano del botón actual
    const answer = button.parentElement.nextElementSibling;

    // Verifica si la respuesta está oculta
    if (answer.classList.contains('hidden')) {
      // Cierra todas las respuestas abiertas
      document.querySelectorAll('.answer').forEach(a => a.classList.add('hidden'));

      // Muestra la respuesta actual
      answer.classList.remove('hidden');

      // Cambia el texto del botón a la flecha hacia arriba
      button.innerHTML = '&#9650;';
    } else {
      // Oculta la respuesta actual
      answer.classList.add('hidden');

      // Cambia el texto del botón a la flecha hacia abajo
      button.innerHTML = '&#9660;';
    }
  });
});
