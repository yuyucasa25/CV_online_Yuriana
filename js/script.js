// js/script.js
const lastUpdatedEl = document.getElementById('lastUpdated');
const btn = document.getElementById('updateBtn');

function setTimeNow(){
  const now = new Date();
  lastUpdatedEl.textContent = 'Última actualización: ' + now.toLocaleString('es-CO');
}
btn.addEventListener('click', setTimeNow);

// Pon la hora al cargar la página (útil para verificar cambios)
setTimeNow();
