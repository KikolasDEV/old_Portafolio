document.addEventListener("DOMContentLoaded", function () {
    const dynamicName = document.getElementById("dynamic-name");
    const cursor = document.getElementById("cursor");
    
    const rootStyles = getComputedStyle(document.documentElement);
    const accentSoft = rootStyles.getPropertyValue("--accent-soft").trim();

    const names  = ["José Francisco", "Kiko"];
    const colors = ["#F5EDED", accentSoft];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentName  = names[index];
        const currentColor = colors[index];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        dynamicName.textContent = currentName.substring(0, charIndex);

        // Aquí forzamos el color en cada frame
        dynamicName.style.color = currentColor;
        cursor.style.color = currentColor;

        if (!isDeleting && charIndex === currentName.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % names.length;
            setTimeout(typeEffect, 500);
        } else {
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});
