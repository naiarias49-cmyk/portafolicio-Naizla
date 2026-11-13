
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTOS DEL MODO OSCURO
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    // CARGAR TEMA GUARDADO
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    // CAMBIAR ENTRE MODO CLARO Y OSCURO
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("portfolio-theme", "dark");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("portfolio-theme", "light");
        }
    });

    // CERRAR MENÚ EN MÓVILES AL SELECCIONAR UNA SECCIÓN
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (navbarCollapse.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
            }

        });
    });

    // FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const asunto = encodeURIComponent("Mensaje desde mi portafolio");
        const cuerpo = encodeURIComponent(
            "Nombre: " + nombre +
            "\nCorreo: " + correo +
            "\n\nMensaje:\n" + mensaje
        );

        window.location.href =
            "mailto:naiarias49@gmail.com?subject=" + asunto + "&body=" + cuerpo;
    });

});
