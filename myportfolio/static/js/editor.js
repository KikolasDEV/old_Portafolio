document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el editor Quill
    const quill = new Quill('#editor', {
        modules: {
            toolbar: '#editor-container',
        },
        placeholder: 'Escribe tu mensaje',
        theme: 'snow'
    });

    // Actualizar el textarea oculto antes de enviar el formulario
    document.querySelector('form').onsubmit = function () {
        document.querySelector('#mensaje').value = quill.root.innerHTML;
    };
});