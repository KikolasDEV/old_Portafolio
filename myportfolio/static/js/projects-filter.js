document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".project-filter-btn");
    const javaContainer = document.getElementById("java-projects");
    const pythonContainer = document.getElementById("python-projects");
    const javaGrid = document.getElementById("java-projects-grid");
    const proyectosSection = document.getElementById("proyectos");

    let javaLoaded = false;

    // Estado inicial: solo botones visibles, sin proyectos
    javaContainer.classList.add("d-none");
    pythonContainer.classList.add("d-none");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            // Clase active en botón
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            // Ocultamos ambos contenedores y mostramos solo el seleccionado
            if (lang === "java") {
                pythonContainer.classList.add("d-none");
                javaContainer.classList.remove("d-none");

                if (!javaLoaded && javaGrid) {
                    loadJavaProjects();
                    javaLoaded = true;
                }
            } else if (lang === "python") {
                javaContainer.classList.add("d-none");
                pythonContainer.classList.remove("d-none");
            }

            // Centrar scroll en la sección Proyectos para ambos casos
            if (proyectosSection) {
                proyectosSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    function loadJavaProjects() {
        fetch("https://api.github.com/users/KikolasDEV/repos?sort=updated")
            .then((response) => response.json())
            .then((repos) => {
                if (!javaGrid) return;

                javaGrid.innerHTML = "";

                const javaRepos = repos.filter(
                    (repo) => repo.language === "Java"
                );

                if (!javaRepos.length) {
                    javaGrid.innerHTML = `
                        <div class="col-12 text-center">
                            <p>Por ahora no hay proyectos Java públicos en GitHub. Próximamente.</p>
                        </div>`;
                    return;
                }

                javaRepos.forEach((repo) => {
                    const col = document.createElement("div");
                    col.className = "col-md-6 mb-4";

                    col.innerHTML = `
                        <div class="dynamic-project-card">
                            <h3 class="project-title russo-one-regular">${repo.name}</h3>
                            <p class="project-description">
                                ${repo.description || "Proyecto en Java disponible en mi perfil de GitHub."}
                            </p>
                            <div class="d-flex align-items-center gap-3 mt-3">
                                <a href="${repo.html_url}" class="btn project-btn russo-one-regular" target="_blank">
                                    <i class="fab fa-github me-2"></i> GitHub Code
                                </a>
                            </div>
                        </div>
                    `;

                    javaGrid.appendChild(col);
                });
            })
            .catch((error) => {
                console.error("Error cargando repos Java:", error);
                if (javaGrid) {
                    javaGrid.innerHTML = `
                        <div class="col-12 text-center">
                            <p>No se han podido cargar los proyectos Java desde GitHub en este momento.</p>
                        </div>`;
                }
            });
    }
});
