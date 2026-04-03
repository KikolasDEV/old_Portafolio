document.addEventListener("DOMContentLoaded", function () {
    const currentLang = document.documentElement.lang === "en" ? "en" : "es";
    const placeholder = currentLang === "en" ? "Write your message" : "Escribe tu mensaje";

    // Inicializar el editor Quill
    const quill = new Quill('#editor', {
        modules: {
            toolbar: '#editor-container',
        },
        placeholder: placeholder,
        theme: 'snow'
    });

    // Actualizar el textarea oculto antes de enviar el formulario
    document.querySelector('form').onsubmit = function () {
        document.querySelector('#mensaje').value = quill.root.innerHTML;
    };
});
