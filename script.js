const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

let tiempoRestante = 120; // 2 minutos
const timer = setInterval(() => {
  tiempoRestante--;
  if (tiempoRestante <= 0) {
    clearInterval(timer);
    form.style.display = "none";
    mensaje.textContent = "Tiempo expirado. Escanee nuevamente el código QR.";
  }
}, 1000);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const procedencia = document.getElementById("procedencia").value;

  fetch("TU_URL_DEL_SCRIPT_WEBAPP", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, apellido, procedencia }),
  });

  mensaje.textContent = "Asistencia registrada correctamente.";
  form.reset();
});
