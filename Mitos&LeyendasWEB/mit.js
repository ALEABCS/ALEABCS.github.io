document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    const toggleButton = document.getElementById('toggle-dark-mode');

    // Actualiza el reloj en formato HH:MM:SS
    const updateClock = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    };

    // Alterna entre el modo oscuro y el modo rojo
    const toggleMode = () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('red-mode');
            toggleButton.textContent = 'Modo Oscuro';
        } else if (document.body.classList.contains('red-mode')) {
            document.body.classList.remove('red-mode');
            document.body.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
        } else {
            // Si no hay ningún modo aplicado, aplicar el modo oscuro por defecto
            document.body.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
        }
    };

    // Configura el reloj para actualizar cada segundo
    setInterval(updateClock, 1000);

    // Configura el botón para alternar el modo
    toggleButton.addEventListener('click', toggleMode);

    // Inicializa el reloj al cargar la página
    updateClock();
});
