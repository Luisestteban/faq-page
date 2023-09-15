const toggleButtons = document.querySelectorAll('.toggle-answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.classList.contains('hidden')) {
            document.querySelectorAll('.answer').forEach(a => {
                a.classList.add('hidden');
            });

            answer.classList.remove('hidden');
            toggleButtons.forEach(btn => {
                if (btn !== button) {
                    btn.textContent = 'Mostrar respuesta';
                } else {
                    button.textContent = 'Ocultar respuesta';
                }
            });
        } else {

            answer.classList.add('hidden');

            button.textContent = 'Mostrar respuesta';
        }
    });
});
