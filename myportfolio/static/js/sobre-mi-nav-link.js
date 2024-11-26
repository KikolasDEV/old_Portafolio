document.addEventListener("DOMContentLoaded", function () {
    const sobreMiLink = document.querySelector(".nav-link[href='#sobre-mi']");

    if (sobreMiLink) {
        sobreMiLink.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                const offset = -100; // Ajusta la posición en píxeles hacia arriba
                const elementPosition = targetElement.offsetTop + offset;

                // Desplazamiento suave
                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth"
                });

                // Forzar el estado "normal" del enlace después del clic
                setTimeout(() => {
                    sobreMiLink.blur();
                }, 300);
            }
        });
    }
});
