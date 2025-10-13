// 🌸 Detecta cuando los elementos entran al viewport
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150; // puedes ajustar este valor

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

// 🌸 Tabs dinámicos (Projects / Certificates / Skills)
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// 🌸 Resalta dinámicamente el enlace del menú según la sección visible
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// 🌸 Selección de elementos
const form = document.querySelector(".contact-form");
const notification = document.createElement("div");
notification.classList.add("notification");
document.body.appendChild(notification);

// 🌟 Función para mostrar notificaciones
function showNotification(message, isSuccess = true) {
  notification.textContent = message;
  notification.style.background = isSuccess
    ? "rgba(255, 87, 203, 0.95)" // fucsia bonito
    : "rgba(255, 50, 50, 0.9)"; // rojo suave si hay error

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 4000);
}

// ✨ Validación del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita el reload automático

  const nombre = form.querySelector("#nombre").value.trim();
  const correo = form.querySelector("#correo").value.trim();
  const mensaje = form.querySelector("#mensaje").value.trim();

  // 🩷 Validar nombre
  if (nombre.length < 3) {
    showNotification("Por favor escribe tu nombre completo 💬", false);
    return;
  }

  // 💌 Validar correo con expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    showNotification("Por favor escribe un correo válido 📧", false);
    return;
  }

  // 📝 Validar mensaje
  if (mensaje.length < 10) {
    showNotification("Tu mensaje es muy corto, cuéntame más 💌", false);
    return;
  }

  // ✅ Enviar formulario a Formspree
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    showNotification("✅ Mensaje enviado con Exito 💌!");
    form.reset(); // Limpia los campos
  } else {
    showNotification("❌ Ocurrió un error al enviar. Intenta nuevamente.", false);
  }
});


// 🌸 Menú hamburguesa responsive
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

