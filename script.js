// Obtén todos los elementos de clase "toggle-answer"
const toggleButtons = document.querySelectorAll('.toggle-answer');

// Agrega un evento clic a cada botón
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra el elemento "p" (respuesta) hermano del botón actual
        const answer = button.nextElementSibling;

        // Verifica si la respuesta está oculta
        if (answer.classList.contains('hidden')) {
            // Cierra todas las respuestas abiertas
            document.querySelectorAll('.answer').forEach(a => {
                a.classList.add('hidden');
            });

            // Muestra la respuesta actual
            answer.classList.remove('hidden');
            
            // Cambia el texto del botón a "Ocultar respuesta" solo para el botón actual
            toggleButtons.forEach(btn => {
                if (btn !== button) {
                    btn.textContent = 'Mostrar respuesta';
                } else {
                    button.textContent = 'Ocultar respuesta';
                }
            });
        } else {
            // Oculta la respuesta actual
            answer.classList.add('hidden');

            // Cambia el texto del botón a "Mostrar respuesta" solo para el botón actual
            button.textContent = 'Mostrar respuesta';
        }
    });
});
