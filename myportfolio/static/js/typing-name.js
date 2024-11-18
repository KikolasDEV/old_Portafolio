document.addEventListener("DOMContentLoaded", function () {
    const dynamicName = document.getElementById("dynamic-name");
    const cursor = document.getElementById("cursor");
    const names = ["José Francisco", "Kiko"];
    const colors = ["#F5EDED", "#D72323"]; // Colores correspondientes
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentName = names[index];
        const currentColor = colors[index];

        if (isDeleting) {
            // Borra una letra
            charIndex--;
            dynamicName.textContent = currentName.substring(0, charIndex);
        } else {
            // Escribe una letra
            charIndex++;
            dynamicName.textContent = currentName.substring(0, charIndex);
        }

        // Cambiar el color mientras escribe
        dynamicName.style.color = currentColor;
        cursor.style.color = currentColor;

        // Determina si el texto completo se escribió o borró
        if (!isDeleting && charIndex === currentName.length) {
            // Pausa al completar la escritura
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Espera 2 segundos antes de borrar
        } else if (isDeleting && charIndex === 0) {
            // Cambia al siguiente nombre después de borrar
            isDeleting = false;
            index = (index + 1) % names.length;
            setTimeout(typeEffect, 500); // Pausa breve antes de escribir
        } else {
            // Controla la velocidad de escritura y borrado
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
    }

    // Inicia el efecto de escritura
    typeEffect();
});
